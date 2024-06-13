const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('https://www.google.co.in/');
  
  await page.getByTitle('Search').fill('Kriyadocs');

  await page.keyboard.press('Enter');

  await page.locator('h3:has-text("Kriyadocs | Publishing Workflow")').click();
  console.log(`pageTitle: ${await page.title()}`);
  await page.waitForFunction('document.readyState === "complete"');

  await page.evaluate(() =>window.scrollTo(0, document.body.scrollHeight));
  await page.locator('#w-node-_7dcd0ce9-1341-af97-5e5c-8ec793b8da30-c1c08335 a:nth-child(2)').click();
 
  await page.locator('xpath=//*[@id="w-node-_7dcd0ce9-1341-af97-5e5c-8ec793b8da30-c1c08335"]/a[2]').click();
  const hello=await page.locator('xpath=/html/body/div[2]/div[2]/div/div/div[1]/div[1]/div[1]/div[2]/p');
  const paragraphText = await hello.textContent();
  console.log(`Paragraph text: ${paragraphText}`);
  const hello1=await page.locator('xpath=/html/body/div[2]/div[2]/div/div/div[1]/div[2]/div[1]/div[2]/p');
  const paragraph1Text = await hello1.textContent();
  console.log(`Paragraph text: ${paragraph1Text}`);
  const hell2=await page.locator('xpath=//html/body/div[2]/div[2]/div/div/div[2]/div/div[1]/div/div[2]/p');
  const paragraph2Text = await hell2.textContent();
  console.log(`Paragraph text: ${paragraph2Text}`);
  
  await page.waitForTimeout(5000);
});