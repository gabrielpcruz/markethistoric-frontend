import axios from "axios";

export default class ProductService {
    private readonly _resource: string;

    constructor() {
        this._resource = 'https://markethistoric.herokuapp.com';
    }

    lista() {
        return axios.get(this._resource + `/v1/product`);
    }

    history(id: number) {
        return axios.get(this._resource + `/v1/product/${id}/history`);
    }

    addHistory(id: number, history: any) {
        return axios.post(this._resource + `/v1/product/${id}/history`, {
            price: history.price,
            description: history.description,
        });
    }
}
