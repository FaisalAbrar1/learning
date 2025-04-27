// let para=document.querySelector("p")
//   console.log(para);
//   console.log(para.getAttribute("class"));

//   console.log(para.setAttribute("class","hello"));

//   para.innerText="hello";
//   // para.style.visibility="hidden"//hides the text

//   let btn= document.createElement("div");
//   console.log(btn);

//   btn.innerText="i hope you are doing well";
//   console.log(btn.innerText);
  

let div=document.querySelector("div");
div.style.height="250px";
div.style.width="150px"
div.style.border="1px solid black";
div.style.backgroundColor="purple";
div.style.color="white";

///

let button=document.createElement("button");
div.append(button);
button.innerText="click me"
button.style.cursor="pointer"
button.style.marginLeft="25px"

let btn1=document.createElement("button");
div.prepend(btn1);
btn1.innerText="click me"
btn1.style.cursor="pointer"
btn1.style.marginLeft="25px"

let btn2=document.createElement("button");
div.before(btn2);
btn2.innerText="click me"
btn2.style.cursor="pointer"
btn2.style.marginLeft="25px"
btn2.style.marginBottom="10px"

let btn3=document.createElement("button");
div.after(btn3);
btn3.innerText="click me"
btn3.style.cursor="pointer"
btn3.style.marginLeft="25px"
btn3.style.marginTop="10px"

let newHeading=document.createElement("h1");
newHeading.innerHTML="<i> how was your day</i>";

document.querySelector("body").prepend(newHeading);

// let body=document.querySelector("body");
// console.log(body.innerHTML)

// let para=document.querySelector("p");
// para.remove();//removes any element and hee it removes paragraph