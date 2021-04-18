


const puppeteer = require("puppeteer");
           
              let Name=[];
              Name=["Notes"]
            
             console.log(Name);

//setTimeout(function(){},2000)
let global_page="";

console.log("span[title='"+Name+"']");

async function scrape(url)
 {
  
      const browser = await puppeteer.launch({ headless: false,defaultViewport:null, args:['--start-maximized' ] });
      const page = await browser.newPage();
      await page.bringToFront();
      
      //await page.setDefaultNavigationTimeout(0); 
      global_browser=browser
      await page.goto(url);


      for(let k=0;k<Name.length;k++)
      {
            if(k==Name.length)
            {
                  break;
            }



            
                     await page.waitForSelector("span[title='"+Name[k]+"']");
                     const target = await page.$("span[title='"+Name[k]+"']")
                     await target.click();
                     const inp = await page.$(
                        // "#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text"
                        "#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text"
                     );

                     for (let i = 0; i < 2; i++) 
                     {
                        await inp.type(".");
                        await page.keyboard.press("Enter");

                        
                       for(let i=0;i<3;i++)
                        {
                               // await page.waitForSelector('span[data-icon="clip"]')
                                 await page.click('span[data-icon="clip"]');
         
                                 const [filechosser]=await Promise.all([
                                    page.waitForFileChooser(),
                                    await page.click('span[data-icon="attach-document"]')
                                    ])
                                 
                                    //C:/Users/saurabh/Desktop/Pep_Dev/Tailor/screenshot0.jpg
                                 
                                 //await filechosser.accept(['C:/Users/saurabh/Desktop/Pep_Dev/Tailor/image.jpg']);
                                 //C:\Users\Juhi.SAURABH63\Desktop\Puppeter\Tailor\screenshot0.jpg
            
                                       await filechosser.accept(['C:/Users/Juhi.SAURABH63/Desktop/Puppeter/Tailor/screenshot'+i+'.jpg']);
                                       console.log(""+['C:/Users/saurabh/Desktop/Pep_Dev/Tailor/screenshot'+i+'.jpg']);
                                    await page.waitForSelector("._3v5V7");
                                    await page.click("._3v5V7")
                                    
                                await page.waitForSelector('span[data-icon="clip"]')
                           
                        }

                     

                  
                     const services = await page.evaluate(() =>
                        Array.from(
                           document.querySelectorAll("[dir='ltr']"),
                           (element) => element.textContent
                        )
                     )
                     
               console.log(...services);
                        }
               console.log("========Numbers_of_No 5=========");
               
       }

       
    console.log('=================================');
  // data3.book1();
}


console.log('Ou:-2');
   


//scrape("https://web.whatsapp.com");




async function check_coat(num_no)
{
   for(let l=0;l<coat_url.length;l++)
   {

    
        if(num_no<3)
        {
            console.log("Done");
            break
        }
        else

       {
         let global_page= global_browser.newPage();
         await global_page.goto(""+coat_url[l]);
           console.log("  @  "+coat_url[l]);}
   }

}

//data3.book1();
module.exports={scrape,check_coat}





