const {test,expect}= require('@playwright/test')
test("Handling check boxes elements", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("//input[@id='monday' and @type='checkbox']").check();

    expect(page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked()
    

    const checkboxes=[
        "//input[@id='monday' and @type='checkbox']",
        "//input[@id='sunday' and @type='checkbox']",
        "//input[@id='saturday' and @type='checkbox']"
    ]

    for(const locators of checkboxes){
        await page.locator(locators).check();
    }

    await page.waitForTimeout(5000) 

})