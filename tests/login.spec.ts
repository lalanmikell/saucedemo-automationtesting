import {test, expect} from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import { YourCartPage } from '../pages/YourCartPage';

test('Login test', async ({ page }) =>{

    const loginPage = new LoginPage(page);
    const cartPage = new YourCartPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
})

test('Invalid Login test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('user', 'passwrord');
    await expect(loginPage.errorDivMsg).toBeVisible();
    await expect(loginPage.errorDivMsg).toContainText('Epic sadface:')
})