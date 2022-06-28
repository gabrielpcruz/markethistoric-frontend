<template>
  <div>
    <h1 class="centralizado" v-if="invenctory">
      {{ invenctory.title }}
    </h1>

    <table class="table table-striped">
      <thead>
      <tr>
        <th>Nome</th>
        <th class="text-end">No carrinho</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="info of invenctory_product">
          <td>{{ info.product_name }}</td>
          <td class="text-end">
            <i @dblclick="addRemoveCart(info)" class="bi" :class="noCarrinho(info.checked)"></i>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: Number,
    invenctory: Object,

    info: {
      product_name : String
    }
  },
  name: "List",

  data() {
    return {
      invenctory_product: [],
    }
  },

  methods: {
    noCarrinho(isOnCart) {
      return parseInt(isOnCart) ? 'bi-cart-check-fill' : 'bi-cart';
    },
    addRemoveCart(inventory_product) {

      const isOnCart = inventory_product.checked;

      if (isOnCart) {
        axios.put(`http://localhost:8081/v1/invenctory/cart/${inventory_product.id}`)
          .then(() => {
            this.invenctory_product.indexOf(inventory_product);
          });
      } else {
        axios.delete(`http://localhost:8081/v1/invenctory/cart/${inventory_product.id}`)
          .then(() => this.$router.replace('/'));
      }
    }
  },

  created() {
    axios.get(`http://localhost:8081/v1/invenctory/${this.id}/list`)
      .then(invenctory_product => this.invenctory_product = invenctory_product.data);
  }
}
</script>

<style scoped>
.centralizado {
  text-align: center;
}
</style>
