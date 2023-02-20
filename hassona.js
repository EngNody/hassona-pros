




// document.writeln("Hello!");
// document.write(1500)



const big = (img) => {
    img.style.width="1000px"
}


const small = (img) => {
    img.style.width="900px"
}


const getxy = (event) => {
    const X=event.clientX
    const Y=event.clientY
    window.lbl.innerHTML="X: "+ X + "; Y: "+ Y 

}

// function reusable
function fff(text) {

  document.write(text +"<br>"+"<hr/>")

}

// مصفوفه ثنائيه الابعاد

// const a1=[10,20,30]
// const a2=[40,50,60]
// const a3=[70,80,90]
// const all1=[a1,a2,a3]


// for (let row = 0; row < all1.length; row++) {
//   document.write("<br>")

//   for (let col= 0; col < all1[row].length; col++) {
//     document.write(all1[row][col] +"=")
//   }
// }




// مصفوفه متعدده الابعاد 

const a1=[10,20,30]
const a2=[40,50,60]
const a3=[70,80,90]
const all1=[a1,a2,a3]

const a11=[100,200,300]
const a22=[400,500,600]
const a33=[700,800,900]
const all2=[a11,a22,a33]

const a111=[1000,2000,3000]
const a222=[4000,5000,6000]
const a333=[7000,8000,9000]
const all3=[a111,a222,a333]

const bigall=[all1,all2,all3]

for (let i = 0; i <1; i++) {
  // const element = all1[bigall];
  document.write("<hr/>")
  for (let row = 0; row < bigall.length; row++) {

    for (let col= 0; col < all1[row].length; col++) {
      document.write(all1[row][col] +"=")
    document.write(all2[row][col] +"=")
    document.write(all3[row][col] +"="+"<br>")
    }
    document.write("<hr/>")
  }
}

// ==========================================================
// move Elements by mouse == this steps for one element
// ==========================================================


// function setbigindex() {
//   const all=document.getElementsByTagName("*")
// for (let i = 0; i < all.length; i++) {
//    all[i].style.zIndex="0"
  
// }
// }

// // let moving=false;

// function mybigmoving(){
//   let X=window.event.clientX
//   let Y=window.event.clientY
//   setbigindex()

// if (moving==true) {
//   window.imgcute.style.zIndex="10";
//   window.imgcute.style.left=(X-350)+"px";
//   window.imgcute.style.top=(Y-250)+"px";
// }
// }

// ===================================================================
// moving number of bictures
// ===================================================================

let moving0=false;
let moving1=false;
let moving2=false;
let moving3=false;
let moving4=false;
let moving5=false;
let moving6=false;
let moving7=false;
let moving8=false;
let moving9=false;
let moving10=false;
let moving11=false;
let moving12=false;
let moving13=false;



function setindex() {
  const all=document.getElementsByTagName("*")
for (let i = 0; i < all.length; i++) {
   all[i].style.zIndex="0"
  
}
}



function movingpictures(el) {

  let X=window.event.clientX
  let Y=window.event.clientY
  setindex()

  el.style.zIndex="10";
  el.style.left=(X-100)+"px";
  el.style.top=(Y-100)+"px";
}



function mymoving(){

  if (moving0) {
    let X=window.event.clientX
    let Y=window.event.clientY
    setindex()
    window.imgcute.style.left=(X-350)+"px";
    window.imgcute.style.top=(Y-250)+"px";
    window.imgcute.style.zIndex="10";
    // we can do this element and call it like other elements
    //  because this element have width and hight diffrent ather 
    // and call it mybigmoving for examble
  }else if (moving1) {
  movingpictures(window.moving1)
}else if (moving2){
  movingpictures(window.moving2)
}else if (moving3){
  movingpictures(window.moving3)
}else if (moving4){
  movingpictures(window.moving4)
}else if (moving5){
  moviogpictures(window.moving5)
}else if (moving6){
  movingpictures(window.moving6)
}else if (moving7){
  movingpictures(window.moving7)
}else if (moving8){
  movingpictures(window.moving8)
}else if (moving9){
  movingpictures(window.moving9)
}else if (moving10){
  movingpictures(window.moving10)
}else if (moving11){
  movingpictures(window.moving11)
}else if (moving12){
  movingpictures(window.moving12)
}else if(moving13){
  movingpictures(window.moving13)
}
}

// =================================================
// for vibration the images 
// =================================================



 const vibration=document.querySelector(".vibration")
let my1;

function myvibration1() {

  vibration.style.top="8px"
  vibration.style.left="8px"
my1= setTimeout(() => {myvibration2()}, 10);
  
}

function myvibration2() {
  
  vibration.style.top="0"
  vibration.style.left="0"
my1= setTimeout(() => {myvibration1()}, 10);
  
}


// =================================================
// for change fontsize 
// =================================================

