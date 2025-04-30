// function getData(dataId,getNextData) {
//   //2s

// setTimeout(()=>{
//   console.log("data",dataId);
//   if(getNextData){
//     getNextData();
//   }
// },2000);
// }
// //callback hell---and this is nested call backs--which is basically forming a pyramnid structure or doom.
// //becomes difficult to understand
// getData(1,()=>{
//   console.log("getting data 2...")
//   getData(2,()=>{
//     console.log("getting data 3...")
//     getData(3,function(){
//       console.log("getting data 4...")
//       getData(4)
//     })
//   });
// });

// //to solve the callback hell problem...--we have promises to resolve this issue 





// PROMISES
//promise is for "eventual" completion of task
//its an object in js
//its a solution to callback Hell

// let promise= new Promise((resolve,reject)=>{
//   console.log("i am a promise");
//   resolve("sucess");
//   // reject("some error occured");
  
// });
// console.log(promise);

//API returns promise 
// resolve & reject are calbacks provided by js


//  A JS Promise object can be:
//pending:the result is undefined
//resolved:the result is a value fulfilled
//rejected:the result is an error object


//this is creating promises
// function getData(dataId,getNextData) {
//   return new Promise((resolve,reject)=>{

//     setTimeout(()=>{
//       console.log("data",dataId);
//       resolve("success")
//       if(getNextData){
//         getNextData();
//       }
//     },5000);
//     });
//   }


//for error
  // function getData(dataId,getNextData) {
  //   return new Promise((resolve,reject)=>{
  
  //     setTimeout(()=>{
  //       // console.log("data",dataId);
  //       // resolve("success")
  //       reject("error")
  //       if(getNextData){
  //         getNextData();
  //       }
  //     },5000);
  //     });
  //   }
 

  //how to use

  // .then() & .catch()
  //for .then()
  // const getPromise=()=>{
  //   return new Promise((resolve,reject)=>{
  //     console.log("i am a promise");
  //     resolve("success");
  //   })
  // }

  // let promise=getPromise();
  // promise.then(()=>{
  //   console.log("promise fulfilled");
  // });



  //for .catch()
  // const getPromise=()=>{
  //   return new Promise((resolve,reject)=>{
  //     console.log("i am a promise");
  //     // resolve("success");
  //     reject("network error");
  //   })
  // }

  // let promise=getPromise();
  // promise.then((res)=>{
  //   console.log("promise fulfilled",res);
  // });

  // let promise=getPromise();
  // promise.catch((err)=>{
  //   console.log(" rejected",err);
  // });



//PROMISE CHAIN

function asynchFunc1(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data1");
      resolve("success");
    },4000)
  });
}

function asynchFunc2(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("data2");
      resolve("success");
    },4000)
  });
}



// console.log("fetching data1...");
// let p1=asynchFunc1();
// p1.then((res)=>{
  
//   console.log("fetching data2...");
//   let p2=asynchFunc2();
//   p2.then((res)=>{
  
//   })
// });


//more simplified
// console.log("fetching data1...");
// asynchFunc1().then((res)=>{
  
//   console.log("fetching data2...");
//   asynchFunc2().then((res)=>{
  
//   })
// });




//callback through promise chain

// function getData(dataId) {
//  return new Promise((resolve,reject)=>{
//   setTimeout(()=>{
//     console.log("data",dataId);
//     resolve("success");
//   },2000);
//   });
//  }


//PROMISE chain
// getData(1).then((res)=>{
//   console.log(res);
//   getData(2).then(()=>{
//     console.log(res)
//   })
// })

//more simplified way
// getData(1).then((res)=>{
//   return getData(2);
//   })
//   .then((res)=>{
//    return getData(3);
//   })
//   .then((res)=>{
//     console.log(res);
//   })

//even though looks easy but can get complex so, to get 1 more level higher we use asynch and await

//callback hell
// getData(1,()=>{
//   console.log("getting data 2...")
//   getData(2,()=>{
//     console.log("getting data 3...")
//     getData(3,function(){
//       console.log("getting data 4...")
//       getData(4)
//     })
//   });
// });






// AYSNCH- AWAIT
//asynch fn always returns a promsise
//always returns a promise


//2nd keyword
//await pauses the execution of its surrounding async function until the promise is settled
function api(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      console.log("weather data");
      resolve(200);
    },2000)
  })
}

async function getWeatherData() {
  await api();//ist
  await api();//2nd
}


///////////

function getData(dataId) {
  return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     console.log("data",dataId);
     resolve("success");
   },2000);
   });
  }
 
  //Asynch-await
async function getAllData(){
  console.log("getting data 1...")
  await getData(1);
  console.log("getting data 2...")
  await getData(2);
  console.log("getting data 3...")
  await getData(3);
  console.log("getting data 4...")
  await getData(4);
  console.log("getting data 5...")
  await getData(5);
  console.log("getting data 6...")
  await getData(6);
}

///IIFE--INVOKED FUNCTION EXPRESSION
//is a fn that's called immediately as soon as it is defined

//but can be used just once if i want it to be executed as once
//to make it to execute multiple times we have to copy paste it again nd again

//can be used in api calls
function getData(dataId) {
  return new Promise((resolve,reject)=>{
   setTimeout(()=>{
     console.log("data",dataId);
     resolve("success");
   },2000);
   });
  }
 

(async function (){
  console.log("getting data 1...")
  await getData(1);
  console.log("getting data 2...")
  await getData(2);
  console.log("getting data 3...")
  await getData(3);
  console.log("getting data 4...")
  await getData(4);
  console.log("getting data 5...")
  await getData(5);
  console.log("getting data 6...")
  await getData(6);
})();