//console.log(), alert(),prompt()

/*const 不變的、常數 
let name=prompt("請輸入你的名字:");
alert("Hello "+ name); */


/* 運算符號：remainder operator(餘數的意思), power(次方的意思), ++ , +=
取餘數：5%2=1
次方：7**4 = 7*7*7*7 = 2401
++: x=x+1 => x++
--: x=x-1 => x--
+=: x=x+1 =>x+=1 x=x+10 =>x+=10
-=: x=x-1 =>x-=1 */


// 全選+command+/ 可以快速comment out
// sssss
// ScriptProcessorNode

/**
 * 也有這種comment out
 * 前面自動產生“＊”
 */

// 6種儲存資料的類型=原始資料類型
// 1.Number
// 2.string
// 3.boolean
// 4.undefined
// 5.null
// 6.symbol

// Number's methods
// 1.toFix()
// 2.toString()

// String's property and methods
// 1.length
// 2.retrieve character: name[1]
// 3.slice() :
// let name ="David";
// console.log(name.slice(1,4)); 結果為avi


// 4.indexOf()
// 5.toLowerCase(): console.log(name.toLowerCase().indexOf("t"));
// 6.toUpperCase()
// 7.split(): 可以切成array

// 查看資料類型
// let x="true";
// let y= true;
// console.log(typeof x);
// console.log(typeof y);

/**logical operator
== : is comparing if the values are the same on both sides
ex: console.log(3=="3"); true
=== ：is comparing if the values and type are the same on both sides
ex: console.log(3==="3"); false

!= : values are different
!== : values and types are different

&& : 且
ex: A&&B

||: 或
ex: A||B

舉例&&,||：
let condition1=3>2 ; true
let condition2=5>6 ; false
console.log(condition1&&condition2); false
console.log(condition1||condition2); true



let age =prompt("請輸入您的年齡：");

if(age>=0 && age <=12){
    alert("你的兒童票一張100元");
} else if(age >12 && age <=65){
    alert("你的成人票一張250元");
} else if (age>65){
    alert("你的敬老票一張150元");
} else{
    alert("請輸入正確的年齡");
}

number => string  number.toString()
string => number  Number(string)
*/


// Falsy values
// 1.false
// 2.0
// 3.""
// 4.null
// 5.undefined
// 6.NaN: not a number


// Array
// let friends=["John","Sandy","Alex","Jim"];
// index 用法
// console.log(friends[0]); John
// length 用法
// console.log(friends.length); 4

// Array methods
// Push(),pop(),unshift(),shift()
let friends=["John","Sandy","Alex","Jim"];
friends.push("marry");
friends.pop();
console.log(friends);

// function declaration 定義function
function sayHi(){
    console.log("My name is Mike.");
}

// invoke, execute a function 執行function
sayHi();

function sayHi(name,age){
    console.log("My name is " + name + ".");
    console.log("I am "+ age +" years old.");
}
sayHi("Gabriel",20);

/* return 丟出來的意思，需要一個variable 去接住它
function convert(oc){
    return oc*1.8+32;
}
let of=convert(0);
console.log(of);


function convert(oc){
    return oc*1.8+32;
}
let input=prompt("請輸入溫度（度c)");
let result=convert(input);
alert("換算後的溫度為"+result+"度F");
*/

//Object有properties 和 methods 2種，JS 可以製作自己的function 也可以製作自己的object

/*舉例製作自己的object
let David={
     name: "David Clark",
     age: 18,
     is_married: false,
     spouse: null,
     sayHi(){
     console.log("David says hi.");
     },
     walk(){
     console.log("David is walking on the street");
     },
     say(word){
     console.log("David says "+ word);
     },
      sayAge(){
        console.log("David says I am "+ this.age + " years old.");
    }
};
取得object properties
console.log(David[“age”]); 或 console.log(David.age);

執行object methods
David.sayHi();

執行object methods with parameter
David.say("today is a good day.");

執行this.age
David.age= 20;
David.sayAge();
*/

let David={
    name: "David Clark",
    age: 18,
    is_married: false,
    spouse: null,
    sayHi(){
    console.log("David says hi.");
    },
    walk(){
    console.log("David is walking on the street");
    },
    say(word){
    console.log("David says "+ word);
    },
    sayAge(){
        console.log("David says I am "+ this.age + " years old.");
    }
};
David.age= 20;
David.sayAge();

// 查詢資料類型
// console.log(typeof friends);

/* Loop 2種寫法
for(let i=0;i<=10;i++){
    console.log(i);
}

let i=0;
while(i<=10){
    console.log(i);
    i++;
}
*/

