import Service from "@/domain/Service";

export default class CartService implements Service {

    constructor() {
        this._resource = 'https://markethistoric.herokuapp.com';
    }

    put(inventory_id) {
        return this._resource.update({
            id: inventory_id,
            action: 'cart'
        }, {});
    }

    remove(inventory_id) {
        return this._resource.remove({
            id: inventory_id,
            action: 'cart'
        }, {});
    }
}
