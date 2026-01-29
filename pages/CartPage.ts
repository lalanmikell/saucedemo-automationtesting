import { Locator, Page } from "@playwright/test";

export class CartPage {
    
    private readonly page: Page;
    private readonly divHeaderContainer: Locator;
    private readonly optionsBtn: Locator;
    private readonly cartBtn: Locator;
    private readonly filterSelect: Locator;
    private readonly imgLink: Locator;
    private readonly titleLink: Locator;
    private readonly addToCartBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.divHeaderContainer = page.getByTestId('inventory-container');
        this.optionsBtn = page.getByRole('button', {name: 'Open Menu'});
        this.cartBtn = page.getByTestId('shopping-cart-link');
        this.filterSelect = page.getByTestId('product-sort-container');
        this.imgLink = page.getByAltText('Sauce Labs backpack');
        this.titleLink = page.getByText('Sauce Labs Backpack', {exact: true});
        this.addToCartBtn = page.getByRole('button', {name: 'Add to cart'})

    }

    async isPageLoaded(){
        await this.divHeaderContainer.isVisible();
    }

}