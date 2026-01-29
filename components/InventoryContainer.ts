import {Page, Locator} from '@playwright/test';

export class InventoryContainers{
    private readonly page: Page;
    private readonly inventoryContainer: Locator;
    private readonly burgerMenuBtn: Locator;
    private readonly titleTxt: Locator;
    private readonly addToCartBtn: Locator;

    constructor(page: Page){
        this.page = page;
        this.inventoryContainer = page.locator('div.header_label');
        this.burgerMenuBtn = page.getByRole('button', {name: 'Open Menu'});
        this.titleTxt = page.getByText('Swag Labs');
        this.addToCartBtn = page.getByTestId('shopping-cart-link')
    }
}