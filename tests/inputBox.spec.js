const {test,expect}= require('@playwright/test')
test("Handling web elements", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await expect(page.locator("//input[@id='name']")).toBeVisible()
    await expect(page.locator("//input[@id='name']")).toBeEmpty()
    await expect(page.locator("//input[@id='name']")).toBeEditable()
    await expect(page.locator("//input[@id='name']")).toBeEditable()
    await page.locator("//input[@id='name']").fill("Sanzida")

    await page.waitForTimeout(5000)  //pausing the code


  





})