import axios from "axios";

export default class ProductService {

    constructor(resource) {
        this._resource = 'https://markethistoric.herokuapp.com';

        // this._resource = resource('v1/product{/id}{/action}');
    }

    lista() {
        return this._resource.query();
    }

    history(id) {
        return axios.get(this._resource + `/v1/product/${id}/history`);
    }

    addHistory(id, history) {

        return this._resource.save({
            id,
            action: 'history'
        }, {
            price: history.price,
            description: history.description,
        });
    }
}