/* continue,break,return用法

continue就是不會執行該程式碼
for(let i=0;i<=10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
結果會是0,1,2,3,4,6,7,8,9,10 (只要i==5就不執行，但要繼續往下)


break就是不會執行該程式碼，且後續不會往下執行

for(let i=0;i<=10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}
結果會是0,1,2,3,4 (只要i==5就不執行且不會繼續往下)



在function當中的return keyword會停止整個function的運行，所有的for loop, while loop, if statement都會暫停。

例如：

function trying() {
  for (let i = 0; i < 10; i++) {
    console.log(i);
 
    if (i == 5) {
      return;
    }
  }
}
 
trying();
的結果是：

0
1
2
3
4
5

*/

/* Nested loop
for (let i=0;i<=10;i++){
    for(let j=0;j<5;j++){
        console.log(i,j);
    }
}
*/

/* Loop+Array

let friend=["Josh","John","Marry"];

for(let k=0;k <friend.length;k++){
    console.log(friend[k].toUpperCase());
}
*/

/* Math Object
Math.PI =3.14159
Math.pow(a,b) 平方的意思 a的b次方
Math.random() return0-1之間任一數字(包含0但不包含1)
Math.sqrt() 開根號的意思 Math.sqrt(64) 結果會是8
Math.abs() absolute 絕對值的意思 |-8|=8
Math.floor() 無條件捨去 1.68=>1 
Math.ceil() 無條件進位 3.001=>4
*/

/* 終極密碼遊戲
let answer=Math.floor(Math.random()*100);
let n1=0;
let n2=99;
while(true){
    let guess =Number(prompt("請輸入 "+ n1 + "~" + n2 +"之間的數字"));
    if(guess< n1 || guess >n2){
        alert("你輸入的數字必須介於0-99，請重新輸入");
        continue;
    } 
    if(guess==answer){
        alert("恭喜答對！秘密數字是 "+ answer);
        break;
    }else if (guess > answer){
        n2 = guess;
    }else if (guess < answer){
        n1 = guess;
    }
}
*/

/*DOM window method
setInterval(function,秒數) 1000＝1秒 
舉例：
function sayYes(){
    console.log("yes");
}

setInterval(sayYes,1000);

clearInterval()

let myInterval= setInterval(sayYes,1000);
function stop(){
   clearInterval(myInterval);
}

HTML中 <button onclick="stop()">Stop</button>
這樣只要按下stop按鈕，就會停止每1秒產生yes
*/


/* OOP =object-oriented programming 物件導向
一個物件可以是另一個物件的屬性
舉例：

let Liz = {
  name: 'Liz Wang',
  talk(){
     console.log("David is my husband.");
  }
}

let David = {
  name: 'David Ren',
  spouse: Liz,
  walk(){
   console.log("I am walking on the street.");
  }
}

David.spouse.talk();
結果會是David is my husband.
*/

/* Document Object Model=DOM 「什麼是DOM」介紹
1.Document is an object and a property of window object as well.
2.Document means the HTML document.
3.This model means all HTML elements are objects.
(HTML elements are such as <head>,<body>,<a>,<h1>等等.It means they all have its properties and methods.)
在javascript裡面如果我們要控制html element就用dom, 用dom可以控制html element的properties and methods

*/

/* Document Object 的methods
1.addEventListener()-->window object 和 document object 都有這個method
2.createElement()
3.getElementById()
4.getElementsByClassName()
5.querySelector()
6.querySelectorAll()
*/

/*Document.getElementById(), Document.getElementsByClassName()
let myH1 = document.getElementById("first");
let myP = document.getElementsByClassName("second");
console.log(myH1,myP);

*/

/*Document.createElement() 可以在javascript用createElement新增html程式碼
let myH= document.createElement("h1");
console.log(myH);
*/

/*Document.querySelector(),Document.querySelectorAll() 在html中用CSS selector做為關鍵字來查詢
let secondH1 = document.querySelector("h1.second");
console.log(secondH1);
只會return 第一個滿足css selector的html element, 第二個、第三個同樣是h1.second的不會return.若要抓所有就用querySelectorAll

let seconds = document.querySelectorAll(".second");
console.log(seconds); Nodelist結果會有3個，若要他return第二個就好，程式碼可以這樣寫

let seconds = document.querySelectorAll(".second");
console.log(seconds[1]);

NodeList不是一個array
*/

/*function declaration vs Arrow function expression

function declaration
function sayHi(){
  console.log("Hi");
}

sayHi();

也可以將順序顛倒（arrow function expression不能順序顛倒）：
sayHi();

function declaration
function sayHi(){
  console.log("Hi");
}

function declaration 的 this 用法： 此this指petty這個object
let Petty = {
    name: "Petty Wu",
    greeting(){
        console.log("Hi, my name is "+ this.name + ".");
    }
}

Petty.greeting();




Arrow function expression 另一個定義（製作）function的方法
let sayHi = () =>{
    console.log("Hi");
    };

sayHi();

放parameter

let sayHi = (name) =>{
    console.log("Hi"+ name);
    };

sayHi("David");

Arrow function expression 用this 無法顯示，在這邊this 指window object
let Petty = {
    name: "Petty Wu",
    greeting(){
        console.log("Hi, my name is "+ this.name + ".");
    },
    walk: () =>{
        console.log(this.name +" is walking on the street.");
    }
}

Petty.greeting();
Petty.walk(); 結果會是is walking on the street.

*/

