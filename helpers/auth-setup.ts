import { FullConfig, chromium } from "@playwright/test";
import * as path from "path";
import * as fs from "fs";
import { getBaseUrl, getLoginMethod, getCredentials } from "./env";
import { LoginPage } from "../pages/login.page";

const authFile = path.resolve(__dirname, '../auth/user.json')

export default async function globalSetUp(config : FullConfig){

    if(fs.existsSync(authFile)){
        console.log("Auth file already exist");
        return;
    }

    const baseUrl = getBaseUrl;
    const loginMethod = getLoginMethod;

    fs.mkdirSync(path.dirname(authFile), { recursive: true});


    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    const loginPage = new LoginPage(page);

    await loginPage.open(baseUrl);

      


}