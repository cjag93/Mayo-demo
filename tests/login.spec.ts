import { test } from '@applitools/eyes-playwright/fixture';
import path from 'path';
import { pathToFileURL } from 'url';

test('login page', async ({ page, eyes }) => {
  const loginPage = pathToFileURL(path.resolve(__dirname, '../login.html')).href;
  await page.goto(loginPage);

  /* Full page visual check */
  await eyes.check('Login page Mayo', { fully: true, matchLevel: 'Dynamic' });
});
