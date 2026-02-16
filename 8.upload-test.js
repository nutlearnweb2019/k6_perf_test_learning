import {browser, networkProfiles} from 'k6/browser';
import {check} from 'k6';

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

const base_url = 'https://www.testmuai.com/selenium-playground/upload-file-demo/';
const uploaded = 'File Successfully Uploaded';

export default async function () {
    const page = await browser.newPage();
    page.throttleNetwork(networkProfiles['Fast 3G']);
    page.setViewportSize({
        width: 1280,
        height: 720
    });
    await page.goto(base_url);
    await page.setInputFiles('#file', {name:'test-data/pdf_test_k6.pdf'});
    page.waitForTimeout(5000);
    page.screenshot({ 
        path: 'screenshots/upload_test_result.png', 
        fullPage: true 
    });  
    
    check(page, {
        'Text validation': (page) => page.locator('#error').textContent(uploaded)
    });
    
    page.close();
};