export default class ProductService {

    constructor(resource) {
        this._resource = resource('v1/product{/id}{/action}');
    }

    lista() {
        return this._resource.query();
    }

    history(id) {
        return this._resource.get({
            id,
            action: 'history'
        });
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