/*forEach Function 像for迴圈 是用在array
the parameter for forEach function is called "callBack" function.

let luckyNumbers = [7,15,23,66,91,10,13];

luckyNumbers.forEach(function checkNum(n){
    if(n>20){
        console.log(n);
    }
})

也可以寫成

let luckyNumbers = [7,15,23,66,91,10,13];

luckyNumbers.forEach(checkNum);

function checkNum(n){
    if(n>20){
        console.log(n);
    }
}

也可以寫成 沒有命名的function叫 anonymous function

let luckyNumbers = [7,15,23,66,91,10,13];

luckyNumbers.forEach(function(n){
    if(n>20){
        console.log(n);
    }
})


也可以寫成 forEach+Arrow function expression

let luckyNumbers = [7,15,23,66,91,10,13];

luckyNumbers.forEach((n)=>{
   if(n>20){
    console.log(n);
   }
})

n也可以不加括弧 forEach+Arrow function expression

let luckyNumbers = [7,15,23,66,91,10,13];

luckyNumbers.forEach(n =>{
   if(n>20){
    console.log(n);
   }
})

可以加2個parameter，如果有2個就要放上括弧

let luckyNumbers = [7,15,23,66,91,10,13];

luckyNumbers.forEach((n,index)=>{
   if(n>20){
    console.log(n);
    console.log(n+" is at index number "+ index);
   }
})
*/

/* Array, HTMLCollection, NodeList

Array
let lucky = [4,10,2,5]; 

HTMLCollection
let secondsElement = document.getElementsByClassName("second");

NodeList
let secondQuery = document.querySelectorAll(".second");
console.log(secondQuery);


HTMLCollection and NodeList both has length and index 
but NodeList can use forEach method and HTMLCollection cannot.
Array also can use forEach method.

舉例：
let secondQuery = document.querySelectorAll(".second");
secondQuery.forEach(tag =>{
    console.log(tag);
    })

*/

/* Element Object
All HTML elements must have properties and methods from below list:
1.addEventListener()
2.appendChild()
3.children
4.childNode
5.classList(add(),remove(),toggle(),contains())
6.getAttribute()
7.innerHTML,innerText
8.parentElement
9.querySelector()
10.querySelectorAll()
11.remove()
12.style

<body>是<p>的parent element, <p> 是<body>的child element

*/

/*children,childNodes
children 會return HTMLCollection， HTML 的body有多少的tag就return多少
childNodes 會return NodeList，除了return body tag，也會return更細部的東西，與children長度不一樣

*/

/*parentElement
let myP = document.querySelector("p.second");
console.log(myP.parentElement); 結果會只顯示body
*/

/*innerHTML, innerText
innerHTML 可以在javascript中寫上string 然後覆蓋 html中的string,舉例：
let H1 = document.querySelector("h1.second");
H1.innerHTML = "My name is Herry"
這有個好處是，可以針對網頁不同的使用者，設定顯示不同的內容

innerHTML 與 innerText 的差別：

let H1 = document.querySelector("h1.second");
H1.innerHTML = "<mark> My name is Herry </mark>" 會有底色
H1.innerText = "<mark> My name is Herry </mark>" 不會有底色且會顯示<mark>文字

*/

/*appenChild() 在javascrip中，在html的母項目新增子項目的意思
例：在<body> </body>之間新增一些H1或P

let body = document.querySelector("body");
let myH1 = document.createElement("h1");
myH1.innerText =" I am Gabriel";

body.appendChild(myH1);
*/

/*classList 是一個object，是element object的property

當property 使用時，可以幫忙列出html所有tag的class，
例如這邊挑出第一個p tag 中所有的class
let myP = document.querySelector("p");
console.log(myP.classList);


當method 使用時, classList.add() 可以指定套用一個class, 
即使在html沒有標記這個"green"的class, 也可以在css與javascript
中建立並套用。(測試過好像不能搭配querySelectorAll一起用)
例如：
let myP = document.querySelector("p");
myP.classList.add("green");
myP.classList.add("bold");

classList.remove() 可以指定html移除套用一個class
(測試過好像不能搭配querySelectorAll一起用)
let myP = document.querySelector("p");
myP.classList.remove("bold");


classList.toggle() 可以指定html移除套用或新增套用一個class之前
判斷有無該class, 若html中有該class，toggle就會移除套用；
若若html中沒有該class，toggle就會新增套用；
html:
<p class="second bold">This is a paragraph.</p>
<p class="yellow">This is second paragraph.</p>
javascrip:
let myP = document.querySelector("p");
myP.classList.toggle("yellow");
myP.classList.toggle("bold");

classList.contains() 用來問該tag是否有某個特定的class
假設html <p class="blue red"></p>
可以用javascript console.log(myP.classList.contains("blue"));
console.log會回傳true. (boolean 值)

*/

