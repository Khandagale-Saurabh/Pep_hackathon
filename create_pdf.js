let puppeteer=require('puppeteer');
async function shirts()
 {

   try{
                  let collection_url="https://www.bombayshirts.com/collections/all"
               
                      let browser3 = await puppeteer.launch({ headless: true,defaultViewport:null, args:['--start-maximized' ] });
                      let page3 = await browser3.newPage();
                     
               //       await page3.goto("https://www.bombayshirts.com/",{waitUntil:'load'});
                     
               //       await page3.goto("https://www.bombayshirts.com/collections/all");
               //       await page3.waitForSelector('.ProductItem');
                  
                  
               //       const ProductItem = await page3.evaluate(() =>
               //                Array.from(
               //                   document.querySelectorAll(".ProductItem__Wrapper > a[href]"),
               //                   (element) => element.getAttribute('href')
               //                )
               //             )
               // let url_arrays=[]

               // for(let k=0;k<=5;k++)
               //    {
               //       let str=ProductItem[k].split('all');
               //       let ar=str[1]
               //       url_arrays.push("https://www.bombayshirts.com/collections/all"+ar);
               //    }
                //  https://www.bombayshirts.com/collections/all/products/lucky-cat

             
                //let web=url_arrays[1];
                console.log("******ENTERING***** ")
                await page3.goto("https://www.bombayshirts.com/collections/all/products/fingers-crossed",{waitUntil:'load'})
                await  page3.waitForSelector('.Button.Button--secondary.Button--full.customize-shirt');
                await page3.click('.Button.Button--secondary.Button--full.customize-shirt');
                 
                
               }catch(err){console.log(err);}

 }

 shirts();






 // for(let i1=0;i1<5;i1++)
//   {
//      console.log("Inisde loop"+url_arrays[1]);
//      await page3.goto(url_arrays[1],{waitUntil:'load'})

//      await page3.waitForSelector(".Button.Button--secondary.Button--full.customize-shirt");
//      await page3.click('.Button.Button--secondary.Button--full.customize-shirt');
   
//      await page3.waitForSelector('.preview-btn');
//      await page3.click('.preview-btn');   
     
//      await page3.goto(""+collection_url);
     
//   }










// let pdf_url =coat_url[i];
//          let browser2 =await puppeteer.launch({headless:false})
//          let page2= await browser2.newPage();
//          console.log(pdf_url);
//          await page2.goto(""+pdf_url)

//          await page2.setViewport({ width: 1024, height: 800 });
//          await page2.screenshot({
//             path: "./screenshot" + i + ".jpg",
//             type: "jpeg",
//             fullPage: true
//          });


         