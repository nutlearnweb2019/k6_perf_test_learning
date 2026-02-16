import {browser, networkProfiles} from 'k6/browser';
import {check} from 'k6';
import {
  randomIntBetween,
  randomString,
  randomItem,
  uuidv4,
  findBetween,
} from 'https://jslib.k6.io/k6-utils/1.4.0/index.js';

const base_url = 'https://naveenautomationlabs.com/opencart/index.php?route=account/register';
const success_url = 'https://naveenautomationlabs.com/opencart/index.php?route=account/success';
const success_message = 'Your Account Has Been Created!';

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

export default async function () {
    const page = await browser.newPage();
    page.throttleNetwork(networkProfiles['Slow 3G']);
    page.setViewportSize({
        width: 820,
        height: 1180
    });
    await page.goto(base_url);
    await page.locator('#input-firstname').fill(randomString(8));
    await page.locator('#input-lastname').fill(randomString(10));
    await page.locator('#input-email').fill(randomString(5) + '_' + randomIntBetween(0, 999).toString() + '@email.com');
    await page.locator('#input-telephone').fill(randomIntBetween(1000000000, 9999999999).toString());
    const password = uuidv4();
    await page.locator('#input-password').fill(password);
    await page.locator('#input-confirm').fill(password);
    await page.locator('input[type="checkbox"]').check();
    page.screenshot({ 
        path: 'screenshots/register_test_data.png', 
        fullPage: true 
    });
    const submit = page.locator('input[type="submit"]');
    await Promise.all([page.waitForNavigation(), submit.click()]);
    page.screenshot({ 
        path: 'screenshots/register_test_result.png', 
        fullPage: true 
    });
    
    check(page,{
        'URL validation': (page) => page.url() == success_url,
        'Title validation': (page) => page.title(success_message),
        'Success message validation': (page) => page.locator('div[id="content"] h1').textContent(success_message)
    });
    
    await page.close();
};