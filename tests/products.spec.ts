import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { HeaderComponent} from '../components/HeaderComponent'
import { ProductsPage } from '../pages/ProductsPage';
import { YourCartPage } from '../pages/YourCartPage';

test('Logout test', async ({page}) =>{

    const loginPage = new LoginPage(page);
    const headerComponent = new HeaderComponent(page)
    //const cartPage = new CartPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(headerComponent.burgerMenuBtn).toBeVisible();
    await headerComponent.userLogout();
    await expect(page).toHaveURL("https://www.saucedemo.com/");
    await expect(loginPage.loginContainer).toBeVisible();
})

test('Header ShoppingCart test', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const headerComponent = new HeaderComponent(page)
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(headerComponent.productContainerSelect).toBeVisible();
    await headerComponent.clickShoppingCartBtn();
    await expect(page).toHaveURL(/cart.html/);
})

test('Header Select option test', async ({page}) =>{
    const loginPage = new LoginPage(page);
    const headerComponent = new HeaderComponent(page)
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(headerComponent.productContainerSelect).toBeVisible();
    await headerComponent.clickProductSortOptions();
    await expect(headerComponent.getProductSortOptions()).toHaveCount(4);
    await expect(headerComponent.getProductSortOptions()).toHaveText([
        'Name (A to Z)',
        'Name (Z to A)',
        'Price (low to high)',
        'Price (high to low)',
    ]);

    await headerComponent.selectProductSortOptionValue("Price (low to high)");
})

test('Adding product to cart test', async ({page}) => {
    const loginPage = new LoginPage(page);
    const headerComponent = new HeaderComponent(page)
    const productItem = new ProductsPage(page)
    const yourCartProduct = new YourCartPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(headerComponent.productContainerSelect).toBeVisible();
    await productItem.addRandomItemToCart();
    await headerComponent.clickShoppingCartBtn();
    await expect(page).toHaveURL(/cart.html/);
    await yourCartProduct.returnItem();
    await page.waitForTimeout(2500)
})