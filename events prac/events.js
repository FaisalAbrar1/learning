let btn1=document.querySelector("#btn1");

//  
//   console.log("btn1 was clicked");
//   let a= 25;
//   a++;
//   console.log(a);//26
// }

// let box=document.querySelector("div");
// box.onmouseover=(evt)=>{
//   console.log("you are inside div");
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX,evt.clientY);
// }


// btn2.onclick=(evt)=>{
//   console.log(evt);
//   console.log(evt.type);
//   console.log(evt.target);
//   console.log(evt.clientX,evt.clientY);
// }
btn1.addEventListener("click",(evt)=>{
  console.log("btn1 was clicked - handler 1");
  console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
});

btn1.addEventListener("click",(evt)=>{
  console.log("btn1 was clicked - handler 2");

});
const handler3=()=>{
  console.log("btn1 was clicked - handler 3");

};
btn1.addEventListener("click",handler3);

btn1.addEventListener("click",(evt)=>{
  console.log("btn1 was clicked - handler 4");
  
});
btn1.removeEventListener("click",handler3);