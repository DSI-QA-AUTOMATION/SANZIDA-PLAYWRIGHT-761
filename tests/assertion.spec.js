const{test,expect}= require('@playwright/test')

test('AssertionTest', async({page})=>{
  await  page.goto('https://demo.nopcommerce.com/register')
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  const logoElement= page.locator('.header-logo')
  await expect(logoElement).toBeVisible()

  const searchStoreBox= page.locator('#small-searchterms')
  await expect(searchStoreBox).toBeEnabled()

})