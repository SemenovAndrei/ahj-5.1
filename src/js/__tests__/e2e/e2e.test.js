import puppetteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:8888';

  beforeAll(async () => {
    server = fork(`${__dirname}../../../../js/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppetteer.launch({
      headless: false, // show gui
      slowMo: 250,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('should add do something', async () => {
    await page.goto(baseUrl);
  });

  describe('valid', async () => {
    const buttons = await document.querySelectorAll('.button');

    test.each([
      [buttons[0]],
      [buttons[1]],
      [buttons[2]],
      [buttons[3]],
    ])('%p', async (button) => {
      await page.goto(baseUrl);
      await button.click();
      await page.waitForSelector('.button-active');

      await button.click();
    });
  });
});
