const {test,expect}= require('@playwright/test')
test("Handling drop down elements", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    await page.locator("#country").selectOption({label:'India'});
    
    //by using visible text
    await page.locator('#country').selectOption('India')

    await page.locator("#country").selectOption({value:'uk'});

    //by using index
    await page.locator("#country").selectOption({index:1});

    const options=await page.locator('#country option')
    await expect(options).toHaveCount(10)




    await page.waitForTimeout(5000)  //pausing the code


  





})