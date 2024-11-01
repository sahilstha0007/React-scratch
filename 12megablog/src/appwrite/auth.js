import config from "../config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()

    account;


    constructor() {
        this.Client
            .setEndpoint(config.appwriteUrl)
            .setEndpoint(config.appwriteProjectID);
        this.account = new Account(this.Client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                // Call another method
                return this.login({ email, password });
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            throw error;
        }

    }
    async getCurrentUser() {
        try {
            await this.account.get()
        } catch (error) {
            console.log("Appwrite serive :: getCurrnetUser :: error", error)
        }
        return null;
        
    }
    
    async logout(){
        try {
            await this.account.deleteSession();
        } catch (error) {
            console.log("Appwrite serive :: logout :: error", error)
            
        }
    }
}



const authService = new AuthService()



export default authService