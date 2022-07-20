import axios, {AxiosResponse} from "axios";

import Invenctory from "@/model/invenctory/InvectoryInterface";
import InvenctoryServiceInterface from "@/domain/InventoryServiceInterface";

export default class InvenctoryService implements InvenctoryServiceInterface {
    _resource : string;

    constructor() {
        this._resource = 'https://markethistoric.herokuapp.com';
    }

    get(id: number) {
        return axios.get(this._resource + `/v1/invenctory/${id}`);
    }

    lista() {
        return axios.get(this._resource + `/v1/invenctory`);
    }

    add(title: string, products: any) {
        return axios.post(this._resource + `/v1/invenctory`, {
            name: title,
            products: products
        });
    }

    update(id: number, product: any) {
        return axios.put(this._resource + `/v1/invenctory/${id}`, {
            name: product.name,
            products: product.products
        });
    }

    delete(id: number) {
        return axios.delete(this._resource + `/v1/invenctory/${id}`);
    }

    details(id: number) {
        return axios.get(this._resource + `/v1/invenctory/${id}/list`);
    }
}
