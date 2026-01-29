import {Page, Locator} from '@playwright/test';

export class LoginPage{

    private readonly page: Page;
    readonly loginContainer: Locator;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly loginBtn: Locator;
    readonly errorDivMsg: Locator;

    constructor(page: Page){
        this.page = page;
        this.loginContainer = page.locator('#login_button_container');
        this.usernameInput = page.getByRole('textbox', {name: 'Username'});
        this.passwordInput = page.getByRole('textbox', {name: 'Password'});
        this.loginBtn = page.getByRole('button', {name: 'Login'});
        this.errorDivMsg = page.getByTestId('error');
    }

    async gotoLoginPage(){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();   
    }    

}