/*properties = attributes; methods = functions
*/

/*getAttribute()
html:
<a title=YouTube href="www.gather.com">youtube</a>

javascript:
let a = document.querySelector("a");
console.log(a.getAttribute("href"));

console會回傳www.gather.com

*/


/*Element Object 使用querySelectorAll()

Document Object 使用querySelectorAll()的方式：會抓出所有在html中的p.green
let greenP=document.querySelectorAll("p.green");
console.log(greenP);

Element Object 使用querySelectorAll()： 只會抓出<section>中的p.green
let section=document.querySelector("section");
let greenP=section.querySelectorAll("p.green");
console.log(greenP);

*/

/*remove() 可以用在網頁「按下垃圾桶或其他指令」，整個填資料的地方就刪除
指定某個tag(例如h1, p這種，放入class沒辦法移除）整行資料從html移除

*/

/*style oject
is a property of element object.
is an object that is controlling the CSS styling of an HTML element.
hyphen in JS is not allowed, therefore, CSS properites in JS are 
changed to camelCase. ex: background-color(CSS),backgroundColor(JS)

let botton = document.querySelector("button");
console.log(botton.style);會出現botton的css

查看botton.style的資料類型：
let button = document.querySelector("botton");
console.log(typeof button.style); 是object

在JS 設定或修改CSS：
let button = document.querySelector("button");
button.style.backgroundColor = "yellow";
button.style.color ="red";
*以上這些設定都算是inline styling, 網頁會依照inline styling為主要顯示的依據，
其次才是id>class>...
上述也可以簡略成這種寫法：
let button = document.querySelector("button");
button.style = "background-color:yellow;color:red;";

*/


/*inheritance: all html elements(h1,p,video,form..) inherit properties 
and methods from "element object.", but some of them have its own methods.
form has reset method, video has stop method.
可去w3school 查html element objects reference看有哪些 html elements, 
隨便選一個elements 點進去可以看見html dom object的內容, 
包含該element 有哪些properties 和methods可以用
*/

/*JS Events
JS events are occurred when things happen in browser.(ex. resize the screen, 
click on a button,press a key on keyboard.)
事件發生時，需要偵探；JS Events 發生時，需要event listener (event listener就像偵探，
會了解JS Events發生的始末) 

addEventListener(event type, callback)
addEventListener比較會用在window object 和 element object 中，document object 幾乎不會用到。
event type : 例如 resize the screen, scroll the screen,click...
call back function: 當eventListener 偵測到event時，你要給他什麼callback function
callback function裡面可以加parameter也可不加，最常看到的parameter是e, event

window使用addEventListener例子：
window.addEventListener("click", e => {
  console.log(e);
}) 
  e代表click event, JS Events事件都是object

*/


/*Event Oject: target, preventDefault()

let h1 = document.querySelector("h1");
h1.addEventListener("click", e =>{
    console.log(e);
})  按下網頁的「My First H1」字，console就會顯示資料


target 用法舉例
let h1 = document.querySelector("h1");
h1.addEventListener("click", e =>{
    console.log(e.target);
})按下網頁的「My First H1」字，console就會顯示<h1 id="first">My First H1</h1>


let h1 = document.querySelector("h1");
h1.addEventListener("click", e =>{
    console.log(e.target.innerText);
})按下網頁的「My First H1」字，console就會顯示My First H1


preventDefault()用法舉例，顧名思義取消掉原本預設的功能。以下面button為例，
一般按button 他會將資料送出去並且重新整理，若我要取消這動作：
let button = document.querySelector("button");
button.addEventListener("click", e =>{
    e.preventDefault();
})


*/

/*pageYOffset 可用在判斷網頁滑到最上面還是最下面，根據網頁bar的滑動會有不同的數字，
往下滑數字越大，滑到網頁最上方數字是0
*pageYOffset 出現刪除線是因為它已被標記為「過時」（deprecated）。雖然它目前仍然可以使用，但未來的瀏覽器版本可能會移除該屬性，因此建議使用替代方法來實現相同功能。
在此情境中，pageYOffset 用於檢查垂直滾動的偏移量，可以使用 window.scrollY 作為替代方案。scrollY 提供相同的功能，並且沒有被標記為過時。

let header = document.querySelector("header");
window.addEventListener("scroll", () =>{
    if(window.scrollY !=0){
        header.style.backgroundColor = "black";
    } else{
        header.style =""; 讓滾輪滑回頂部時，header會變回原本的底色
     }

}) 這邊用window來add event我的解讀是因為觸發點是window做了改變, 而不是在html做改變
如果觸發點是html變動，才會用header.addEventListener

美化後的版本：
let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header nav ul li a");
console.log(headerAnchor);
window.addEventListener("scroll", () =>{
    if(window.scrollY !=0){
        header.style.backgroundColor = "rgba(0,0,0,0.8)";
        header.style.color ="white";
        headerAnchor.forEach(a =>{
            a.style.color ="white";
        })
    } else{
        header.style ="";
        headerAnchor.forEach(a =>{
            a.style.color ="#09777d"
        })
    }

}) 

*/

