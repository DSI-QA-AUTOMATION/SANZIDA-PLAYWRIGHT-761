const {test,expect}= require('@playwright/test')
test("Soft Assertion", async({page})=>{

    //Hard Assertion
    await page.goto("https://demoblaze.com/index.html")
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL("https://demoblaze.com/index.html")
    await expect(page.locator('.navbar-brand')).toBeVisible();

    //Soft Assertion

    await expect.soft(page).toHaveTitle('STORE')
    await expect.soft(page).toHaveURL("httups://demoblaze.com/index.html")
    await expect.soft(page.locator('.navbar-brand')).toBeVisible();





})