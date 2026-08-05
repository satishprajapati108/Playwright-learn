import { error } from "console";
import * as dotenv from "dotenv";
import * as path from "path";

dotenv.config({path: path.resolve(__dirname, '../.env.staging')})

export function getBaseUrl(): string{
    const url = process.env.BASE_URL ?? 'https://app.staging.skima.ai';

    if(!url){
        throw new Error('BASE URL is not in .env');
    }
    return url;
}

export function getCredentials() : {email:string; password : string}{
    const email = process.env.TEST_USER_EMAIL;
    const password = process.env.TEST_USER_PASSWORD;

    if(!email || !password){
        throw new Error('TEST_USER_EMAIL and TEST_USER_PASSWORD not set in env');
    }

    return{email, password};

}
