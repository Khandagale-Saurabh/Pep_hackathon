let data1=require('./good.js');
let  data2=require('./ruf');
let data3=require('./book')

// const arr=[
//    new Promise((resolve,reject)=>{
//       setTimeout(()=>{

//        data2.run()
//          resolve('BOMBAY');
//       },2000)
//    }),

//    new Promise((resolve,reject)=>{
//       setTimeout(()=>{

//             data1.scrape("https://web.whatsapp.com")
//          resolve('WEB_WhatsAPP')
//       },3000)
//    })
// ];

// const lastFunction = () => {
//    console.log('this function should be fired at the very last');
// };


// Promise.all(arr[0],arr[1]).then((resp)=>{
//    console.log(resp);
// lastFunction();
// }).catch((err)=>{
//    console.log("INSIDE CATCH");
// })


















function call1()
{
     data2.run();
    setTimeout(function(){data1.scrape("https://web.whatsapp.com");},86800)
         setTimeout(function(){
         data3.book1()
    
     },100000)

}
call1()

// let Serial_Call=new Promise( function(resolve,reject)
// {
//     try{
//       data2.run();
//      setTimeout(function(){data1.scrape("https://web.whatsapp.com");},50000)
    
//      setTimeout(function(){
//          data3.book1()
    
//      },5000)
//     }catch(err){console.log(err);}
    
    
// });
// Serial_Call.then(function(){
//     console.log("Sucess");
// }).catch(function(){
//     console.log("Reject");
// })