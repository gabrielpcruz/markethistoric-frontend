import Service from "@/domain/Service";
import axios from "axios";

export default class CartService extends Object implements Service {
    private readonly _resource: string;

    constructor() {
        super();
        this._resource = 'https://markethistoric.herokuapp.com';
    }

    put(inventory_id: number) {
        return axios.put(this._resource + `/v1/invenctory/${inventory_id}/cart`);
    }

    remove(inventory_id: number) {
        return axios.delete(this._resource + `/v1/invenctory/${inventory_id}/cart`);
    }
}
