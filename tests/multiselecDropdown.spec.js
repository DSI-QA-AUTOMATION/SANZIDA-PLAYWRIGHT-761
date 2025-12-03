const {test,expect}= require('@playwright/test')
test("Handling multi selexcdrop down elements", async({page})=>{
        await page.goto("https://testautomationpractice.blogspot.com/")
        await page.selectOption('#colors', ['Blue', 'Red'])

        await page.waitForTimeout(5000)  




})