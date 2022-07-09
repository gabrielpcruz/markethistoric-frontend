export default class ProductService {

    constructor(resource) {
        this._resource = resource('v1/product{/id}');
    }

    lista() {
        return this._resource.query();
    }
}
