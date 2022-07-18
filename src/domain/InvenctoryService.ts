import axios, {AxiosResponse} from "axios";

import Service from "@/domain/Service";
import Invenctory from "@/model/invenctory/InvectoryInterface";
import InvenctoryServiceInterface from "@/domain/InventoryServiceInterface";
import {PropType} from "vue";
import Product from "@/model/product/ProductInterface";

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

    add(inventory: Invenctory) {
        // return this._resource.save(inventory);
    }

    update(id: number, product: object) {
        // return this._resource.update({
        //     id,
        // }, {
        //     name: product.name,
        //     products: product.products
        // });
    }

    delete(id: number) {
        // return this._resource.remove({id})
    }

    details(id: number) {
        return axios.get(this._resource + `/v1/invenctory/${id}/list`);
    }
}
