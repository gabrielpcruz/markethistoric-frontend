<template>
  <div>
    <div id="modal"></div>
    <h1 class="centralizado" v-if="invenctory_title">
      {{ invenctory_title }}
    </h1>

    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th class="text-start">Nome</th>
        <th class="text-end">No carrinho</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="invenctory_item of invenctory_product" :key="invenctory_item.id">
        <td class="text-start">
          <b-overlay v-b-modal="'button_' + invenctory_item.product_id">
            {{ invenctory_item.product_name }}
            <History
                :id="'button_' + invenctory_item.product_id"
                :product_name="invenctory_item.product_name"
                :product_id="parseInt(invenctory_item.product_id)">
            </History>
          </b-overlay>
        </td>
        <td class="text-end">
          <button @click="addRemoveCart(invenctory_item)" class="btn" :class="noCarrinhoBotao(invenctory_item.checked)">
            <i class="bi" :class="noCarrinho(invenctory_item.checked)"></i>
          </button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import InvenctoryService from "@/domain/InvenctoryService";
import CartService from "@/domain/CartService";

import History from "../shared/history/History.vue";
import InvenctoryListInterface from '@/model/invenctory/InvenctoryListInterface';
import { AxiosResponse } from 'axios';

export default defineComponent({
  name: 'InvenctoryList',
  components: {
    History,
  },
  props: {
    title: {
      type: String,
      required: false
    },
  },
  data() {
    return {
      invenctory_product: [] as InvenctoryListInterface[],
      inventoryService: new InvenctoryService(),
      cartService: new CartService(),
      invenctory_id: this.$route.params.id as string || '0',
      invenctory_title: this.title || ''
    }
  },

  methods: {
    noCarrinho(isOnCart: string) {
      return parseInt(isOnCart) ? 'bi-cart-check-fill' : 'bi-cart';
    },

    noCarrinhoBotao(isOnCart: string) {
      return parseInt(isOnCart) ? 'btn-secondary' : 'btn-light';
    },

    addRemoveCart(inventory_product: InvenctoryListInterface) {
      const index = this.invenctory_product.indexOf(inventory_product);
      let invenctory = this.invenctory_product[index];

      const isOnCart = invenctory.checked;

      if (parseInt(isOnCart) !== 1) {
        this.cartService.put(inventory_product.id)
            .then(() => this.list())
      } else {
        this.cartService.remove(inventory_product.id)
            .then(() => this.list())
      }

      this.$router.replace('invenctory_list');
    },

    list() {
      const id = parseInt(this.invenctory_id);

      this.inventoryService.details(id)
          .then((data: AxiosResponse) => this.invenctory_product = data.data);
    },
  },

  created() {
    this.list();
  }
})
</script>

<style scoped>
.centralizado {
  text-align: center;
}
</style>
