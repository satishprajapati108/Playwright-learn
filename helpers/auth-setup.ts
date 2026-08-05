import { FullConfig, chromium } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";
import { getBaseUrl, getCredentials } from "./env";
import { LoginPage } from "../pages/login.page";
import { url } from "inspector";

const authFile = path.resolve(__dirname, '../.auth/user.json')

export default async function globalSetUp(config : FullConfig){

    if(fs.existsSync(authFile)){
        console.log("Auth file already exist");
        return;
    }

    const baseUrl = getBaseUrl();
    const {email, password} = getCredentials();

    fs.mkdirSync(path.dirname(authFile), { recursive: true});


    const browser = await chromium.launch({headless: false, slowMo: 500 });
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await loginPage.open(baseUrl);
    await loginPage.login(email, password);

    await page.waitForURL((url) => !url.pathname.includes('/login'), {timeout:30000});

    await context.storageState({path: authFile});
    await browser.close();

    console.log("auth is saved to ", authFile);
}