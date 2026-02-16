import {browser} from 'k6/browser';

const base_url = 'https://weather.bangkok.go.th/';

export const options = {
    scenarios: {
        browser_test: {
            executor: 'constant-vus',
            vus: 10,
            duration: '10s',
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
    page.setViewportSize({
        width: 375,
        height: 812
    });
    await page.goto(base_url);
    await page.waitForLoadState('networkidle');
    page.close();
};