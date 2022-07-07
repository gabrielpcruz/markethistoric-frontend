export default class CartService {

  constructor(resource) {
    this._resource = resource('v1/invenctory{/action}{/id}');
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
