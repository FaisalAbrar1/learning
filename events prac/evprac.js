// let modeBtn=document.querySelector("#mode");
let body=document.querySelector("body");
let box=document.querySelector("div");

// let currMode="light";//dark
// modeBtn.addEventListener("click",()=>{
//   console.log("you are trying to change");
//   if(currMode==="light"){
//     currMode='dark';
//     // document.querySelector("body").style.backgroundColor="black"
//     // modeBtn.style.backgroundColor="black"
//       //  modeBtn.style.color="white";
//       //  modeBtn.style.border="solid";

//        body.classList.add("dark");
//        body.classList.remove("light");
//   }else{
//     currMode="light";
//     //  document.querySelector("body").style.backgroundColor="white"
//     //  modeBtn.style.backgroundColor="white"
//     //  modeBtn.style.color="black";
//     //  modeBtn.style.border="solid";
//      body.classList.add("light");
//      body.classList.remove("dark");
//   }
//   console.log(currMode);
// });





let currMode="light";
box.addEventListener("mouseover",()=>{
  if(currMode==="light"){
    currMode="dark";
 
 body.classList.add("dark");
  body.classList.remove("light");

 box.classList.add("light");
  box.classList.remove("dark");
  }else{
    currMode="light";
   
   body.classList.add("light");
  body.classList.remove("dark");

  box.classList.add("dark");
  box.classList.remove("light");
  
  };
  console.log(currMode)
});