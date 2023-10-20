import { Client, Databases } from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client)
    }

    async createPost() {
        try {

        } catch (error) {

        }
    }

    async updatePost() {
        try {

        } catch (error) {

        }
    }

    async deletePost() {
        try {

        } catch (error) {

        }
    }

    async getPost() {
        try {

        } catch (error) {

        }
    }

    async getPosts() {
        try {

        } catch (error) {

        }
    }

}

const service = new Service();
export default service;