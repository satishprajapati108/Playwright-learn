import { Page, Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage{

    readonly emailInput = this.page.getByTestId('login-email-input');;
    readonly passwordInput = this.page.getByTestId('login-password-input');
    readonly loginButton = this.page.getByTestId('login-submit-button');
    readonly googleLoginButton = this.page.getByTestId('');

    async open(baseUrl : String){
        await this.page.goto(`${baseUrl}/login`)
    }

    async login(email:string, password:string){
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
}