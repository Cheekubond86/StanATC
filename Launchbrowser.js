import { chromium } from "playwright";
(async()=>{
         const browser = await chromium.launch({
           headless: false
         })
         const page = await browser.newPage();
        //Open URL
         await page.goto("https://www.stan.com.au/watch/")
         //await page.close()
         //await browser.close()
})();