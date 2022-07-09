export default class InvenctoryService {

    constructor(resource) {
        this._resource = resource('v1/invenctory{/id}{/action}');
    }

    get(id) {
        return this._resource.get({id});
    }

    lista() {
        return this._resource.query();
    }

    add(inventory) {
        return this._resource.save(inventory);
    }

    update(id, product) {
        return this._resource.update({
            id
        }, {product});
    }

    delete(id) {
        return this._resource.remove({id})
    }

    details(id) {
        return this._resource.get({
            id,
            action: 'list'
        })
    }
}
