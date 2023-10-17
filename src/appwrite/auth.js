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
    async createAccount({ name, gmail, username, password }) {
        try {
            const userAccount = await this.account.create(ID.unique(), name, gmail, username, password);
            if (userAccount) {
                console.log('User created successfully ', userAccount);
                return this.login({ username, password })
            } else {
                return userAccount
            }
        } catch (error) {
            console.log('Error ', error)
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
