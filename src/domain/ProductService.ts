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

        // return this._resource.save({
        //     id,
        //     action: 'history'
        // }, {
        //     price: history.price,
        //     description: history.description,
        // });
    }
}
