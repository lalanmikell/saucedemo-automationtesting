import {Page, Locator} from '@playwright/test';

export class HeaderComponent{
    //Page object instace 
    private readonly page: Page;
    readonly burgerMenuBtn: Locator;
    readonly logoutBtn: Locator;
    readonly shoppingCartBtn: Locator;
    readonly secondaryHeaderContainer: Locator;
    readonly productContainerSelect: Locator;
    readonly productSortOptionsSelectBtn:Locator;

    constructor(page: Page){
        //Locators initialization
        this.page = page;
        //Header component Locators
        this.burgerMenuBtn = page.getByRole('button', {name: 'Open Menu'});
        this.logoutBtn = page.getByRole('link', {name:'Logout'});
        this.shoppingCartBtn = page.locator('[data-test="shopping-cart-link"]')
        this.secondaryHeaderContainer = page.locator('[data-test="secondary-header"]')
        this.productContainerSelect = page.locator('.select_container');
        this.productSortOptionsSelectBtn = page.locator('[data-test="product-sort-container"]');
    }
    

    async userLogout(){
        await this.burgerMenuBtn.click();
        await this.logoutBtn.click();
        await this.page.waitForURL("https://www.saucedemo.com/")
    }

    async clickShoppingCartBtn(){
        await this.shoppingCartBtn.click();
    }

    async clickProductSortOptions(){
        await this.productSortOptionsSelectBtn.click();
    }

    async selectProductSortOptionValue(optionValue: string){
        await this.productSortOptionsSelectBtn.selectOption(optionValue);
    }

    getProductSortOptions(){
        return this.productSortOptionsSelectBtn.locator('option');
    }


}