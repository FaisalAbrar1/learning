//fecth--provides interface for fetching (sending/receiving) resources.

//uses REQUEST & RESPONSE objects.
//the fetch() method is used to fetch a resource(data).
//syntax
//let promise= fetch(url,[options])

// const URL = "https://uselessfacts.jsph.pl/random.json?language=en";

// const getFacts = async () => {
//   console.log("fetching data....");

//   let response = await fetch(URL);
//   console.log(response); // Response object
//   console.log(response.status); // 200

//   let data = await response.json();
//    // Log just the fact
//   console.log("Fact:", data.text); // Full JSON object
// };
// getFacts();

//UNDERSTANDING TERMS
//AJAX--- is Asynchronous JS & XMl--replaced by json
//JSON--- is JS object Notation---AJAJ
//json() method-- returns a second promise that resolves with the result of parsing the response body text as JSON...
//..(input as JSON, output as js object)


//example

const URL = "https://uselessfacts.jsph.pl/random.json?language=en";
const factPara=document.querySelector("#fact");
const btn=document.querySelector("#btn");


const getFacts = async () => {
  console.log("fetching data....");

  let response = await fetch(URL);
  console.log(response); // Response object
  console.log(response.status); // 200

  let data = await response.json();
   // Log just the fact
  console.log("Fact:", data.text); // Full JSON object
  factPara.innerText=data.text;
};
btn.addEventListener("click",getFacts);
//headers{} additional information