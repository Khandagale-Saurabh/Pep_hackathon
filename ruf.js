

let data1=require('./good.js');

let data3=require('./book')




let puppeteer = require('puppeteer')

async function run() 
{
    let browser3 = await puppeteer.launch({ headless: false, defaultViewport: null, args: ['--start-maximized'] });
        let number_no=5;
    try
     {
        let page3 = await browser3.newPage();
        //await page3.setDefaultNavigationTimeout(0); 
        //await page3.goto("https://www.bombayshirts.com/",{waitUntil:'load'});
        await page3.goto("https://www.bombayshirts.com/collections/all",{waitUntil:'load'});

        await page3.waitForSelector('.ProductItem');
               
        const ProductItem = await page3.evaluate(() =>
                            Array.from(
                            document.querySelectorAll(".ProductItem__Wrapper > a[href]"),
                            (element) => element.getAttribute('href') ))
                           //console.log(ProductItem);
                 let url_arrays=[]
                for(let k=0;k<=5;k++)
                  {
                     let str=ProductItem[k].split('all');
                     let ar=str[1]
                     url_arrays.push("https://www.bombayshirts.com/collections/all"+ar);
                  }                   

                  
                  console.log("Outside");
                  console.log(url_arrays);
                  console.log("================");
                  /*   */
                  for(let i=0;i<url_arrays.length-2;i++)
                  {
                     console.log(url_arrays[i]);
                    bb(url_arrays[i],browser3,i )

                  }
                  // p()
      await  page3.close()
    //  await browser3.close()
    } catch (err)
     { console.log(err); 
     }
     
}


async function p()
{
  //   data1.scrape("https://web.whatsapp.com")
}


async function bb(link,browser3,i)
{
    console.log("");
   // if(number_no>3)
    {

        try{
                 let page4=await browser3.newPage();
                 await page4.setDefaultNavigationTimeout(0); 
                 console.log(link);
                    await page4.goto(link);
                    await page4.waitForSelector('.Button.Button--secondary.Button--full.customize-shirt')

                    const target = await page4.$(".Button.Button--secondary.Button--full.customize-shirt")
                    await target.click();

                    await page4.waitForSelector('.preview-btn');
                    await page4.click('.preview-btn');

                    await page4.setViewport({ width: 1024, height: 800 });
                    await page4.screenshot({
                        path: "./screenshot"+ i+".jpg",
                        type: "jpeg",
                        fullPage: true
                    });
                await page4.goto("https://www.bombayshirts.com/collections/all");
                await page4.close()
                }catch(err){console.log(err);}


    }

}

module.exports={run,bb}