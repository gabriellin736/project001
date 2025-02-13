let button = document.querySelector("form button")
button.addEventListener("click", e =>{
    e.preventDefault();
    let form = e.target.parentElement;
    let todoText = form.children[0].value;
    let todoMonth = form.children[1].value;
    let todoDate = form.children[2].value;
    

    if(todoText===""){
        alert("不能空白");
        return;
    } 

    let section =document.querySelector("section");
    let todo =document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = todoText;
    let time = document.createElement("p");
    time.classList.add("todo-time")
    time.innerText = todoMonth + "/" + todoDate;
    todo.appendChild(text);
    todo.appendChild(time);
    


    let done = document.createElement("div");
    done.classList.add("end");
    let imgCreate = document.createElement("img");
    imgCreate.classList.add("done");
    imgCreate.setAttribute("src","done_24dp_FFFFFF.svg");
    imgCreate.setAttribute("alt", "check done");
    imgCreate.addEventListener("click", e=>{
    todo.classList.toggle("checked");
     })
    

    let imgDelete = document.createElement("img");
    imgDelete.classList.add("delete");
    imgDelete.setAttribute("src","delete_24dp_FFFFFF.svg");
    imgDelete.setAttribute("alt","delete");
    done.appendChild(imgCreate);
    done.appendChild(imgDelete);

    let item = document.createElement("div");
    item.classList.add("all");
    item.appendChild(todo);
    item.appendChild(done);
    section.appendChild(item);


    imgDelete.addEventListener("click", e=>{
        item.addEventListener("animationend", ()=>{
            let text = todo.children[0].innerText;
            let myListArray = JSON.parse(localStorage.getItem("itemList"));
            myListArray.forEach((item, index) =>{
                if(item.todoText == text){
                    myListArray.splice(index ,1);
                    localStorage.setItem("itemList", JSON.stringify(myListArray));
                }
            })
            item.remove();
        })
        item.style.animation = "scaleDown 0.3s forwards";
        })
    
   

    item.style.animation = "scaleUp 0.3s forwards";
    form.children[0].value = "";

    let todoList = {
            todoText:todoText,
            todoMonth:todoMonth,
            todoDate:todoDate
    }
        
    let myList = localStorage.getItem("itemList");
    if(myList==null){
       localStorage.setItem("itemList",JSON.stringify([todoList]));
    }else{
    let myListArray = JSON.parse(myList);
    myListArray.push(todoList);
    localStorage.setItem("itemList",JSON.stringify(myListArray));
    }
})


//瀏覽器重開，依然顯示在網頁上

loadData();

function loadData(){


let myList = localStorage.getItem("itemList");
if(myList !==null){
    let myListArray = JSON.parse(myList);
    myListArray.forEach( itemOjet => {
    let section =document.querySelector("section");
    let todo =document.createElement("div");
    todo.classList.add("todo");
    let text = document.createElement("p");
    text.classList.add("todo-text");
    text.innerText = itemOjet.todoText;
    let time = document.createElement("p");
    time.classList.add("todo-time")
    time.innerText = itemOjet.todoMonth + "/" + itemOjet.todoDate;
    todo.appendChild(text);
    todo.appendChild(time);
    


    let done = document.createElement("div");
    done.classList.add("end");
    let imgCreate = document.createElement("img");
    imgCreate.classList.add("done");
    imgCreate.setAttribute("src","done_24dp_FFFFFF.svg");
    imgCreate.setAttribute("alt", "check done");
    imgCreate.addEventListener("click", e=>{
    todo.classList.toggle("checked");
     })
    

    let imgDelete = document.createElement("img");
    imgDelete.classList.add("delete");
    imgDelete.setAttribute("src","delete_24dp_FFFFFF.svg");
    imgDelete.setAttribute("alt","delete");
    done.appendChild(imgCreate);
    done.appendChild(imgDelete);

    let item = document.createElement("div");
    item.classList.add("all");
    item.appendChild(todo);
    item.appendChild(done);
    section.appendChild(item);


    imgDelete.addEventListener("click", e=>{
    item.addEventListener("animationend", ()=>{
        let text = todo.children[0].innerText;
        let myListArray = JSON.parse(localStorage.getItem("itemList"));
        myListArray.forEach((item, index) =>{
            if(item.todoText == text){
                myListArray.splice(index ,1);
                localStorage.setItem("itemList", JSON.stringify(myListArray));
            }
        })
        item.remove();
    })
    item.style.animation = "scaleDown 0.3s forwards";
    })

        
    });
}

}

function mergeTime(arr1, arr2){
    let result = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if( Number(arr1[i].todoMonth) > Number(arr2[j].todoMonth)){
            result.push(arr2[j]);
            j++;
        } else if (Number(arr1[i].todoMonth) < Number(arr2[j].todoMonth)){
            result.push(arr1[i]);
            i++;
        } else if (Number(arr1[i].todoMonth) == Number(arr2[j].todoMonth)){
            if (Number(arr1[i].todoDate) > Number(arr2[j].todoDate)){
                result.push(arr2[j]);
                j++;
            }else{
                result.push(arr1[i]);
                i++;
            }
        }
    }

    while (i < arr1.length) {
        result.push (arr1[i]);
        i++;
    }

    while ( j < arr2.length) {
        result.push (arr2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr){
    if (arr.length ===1 ){
        return arr;
    }else {
        let middle = Math.floor(arr.length/2);
        let right = arr. slice(0, middle);
        let left = arr.slice(middle, arr.length);
        return mergeTime(mergeSort(right),mergeSort(left));
    }
}

/*驗證演算法排列有無正確
console.log(mergeSort(JSON.parse(localStorage.getItem("itemList"))));
*/


let sortButton = document.querySelector("div.sub button");
let section =document.querySelector("section");
sortButton.addEventListener("click",()=>{

    //sort data
    let sortArray = mergeSort(JSON.parse(localStorage.getItem("itemList")));
    localStorage.setItem("itemList",JSON.stringify(sortArray));

    //remove data
    let len = section.children.length;
    console.log(len);
    for(let i = 0; i < len ; i++){
        section.children[0].remove();
    }

    //load data
    loadData();

})