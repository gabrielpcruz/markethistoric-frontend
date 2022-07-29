import axios from "axios";

import Service from "@/domain/Service";
import InvenctoryAddInterface from "@/model/invenctory/InvectoryAddInterface";

export default class InvenctoryService {
    _resource : string;

    constructor() {
        this._resource = Service.resource();
    }

    get(id: number) {
        return axios.get(this._resource + `/v1/invenctory/${id}`);
    }

    lista() {
        return axios.get(this._resource + `/v1/invenctory`);
    }

    add(title: string, products: []) {
        return axios.post(this._resource + `/v1/invenctory`, {
            name: title,
            products: products
        });
    }

    update(id: number, invenctoryInfo: InvenctoryAddInterface) {
        return axios.put(this._resource + `/v1/invenctory/${id}`, {
            name: invenctoryInfo.name,
            products: invenctoryInfo.products
        });
    }

    delete(id: number) {
        return axios.delete(this._resource + `/v1/invenctory/${id}`);
    }

    details(id: number) {
        return axios.get(this._resource + `/v1/invenctory/${id}/list`);
    }
}
