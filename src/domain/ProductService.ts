import axios from "axios";
import Service from "@/domain/Service";
import ProductHistoryInterface from "@/model/product/ProductHistoryInterface";

export default class ProductService {
    private readonly _resource: string;

    constructor() {
        this._resource = Service.resource();
    }

    lista() {
        return axios.get(this._resource + `/v1/product`);
    }

    history(id: number) {
        return axios.get(this._resource + `/v1/product/${id}/history`);
    }

    addHistory(id: number, history: ProductHistoryInterface) {
        return axios.post(this._resource + `/v1/product/${id}/history`, {
            price: history.price,
            description: history.description,
        });
    }
}
