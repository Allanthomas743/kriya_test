
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
    await page.goto('https://staging.kriyadocs.com');
    await page.waitForLoadState('networkidle', { timeout: 5000 });
    await page.fill('#username', 'allanthomas065@gmail.com');
    await page.fill('#password', 'Marymala_12');
    await page.keyboard.press('Enter');
    
    await page.waitForFunction('document.readyState === "complete"');

    await page.waitForSelector('//*[@id="login-page"]/div/form/div/div[3]/div[2]/div/div[1]/span | //*[@id="customerSelectionDiv"]/div[1]/div[1]');
   
    if (await page.locator('.col.s6.confirmationPanel').isVisible()) {
        await page.locator(".btn.waves-effect.waves-light.confirm").click();
    }

    //await page.waitForFunction('document.readyState === "complete"');

  
    await page.waitForSelector('.customerTitleDiv')
    const dos = page.locator('.customerTitleDiv');
    await expect(dos).toBeVisible();
});