/*Event Bubbling 意思是一個動作會啟動其他addEventListener, 如下例子

let a = document.querySelector("div.a");
let b = document.querySelector("div.b");
a.addEventListener("click",()=>{
  alert("a's event listener's callback is running.");
})
b.addEventListener("click",()=>{
    alert("b's event listener's callback is running.");
})

可以用stopPropagation讓event 不會bubble, 只會在第一次動作後結束
*/

/*stopPropagation

let a = document.querySelector("div.a");
let b = document.querySelector("div.b");
a.addEventListener("click",()=>{
  alert("a's event listener's callback is running.");
})
b.addEventListener("click",e =>{
    e.stopPropagation();
    alert("b's event listener's callback is running.");
})

*/

/*localStorage, sessionStorage are objects, they both has below methods.
Storage means the data is save in the browser not in database for quicker operation.
key 不能重複
key和value只能是string 的datatype, 即使我們放數字在value, 他的資料類型會自動轉成string,
所以如果希望array 放入storage後提領出來時維持array的資料類型（才可以用forEach等等function),
可以用JSON.stringify(),JSON.parse()

setItem(key,value)
getItem(key)
removeItem(key)
clear()

localStorage.setItem("name","David");
在開發人員工具中的application可以看到local storage, session storage有哪些key&value.
儲存後即使程式碼刪除，還是可以用以下方法提取資料：

let people = localStorage.getItem("name");
console.log(people);

若要將之前存在locaostorage的資料刪除，就用removeItem：
localStorage.removeItem("name");

將之前存在locaostorage的「所有資料」刪除，就用clear：
localStorage.clear();
*/

/*sessionStorage, 當瀏覽器關掉後資料就不在了。 localStorage不會因為瀏覽器關掉就刪除。

*/

/*JSON means JavaScript Object Notation.

JSON.stringify() 透過JSON將資料類型換成string:
let bfriends =["Mike","Jack","John"];
localStorage.setItem("friendsname",JSON.stringify(bfriends));

JSON.parse() 透過JSON將資料類型換成原本的array:
let cfriends= JSON.parse(localStorage.getItem("friendsname"))
console.log(cfriends);


*/

/* concat()   Array concat methond: 2個array相加
let friends1 =["Mike","Josh","Doug"];
let friends2 =["Jim","Nelson","Benson"];
let friends = friends1.concat(friends2);
console.log(friends);
*/

/* isNan()用來確認一個值是不是NaN
let result =(0/0);
console.log(isNaN(result));
*/

/* Spread Operator: ... ; rest parameter 不需預設有幾個parameter

找出最大數字的原本寫法：
function checkBiggest(arr){
    let biggest = -Infinity;
    for ( let i =0 ; i < arr.length; i++){
        if ( arr[i]> biggest) {
            biggest = arr [i];
        }
    }
    return biggest;
}

console.log(checkBiggest([-2,100,6,7,10,54]));


方便加入新的數字，並重新找出最大數字的寫法：
function checkBiggest(...numbers){
    let biggest = - Infinity;
    for (let i =0; i < numbers.length; i++){
        if(numbers[i]>biggest){
            biggest = numbers[i];
        }
    }
    return biggest;
}

console.log(checkBiggest(-2,100,6,7,10,54));


也可以代替concat用法：
let friends1 =["Mike","Josh","Doug"];
let friends2 =["Jim","Nelson","Benson"];
let friends =[...friends1,...friends2];
console.log(friends);
*/

/*Primitive Data Type vs Reference Data Type

Primitive Data Types: 
1. not "objects", they don't have its own properties and methods.
2. container variables do own the value, not just a reference to the memory.
(意思是當對primitive data type assign一個值，它記的是值，而不是它在記憶體中的位置)
ex:
let n1=100;
let n2=n1;

n1=50;
console.log(n1,n2) 結果會是 50, 100

Reference Data Types:
1.Objects and Arrays are reference data types.
2.Variables that are assigned a non-primitive value are given a reference to that value.
That reference points to the object's location in memory.The variables don't actually 
contain the value.
(意思是當對reference data type assign一個值，它記的是在記憶體中的位子，而不是值)
ex:
let friends1 =["Mike","Josh","Doug"];
let friends2 = friends1;
friends1.push("Jake");

console.log(friends1,friends2) 結果會是["Mike","Josh","Doug","Jake"],["Mike","Josh","Doug","Jake"]


*/

