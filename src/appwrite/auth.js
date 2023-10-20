import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js";

export class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)
    }

    // For Sign Up Account
    async createAccount({ email, password, name }) {
        try {
            // console.log({ name, email,username,  password })
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            console.log(userAccount);
            if (userAccount) {
                // console.log('User created successfully ', userAccount);
                return this.login({ email, password })
            } else {
                return userAccount
            }
        } catch (error) {
            console.log("Error createAccount: ", error);
        }
    }

    // For Login Account
    async login({ email, password }) {
        try {
            console.log({ email, password });
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            console.log('Error ', error)
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log('Error getCurrentUser: ', error)
        }
    }
    // For Logout
    async logout() {
        try {
            this.account.deleteSessions()
        } catch (error) {
            console.log('Error ', error)
        }
    }
}

const authService = new AuthService();
export default authService;
