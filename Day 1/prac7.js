//Q.1---sol
let btn=document.createElement("button");//button created
btn.innerText="click me";//tesxt inserted

btn.style.backgroundColor="red";//style added
btn.style.color="white";//style added


document.querySelector("body").prepend(btn);


//Q.2
let para=document.querySelector("p");
para.classList//to acces the class list
para.classList.add("newPara");//added the class