/*Array.isArray()  確認他是不是array
let friends1 =["Mike","Josh","Doug"];
console.log(typeof friends1); 顯示object
console.log(Array.isArray(friends1)); 顯示true

*/
/*Advanced Array Functions: map(),find(),filter(),some(),every(),sort()

map()  create a new array populated with the results of calling a provided function on every
element in the calling array.
ex1:
let friends1 =["Mike","Josh","Doug"];
let upperFriends = friends1.map(function(i){
    return i.toUpperCase();
});

console.log(upperFriends);

ex2:
const language = [
    { name:"Python", rating: 9.5, popularity:9.7, trending:"super hot"},
    { name:"Java", rating:8.6, popularity: 8.2, trending:"same"},
    { name:"C++", rating:6.6, popularity: 7.7, trending:"same"},
    { name:"PHP", rating:2.5, popularity: 4.7, trending:"decreasing"},
    { name:"JavaScript", rating:8.5, popularity: 8.1, trending:"same"},
];

let upperLangu = language.map(function(lang){
    return lang.name.toUpperCase();
});

console.log(upperLangu);




find() 會依照設定的條件回傳第一個符合條件的資料。舉例：
const language = [
    { name:"Python", rating: 9.5, popularity:9.7, trending:"super hot"},
    { name:"Java", rating:8.6, popularity: 8.2, trending:"same"},
    { name:"C++", rating:6.6, popularity: 7.7, trending:"same"},
    { name:"PHP", rating:2.5, popularity: 4.7, trending:"decreasing"},
    { name:"JavaScript", rating:8.5, popularity: 8.1, trending:"same"},
];

let result = language.find(lang=>{
    return lang.rating >7.5;
});

console.log(result); 只會會傳python那行的資料。




filter() 會依照設定的條件回傳所有符合條件的資料。舉例：
let result = language.filter(lang=>{
    return lang.rating >7.5;
});

console.log(result); 會回傳python, java, javascript三個rating 都大於7.5的資料。




some() 會依照設定的條件回傳true or false, 如果有一筆資料符合，會回傳true. 舉例：
let result = language.some(lang=>{
    return lang.rating >7.5;
});

console.log(result);會回傳true.




every() 會依照設定的條件回傳true or false, 如果所有資料都符合條件，會回傳true。舉例：
let result = language.every(lang=>{
    return lang.rating >7.5;
});

console.log(result); 會回傳false



sort() 排列
let fruits = ["Grapes", "Apple", "Banana"];
console.log(fruits.sort()); 結果會是["Apple", "Banana", "Grapes"];

也可以寫成
let fruits = ["Grapes", "Apple", "Banana"];
fruits.sort();
console.log(fruits);

let myName = "Gabriel";
myName.toUpperCase();
console.log(myName); 結果還是Gabriel
console.log(myName.toUpperCase()); 要寫成這樣才會都是大寫



數字排序要注意！！！
let luckies = [15,1,2,45,33,12,9]
console.log(luckies.sort()); 結果會是[1, 12, 15, 2, 33, 45, 9] 他會用第一個數字來排，也就是string 
comparison

解法：
luckies.sort((a,b)=>{
    return a-b;
})
console.log(luckies); 結果會是[1, 2, 9, 12, 15, 33, 45]

想讓水果排列順序依照單字的長度
let fruits = ["Grapes", "Apple", "Watermelon"];

fruits.sort((a,b)=>{
    return b.length - a.length;
})

console.log(fruits); 結果['Watermelon', 'Grapes', 'Apple']





*/

/*for of loop 和for loop, forEach功能一樣，只是比較好閱讀，只能用在string, array, nodelist, 
不能用在object

let numbers= [10,20,30];

//for loop

for(let i =0; i<numbers.length; i++){
    console.log(numbers[i]);
}

//forEach method

numbers.forEach(n=>{
    console.log(n);
})

//for of loop

for(let n of numbers){
    console.log(n);
}


*/

/*for in loop 功能和for of loop一樣，只是可以用在object，他會列舉出所有properties.
用在object範例：
let Gabriel = {
    name: 'Gabriel Lin',
    age: 25
}

for(let i in Gabriel){
    console.log(i);
} 結果會是name, age


for(let i in Gabriel){
    console.log(Gabriel[i]);
}結果會是Gabriel Lin, 25


用在array範例：
let numbers = [20,30,40];
for(let i in numbers){
    console.log(i); 會出現0,1,2
}

let numbers = [20,30,40];
for(let i in numbers){
    console.log(numbers[i]); 會出現20,30,40
}

*/

/*Constructor Function 
*製作大量相似的objects,例如：

let Gabriel = {
    name: "Gabriel Lin",
    age: 25
}

let Ada = {
    name: "Ada Wang",
    age:25
}
一個一個key很沒效率，運用constructor function 寫法：
function Person(name, age, height, weight){
    this.name = name,
    this.age = age,
    this.height = height,
    this.weight = weight,
    this.sayHi = function(){
         console.log(this.name + " says Hi");
    }
}

let Gabriel = new Person ("Gabriel Lin",25,180,80);
let Ada = new Person ("Ada Wang", 25, 180, 90);
Gabriel.sayHi();
Ada.sayHi();


*start with uppercase letter
*used with "new" keyword (new means 創造一個empty object)




*/

