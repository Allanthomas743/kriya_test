
const { test, expect } = require('@playwright/test');

test('has title', async ({ browser }) => {
const context = await browser.newContext();
const page = await context.newPage()
    await page.goto('https://staging.kriyadocs.com');
    await page.waitForLoadState('networkidle', { timeout: 5000 });
    await page.fill('#username', 'allanthomas065@gmail.com');
    await page.fill('#password', 'Marymala_12');
    await page.keyboard.press('Enter');

    await page.waitForFunction('document.readyState === "complete"');

    
    const dosSelector = '.customerTitleDiv';
    const confirmationSelector = '.btn.waves-effect.waves-light.confirm';

    try {
       
        await page.waitForSelector(dosSelector,{timeout:10000});
    } catch (error) {
       
        if (await page.locator(confirmationSelector).isVisible()) {
            await page.locator(confirmationSelector).click();
        }

       
        await page.waitForSelector(dosSelector);
    }

    await page.waitForTimeout(10000);
    await page.click(`img[src="./images/customers/asm.jpg"]`);
    await page.waitForTimeout(12000);
    await page.locator('.fa.fa-book').click();
    await page.waitForTimeout(5000);
    await page.waitForSelector(`[data-doi="msphere_23_246"]`);
    const sop=page.locator(`[data-doi="msphere_23_246"]`);
    await sop.click();
    const editButton = page.locator('.editable .fa.fa-edit:nth-child(1)');
    const pagePromise = context.waitForEvent('page');
    await editButton.click();
   
    const newPage = await pagePromise;
    await newPage.waitForLoadState('load');
    



    await expect(newPage.locator('.issue-id')).toHaveText(' msphere_23_246 ', {timeout: 15000});
    
    await expect(newPage.locator('.binderTitle')).toHaveText(' msphere | Volume 23 | Issue 246 ', {timeout: 15000});
   
    await expect(newPage.locator('.cover-fpo-div')).toBeVisible();  
    await expect(newPage.locator('.issueStageTagDiv')).toBeVisible(); 
    
    
    });
