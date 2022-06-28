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
          <button @click="addRemoveCart(info)" class="btn" :class="noCarrinhoBotao(info.checked)">
            <i class="bi" :class="noCarrinho(info.checked)"></i>
          </button>
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
      product_name: String
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

    noCarrinhoBotao(isOnCart) {
      return parseInt(isOnCart) ? 'btn-secondary' : 'btn-light';
    },

    addRemoveCart(inventory_product) {
      const index = this.invenctory_product.indexOf(inventory_product);
      const isOnCart = this.invenctory_product[index].checked;

      if (parseInt(isOnCart) !== 1) {
        axios.put(`http://localhost:8081/v1/invenctory/cart/${inventory_product.id}`)
          .then(() => {
            const index = this.invenctory_product.indexOf(inventory_product);
            this.invenctory_product[index].checked = 1;

            this.sortByCart();
          });
      } else {
        axios.delete(`http://localhost:8081/v1/invenctory/cart/${inventory_product.id}`)
          .then(() => {
            const index = this.invenctory_product.indexOf(inventory_product);
            this.invenctory_product[index].checked = 0;

            this.sortByCart();
          });
      }
    },

    sortByCart() {
      this.invenctory_product.sort((a, b) => {
        if (parseInt(a.checked) === 1 && parseInt(b.checked) === 0) {
          return 1
        }

        if (parseInt(a.checked) === 0 && parseInt(b.checked) === 1) {
          return -1
        }

        if (parseInt(a.checked) === 1 && parseInt(b.checked) === 1) {
          return 0
        }
      });
    }
  },

  created() {
    axios.get(`http://localhost:8081/v1/invenctory/${this.id}/list`)
      .then(invenctory_product => {
        this.invenctory_product = invenctory_product.data;

        this.sortByCart();
      });
  }
}
</script>

<style scoped>
.centralizado {
  text-align: center;
}
</style>
