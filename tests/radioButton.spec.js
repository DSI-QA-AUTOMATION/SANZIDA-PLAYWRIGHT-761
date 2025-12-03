const {test,expect}= require('@playwright/test')
test("Handling radio button elements", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")

    await page.locator("//input[@id='male']").check();
    await expect(page.locator("//input[@id='male']")).toBeChecked();
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();
    await page.waitForTimeout(5000)  //pausing the code
})