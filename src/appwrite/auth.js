import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf";

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
    async createAccount({ name, email,username, password }) {
        console.log(username);
        try {
            const userAccount = await this.account.create(ID.unique(), name, email,username, password);
            console.log(userAccount);
            if (userAccount) {
                console.log('User created successfully ', userAccount);
                return this.login({ username, password })
            } else {
                return userAccount
            }
        } catch (error) {
            console.log("Error createAccount: ", error);
        }
    }

    // For Login Account
    async login({ username, password }) {
        try {
            await this.account.createEmailSession(username, password)
        } catch (error) {
            console.log('Error ', error)
        }
    }

    async getCurrentUser(){
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