let val=0
// const hhh=document.querySelector("#changefontsize")
let myh= setInterval(() => {
window.changefontsize.style.fontSize=val++ +"px";
  if (val>70) {
    clearInterval(myh)
  }
}, 100);


// =================================================
// for write title word by word 
// =================================================

const mytext="Welcome To Egypt";

let con=0

const ggg=setInterval(() => {
  window.ourtitle.value += mytext[con++]

  // for write text infinity=============================
// if (con>mytext.length){
//   con=0;
//   window.ourtitle.value =""
// }

  // for write text for once=============================
if (con>=mytext.length){
  clearInterval(ggg)
}
}, 200);

// =================================================
// make a counter
// =================================================
const Download=document.getElementById("myDownload")
const counter=document.getElementById("mycounter")
let num=14

const mycount=setInterval(() => {
  counter.innerHTML=num--
  if(num<0){
    // num=15
    counter.style.display="none";
    Download.style.display="block";
    clearInterval(mycount);
    
  }
}, 500);



// =================================================
// img walking
// =================================================

const walking=document.getElementById("walking")
let v=0

const www=setInterval(() => {
  walking.style.left=v++ +"px"

  if (v>420) {
    clearInterval(www)
  }
}, 10);

// =================================================
// making clock
// =================================================

setInterval(() => {
  window.makingclock.innerHTML=new Date().toLocaleTimeString();
  window.makingclock2.innerHTML=new Date().toLocaleDateString();

}, 1000);


// =================================================
// reg exp input
// =================================================
function dotest () {
  const inputtext=document.querySelector("#mytext").value
let regexp;

// regexp= /[a-z]/;
// regexp= /\d/;
// to enter valid number phone
// regexp= /^\+002\d{8}$/;
// to enter valid name
   regexp=/^[ا-ي]+(\s[ا-ي]+)*$/

let d=regexp.test(inputtext)

if (d) {
  window.h.innerHTML=`<div style="color:green;margin-left: 50px;font-size: 40px;
  "> التحقق صحيح</div>
  `
}else{

  window.h.innerHTML=`<div style="color:red;font-size: 40px;  margin-left: 50px;"> التحقق غير صحيح</div>
  `
}
}


// =================================================
// explain 
// =================================================

function wordshhh(str) {
  window.words.innerHTML=str;
}

const ourtext="Hello Ahmed, Welcome Back Ahmed, Hi Ahmed"

// const s=ourtext.indexOf("Ahmed")
// const s=ourtext.indexOf("Ahmed",13)
// const s=ourtext.lastIndexOf("Ahmed")

// const s=ourtext.slice(0,5)
// const s=ourtext.slice(2,5)
// const s=ourtext.slice(6,11)
// const s=ourtext.substring(13,5)

// const s=ourtext.substr(6,15)

// to replace the first element only
// const s=ourtext.replace("Ahmed","Amr")
// to replace the all elements
// const s=ourtext.replace(/Ahmed/g,"Amr")

// const s=ourtext.toLocaleLowerCase()
// const s=ourtext.toLocaleUpperCase()
// const s="Hello".concat(""+"+++")
// const s=ourtext.concat(" ","+++")
// const s=ourtext[10]
// the safe way
// const s=ourtext.charAt(1)
// const s=ourtext.charCodeAt(0)
// wordshhh(s)

// =====================================
// const s=ourtext.split(" ")
// const s=ourtext.split(",")
// const s=ourtext.split("")
// wordshhh(s[1])

// =====================================
// var ss=new Array("Ahmed","Adel","Amr","Ehab")
// ss=ss.join("");
// ss=ss.join(" ");
// ss=ss.join(",,,");
// wordshhh(ss)
// ======================================

// var g="ahmed".split("").reverse().join("")
// wordshhh(g)
// =======================================
// wordshhh(s)
// =======================================

function print(text) {
  window.words.innerHTML=text +"<br>";

}

var num1= 177;
var sem=toString(num1);


// print(num1)
// print(typeof sem)
// print((199).toString())
// print((199+200).toString())
// print((1999999999).toExponential())
// print((1999999999).toExponential(2))
// print((19.999999999).toFixed())
// print((19.999999999).toFixed(2))


var num2= "177";
var num3= 177;

var sem2=Number(num2);

// print(sem2)
// print(typeof sem2)
// print(parseInt(sem2))
// print(parseFloat(sem2))
// print(Number.isInteger(num2))
// print(Number.isInteger(num3))
// print(typeof(num3)=="number")
// print(isNaN(num3))



// function myval(text) {

//   for (let x = 0; x < text.length; x++) {
//     const c = text[x];
    
//     if (c==0 || c==1 || c==2 || c==3 || c==4 || c==5 || c==6 || c==7 || c==8 || c==9) {
//       num+=c;
//     }
//   }
//   return Number(num)
// }

// var num5="123ghhvvg89njk45600ooopp0"
// var num6=myval(num5)

// print(num5)
// print(num6)


var kkk=Math.PI;
print(kkk)










