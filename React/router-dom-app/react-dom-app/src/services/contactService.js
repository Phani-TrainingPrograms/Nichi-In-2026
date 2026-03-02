import axios from "axios";
export class ContactService {
    static baseUrl = "http://localhost:1234/api/contacts";

    static getContacts() {
        return axios.get(this.baseUrl);
    }
    static getContact(id){
        return axios.get(`${this.baseUrl}/${id}`);
    }

    static createContact(contact) {
        return axios.post(this.baseUrl, contact);
    }
    //todo: implement update and delete
}