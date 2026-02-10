import { Locator, Page } from "@playwright/test";

export class ProductsPage {
    
     private readonly page: Page;
    readonly itemContainer: Locator;

    constructor(page: Page){
        this.page = page;
        this.itemContainer = page.locator('#inventory_container .inventory_item');
    }

    //Método asyncrono para un elemento aleatorio
    async addRandomItemToCart(){
        const allItems = await this.itemContainer.all();
        if (allItems.length === 0){
            console.log("No se encontraron productos")
            //throw new Error("No se encontraron productos")
        }
        const randomIndex = Math.floor(Math.random() * allItems.length);
        const randomItem = allItems[randomIndex]
        const itemName = await randomItem.locator(".inventory_item_name").innerText();
        const itemDesc = await randomItem.locator(".inventory_item_desc").innerText();
        const itemPrice = await randomItem.locator(".inventory_item_price").innerText();
        await randomItem.getByRole('button', {name: 'Add To Cart'}).click();
        

        console.log(`Se hizo click en el item indice: ${randomIndex}
            Name: ${itemName}
            Desc: ${itemDesc}
            Price ${itemPrice}`);
    }
}