/*Prototype
*is a object
*contains common properties and methods across all instances(objects).

function Person(name,age,height,weight){
    this.name = name,
    this.age = age,
    this.height = height,
    this.weight = weight
}

Person.prototype.sayHi = function(){
    console.log(this.name + " says Hi.");
}

let Gabriel = new Person("Gabriel Lin", 25, 179, 79);
let Ada = new Person("Ada Wang", 25, 180, 79);

Gabriel.sayHi();
Ada.sayHi();

*/

/*Function are objects in JS. 共用Bind(), Call(), Apply()

Bind() 可以將this 綁定成指定的object, 若沒綁定, this 會等於window object

let Gabriel = {
    name: "Gabriel Lin",
    age: 25
}

function getAge(){
    console.log(this);  沒bind Gabriel時，this是指window object
    console.log(this.age);

}

let getGabrielAge = getAge.bind(Gabriel); 說明：bind會回傳一個function，所以要用一個variable接住它
getGabrielAge();





call() 可以直接放入object, 讓this 直接被object取代, 不需用variable 接住

let Gabriel = {
    name: "Gabriel Lin",
    age: 25
}

function getAge(){
    console.log(this.age);

}

getAge.call(Gabriel);


如果getAage有parameter:
let Gabriel = {
    name: "Gabriel Lin",
    age: 25
}
function getAge(country, height){
    console.log(this.age);
    console.log("I am from "+ country + "I am "+ height+"cm.");

}

getAge.call(Gabriel, "Taiwan.", 199);





Apply()
let Gabriel = {
    name: "Gabriel Lin",
    age: 25
}

function getAge(country, height){
    console.log(this.age);
    console.log("I am from "+ country + "I am "+ height+"cm.");

}

getAge.apply(Gabriel, ["Taiwan.", 199]);

*/


/*prototype inheritance

function Person(name,age,height,weight){
    this.name = name,
    this.age = age,
    this.height = height,
    this.weight = weight
}

Person.prototype.sayHi = function(){
    console.log(this.name + " says Hi.");
}

function Student(name,age,height,weight,major,grade){
    Person.call(this, name,age,height,weight);  //this 是指Student
    this.major = major,
    this.grade = grade
}

Student.prototype = Object.create(Person.prototype); //讓Student 繼承Person的sayHi function

Student.prototype.study = function(){   //Student也可建自己的function, 但Person無繼承
    console.log("I am studying.");
}

let Gabriel = new Student("Gabriel Lin",12,151,40,"English",60)
console.log(Gabriel);
Gabriel.sayHi();
Gabriel.study();


*/

/*Class 用法 --取代prototype inheritance 寫法，更直覺


原本：
function Person(name,age,height,weight){
    this.name = name,
    this.age = age,
    this.height = height,
    this.weight = weight
}

Person.prototype.sayHi = function(){
    console.log(this.name + " says Hi.");
}

Person.prototype.info = function(){
    console.log("Hi, my name is " + this.name + ".");
}
let Gabriel = new Person("Gabriel Lin",12,151,40)
console.log(Gabriel);



取代
class Person{
    constructor(name,age,height,weight){
        this.name = name,
        this.age = age,
        this.height = height,
        this.weight = weight
    }
    sayHi(){
        console.log(this.name + "says hi.");
    }

    info(){
        console.log("Hi, my name is " + this.name + ".");
    }
}
let Gabriel = new Person("Gabriel Lin",12,151,40)
console.log(Gabriel);


原本：
function Student(name,age,height,weight,major,grade){
    Person.call(this, name,age,height,weight);  //this 是指Student
    this.major = major,
    this.grade = grade
}

Student.prototype = Object.create(Person.prototype); //讓Student 繼承Person的sayHi function

Student.prototype.study = function(){   //Student也可建自己的function, 但Person無繼承
    console.log("I am studying.");
}

let Gabriel = new Student("Gabriel Lin",12,151,40,"English",60)
console.log(Gabriel);
Gabriel.sayHi();
Gabriel.study();


取代
class Person{
    constructor(name,age,height,weight){
        this.name = name,
        this.age = age,
        this.height = height,
        this.weight = weight
    }
    sayHi(){
        console.log(this.name + "says hi.");
    }

    info(){
        console.log("Hi, my name is " + this.name + ".");
    }
}

class Student extends Person {
    constructor(name,age,height,weight,major,grade){
        super(name,age,height,weight);
        this.major = major,
        this.grade = grade
    }
    study(){
        console.log("I am studying.");
    }
}

let Gabriel = new Student("Gabriel",25,161,48,"English",70);
console.log(Gabriel);
Gabriel.study();
Gabriel.info();



*/

