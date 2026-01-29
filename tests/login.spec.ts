import {test, expect} from '@playwright/test';
import { LoginPage} from '../pages/LoginPage';
import { CartPage } from '../pages/CartPage';

    

test('Login test', async ({ page }) =>{

    const loginPage = new LoginPage(page);
    const cartPage = new CartPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    expect (await cartPage.isPageLoaded());
})

test.only('Invalid Login test', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login('user', 'passwrord');
    expect (await loginPage.getErrorMessage()).toBeVisible();
})