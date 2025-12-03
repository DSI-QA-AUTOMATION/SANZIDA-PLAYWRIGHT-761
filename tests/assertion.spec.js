const{test,expect}= require('@playwright/test')
const { escape } = require('querystring')

test('AssertionTest', async({page})=>{
  await  page.goto('https://demo.nopcommerce.com/register')
  await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

  await expect(page).toHaveTitle('nopCommerce demo store. Register')

  const logoElement= page.locator('.header-logo')
  await expect(logoElement).toBeVisible()

  const searchStoreBox= page.locator('#small-searchterms')
  await expect(searchStoreBox).toBeEnabled()

  const maleRadioButton=page.locator("#gender-male")
  await maleRadioButton.click()
  await expect(maleRadioButton).toBeChecked()

  const registerButton= page.locator('#register-button')
  await expect(registerButton).toHaveAttribute('type','submit')

  const pageTitle= page.locator('.page-title h1')
  await expect(pageTitle).toHaveText('Register')

  await expect(pageTitle).toContainText('eg')







})