/*static  可以創造class的屬性和method

class Circle {
    static pi = 3.1415926535;  //屬性
    constructor(radius){
        this.radius = radius;
    }

    getArea(){
        return this.radius * this.radius * Circle.pi //屬性的運用
    }

    getPerimeter(){
        return 2 * Circle.pi * this.radius;
    }

}

let c1 = new Circle(5);
console.log(c1.getArea());





class Circle {
    static pi = 3.1415926535;  
    constructor(radius){
        this.radius = radius;
    }

    getArea(){
        return this.radius * this.radius * Circle.pi 
    }

    getPerimeter(){
        return 2 * Circle.pi * this.radius;
    }

    static getAreaFormula(){       // static class method
        console.log("r * r * 3.14");   
    }
}

Circle.getAreaFormula();  //static method的運用，不需寫成let c1= new Circle(5); console.log(c1.getAreaFormula);
*/

/*複製array 用spread operator

原做法：
let friend = ["Mike", "Josh"];
let copy = ["Mike", "Josh"];
copy.push("Nelson");
console.log(friend, copy);

較理想的做法： 用spread operator
let friend = ["Mike", "Josh"];
let copy = [...friend];
copy.push("Nelson");
console.log(friend, copy);

*/

/*ternary operator 速寫有條件的值

原本：
let price;
let age = 15;

if(age <18){
    price = 50;
}else{
    price =100;
}

console.log(price);

可直接寫成：
let age = 18;
let price = (age < 18) ? 50: 100;
console.log(price);


2個以上的條件，原本寫法：
let price;
let age = 15;

if(age <18){
    price = 50;
}else if(age < 60) {
    price =100;
}else{
    price = 75;
}

console.log(price);


可直接寫成：
let age = 18;
let price = (age < 18) ? 50: (age <60)? 100 : 75;
console.log(price);


*/

/*預設parameter

function multiply(a=1, b=1){
    console.log(a*b);
}

multiply(5,2);  

function multiply(a=1, b=1){
    console.log(a*b);
}

multiply(5);  //a,b值輸入不完全，還是會有數字1去相乘，避免資料出現NaN
*/

/*backstick 

原本：
let myName = "Gabriel Lin";
console.log(myName + " says Hi.");

backstick寫法：
let myName = "Gabriel Lin";
console.log(`${myName} says hi.`);  //鍵盤有波浪的按鍵可以叫出「``」

*/

/*floating point
console.log(0.1+0.2==0.3); 系統會顯示false，因為答案是 0.30000000000000004
解決此問題其中一種方法是寫成：
console.log((0.1+0.2).toFixed(1)==0.3.toFixed(1));

*/

/*IIFE means immediately invoked function expression，通常會在libary source code看到

原本要執行一個function的寫法：
function sayHi(){
   console.log("Hello!");
}

sayHi()

IIFE的寫法：
(function sayHi(){
   console.log("Hello!");
})()

IIFE+parameter:
(function sayHi(name){
    console.log("Hello!"+name);
 })("Gabriel");


 IIFE可限定variable只用在某個function中：
(function sayHi(name){
    let age = 20;
    console.log("Hello!"+name + age);
 })("Gabriel");

 IIFE可以定義一個annonymous function: 如果該function只要用一次，或是在一開始就run 這種function
，IIFE就很方便使用。
( function(name){
    console.log("Hello! " +name);
 })("Gabriel");
*/


/*Destructing an object


//constructing an object
let Gabriel ={
    firstName: 'Gabriel',
    age: 25,
    gender: "male",
    address: "Taipei",
    height: 180,
    weight: 70,
    friend:{
        fullName: 'Mickey',
    }
}

過去的寫法：
//destructing an object
let firstName = Gabriel.firstName;
let gender = Gabriel.gender;
let friendName = Gabriel.friend.fullName;

console.log(firstName + "'s gender is "+gender+".");
console.log(firstName+" has a friend, his name is "+friendName);

簡單的寫法：
let {firstName,gender} = Gabriel;
let {fullName} = Gabriel.friend;
console.log(firstName + "'s gender is "+gender+".");
console.log(firstName+" has a friend, his name is "+ fullName);

*/

/* switch expression

原本寫法：
let input = prompt("Enter a month.");

if (input == "January") {
    alert("一月");
} else if (input == "February"){
    alert("二月");
} else if (input == "Martch"){
    alert("三月");
} else{
    alert("無法判定");
}


switch expression寫法：
let input = prompt("Enter a month.");

switch(input){
    case "January":
        alert("一月");
        break;
    case "February":
        alert("二月");
        break;
    default:
        alert("無法判定");
        break;
}

*/

/* Shell vs Kernel
Kernel is the central part of a computer.
Shell is the interface that we interact with Kernel.
Two types of Shell: GUI, CMD
*/

/*GUI
Graphical User Interface 圖形使用者介面
例如在桌面按右鍵可選擇新增資料夾，這些圖像與動作都是GUI，是別人先寫好的功能，使用者才不用因為要新增資料夾還要寫一堆code
*/

/*CMD
Command (Line) Prompt
it's a place that we can directly give commands to the computer,
instead of using GUI.
*/



