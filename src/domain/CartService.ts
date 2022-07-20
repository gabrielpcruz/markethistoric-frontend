import axios from "axios";

export default class CartService {
    private readonly _resource: string;

    constructor() {
        this._resource = 'https://markethistoric.herokuapp.com';
    }

    put(inventory_id: number) {
        return axios.put(this._resource + `/v1/invenctory/cart/${inventory_id}`);
    }

    remove(inventory_id: number) {
        return axios.delete(this._resource + `/v1/invenctory/cart/${inventory_id}`);
    }
}
