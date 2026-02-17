import {browser}  from 'k6/browser';

export const options = {
    scenarios: {
        browser_test: {
            executor: 'shared-iterations',
            options: {
                browser: {
                    type: 'chromium',
                }
            }
        }
    }
};

const base_url = 'https://www.testmuai.com/selenium-playground/select-dropdown-demo/';

export default async function () {
    const page = await browser.newPage();
    await page.goto(base_url);
    
    // const dropdown = page.locator('#select-demo');
    // await dropdown.selectOption('Saturday');

    const values = await page.$$('#select-demo>option')

    for (const value of values) {
        const valueName = await value.textContent();
        if (valueName === 'Saturday') {
            await page.selectOption('#select-demo', valueName);
            page.screenshot({
                path: 'screenshots/dropdown_test_result.png', 
                fullPage: true
            });
            break;
        }
    };
    
    page.waitForTimeout(5000);
};