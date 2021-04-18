


let puppeteer = require('puppeteer')
// let whatapp=require('./good.js')
async function book1()
{
    const browser = await puppeteer.launch({ headless: false,defaultViewport:null, args:['--start-maximized' ],slowMo: 150, });
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(0); 
 await page.setViewport({ width: 920, height: 1080 });
    await page.setRequestInterception(true);

    page.on('request', (req) => {
        if(req.resourceType() === 'image'){
            req.abort();
        }
        else {
            req.continue();
        }
    });
    await page.goto("https://www.bombayshirts.com/collections/all/products/horseshoe");
    await page.bringToFront();
   // await page.setViewport({ width: 1920, height: 1080 });
   await page.hover('label[for="BodyType__Average"]');
    await page.waitForSelector('label[for="BodyType__Average"]')
    await page.click('label[for="BodyType__Average"]')
    
    await page.hover('label[for="ShirtSize__36"]');
    await page.waitForSelector('label[for="ShirtSize__36"]')
    await page.click('label[for="ShirtSize__36"]')
    

       await page.evaluate( () => {
  window.scrollBy(0, window.innerHeight);
}); 
//await page.waitForSelector('.Pair__Lists')
  


  await page.hover('label[for="ShoulderType__Average"]');
        await page.waitForSelector('label[for="ShoulderType__Average"]')
        await page.click('label[for="ShoulderType__Average"]')



       await page.hover('label[for="ShirtSize__5"]');
 await page.waitForSelector('label[for="ShirtSize__5"]')
    await page.click('label[for="ShirtSize__5"]')



    
//    await page.hover('label[for="ShoulderType__Average"]');
//  await page.waitForSelector('label[for="ShoulderType__Average"]')
//     await page.click('label[for="ShoulderType__Average"]')



await page.hover('label[for="PreferredFit__SuperSlim"]');
 await page.waitForSelector('label[for="PreferredFit__SuperSlim"]')
    await page.click('label[for="PreferredFit__SuperSlim"]')





    await page.hover('#addtocart');
    await page.waitForSelector('#addtocart')
        await page.click('#addtocart')

    console.log("====================================================================================");


    console.log("**************Congratulations************");
    console.log("SHIRT BOOKED");

    console.log("====================================================================================");

} 
//book1()
module.exports={book1}