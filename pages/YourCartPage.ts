import { Locator, Page } from "@playwright/test";

export class YourCartPage {
    private readonly page: Page;
    readonly cartItemLabel: Locator;

   

    constructor(page: Page){
        this.page = page;
        this.cartItemLabel = page.locator('.cart_item_label');
    }

    async returnItem(){
        const cartItemName = await this.cartItemLabel.locator('.inventory_item_name').innerText();
        console.log(`Your Product
            Name: ${cartItemName}`)
    }

}