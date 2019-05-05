import axios from "axios";
export default class AxiosServices {
    constructor () {
        this.baseUrl = "http://localhost:4000/api/";
    }
    async post(url, data) {
        try {
            const response = await axios.post(this.baseUrl + url, data);
            console.log('👉 Returned data:', response);
            return response;
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
            throw error;
        }
    }
    async get(url, data = {}) {
        try {
            const response = await axios.get(this.baseUrl + url, data);
            console.log('👉 Returned data:', response.data);
            return response.data;
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
            throw error;
        }
    }
    async update(url, data) {
        try {
            const response = await axios.put(this.baseUrl + url, data);
            console.log('👉 Returned data:', response);
            return response;
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
            throw error;
        }
    }
    async deleteRecord(url, data) {
        try {
            const response = await axios.delete(this.baseUrl + url, data);
            console.log('👉 Returned data:', response);
            return response;
        } catch (error) {
            console.log(`😱 Axios request failed: ${error}`);
            throw error;
        }
    }

}