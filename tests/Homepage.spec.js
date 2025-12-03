const {test, expect } = require('@playwright/test')
test('Home Page', async({page})=>{
await page.goto('https://demoqa.com/')
const pageTitle= page.title;
 await expect(page).toHaveTitle('DEMOQA');
 await expect (page).toHaveURL('https://demoqa.com/');
 await page.close();
//await page.close();
})