<template>
  <div>
    <div id="modal"></div>
    <h1 class="centralizado" v-if="invenctory">
      {{ invenctory.title }}
    </h1>

    <table class="table table-striped table-hover">
      <thead>
      <tr>
        <th>Nome</th>
        <th class="text-end">No carrinho</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(info, index) of invenctory_product" :key="index">
        <td>
                        <b-button v-b-modal="'modal_' + info.product_id">
                            {{ info.product_name }}

                            <History
                                :id="'button_' + info.product_id"
                                :product_name="info.product_name"
                                :product_id="parseInt(info.product_id)">
                            </History>
                        </b-button>
        </td>
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

<script lang="ts">
import {defineComponent, PropType} from 'vue';

import Invectory from '@/model/invenctory/InvectoryInterface';
import Product from "@/model/product/ProductInterface";

import History from "../shared/history/History.vue";
import InvenctoryService from "@/domain/InvenctoryService";
import CartService from "../../domain/CartService.vue";
import Service from "@/domain/Service";
import InvenctoryServiceInterface from "@/domain/InventoryServiceInterface";

export default defineComponent({
  name: 'ListComponent',
  components: {
    History,
  },
  props: {
    id: {
      type: String,
      required: true
    },
    invenctory: {
      type: Object as PropType<Invectory>,
      required: true
    },
    info: {
      type: Object as PropType<Product>,
      required: true
    }
  },
  data() {
    return {
      invenctory_product: [],
      cartService: Object,
      inventoryService: Object as PropType<InvenctoryServiceInterface>,
    }
  },

  methods: {
    noCarrinho(isOnCart: string) {
      return parseInt(isOnCart) ? 'bi-cart-check-fill' : 'bi-cart';
    },

    noCarrinhoBotao(isOnCart: string) {
      return parseInt(isOnCart) ? 'btn-secondary' : 'btn-light';
    },

    addRemoveCart(inventory_product: Invectory) {
      // const index = this.invenctory_product.indexOf(inventory_product);
      // const isOnCart = this.invenctory_product[index].checked;
      //
      //
      // if (parseInt(isOnCart) !== 1) {
      //   this.cartService.put(inventory_product.id)
      //       .then(() => this.list())
      // } else {
      //   this.cartService.remove(inventory_product.id)
      //       .then(() => this.list())
      // }
      //
      // this.$router.replace('/list')
    },

    list() {
      const id = parseInt(this.id);

      this.inventoryService.details(id)
          .then((data: any) => this.invenctory_product = data.data);
    },
  },

  created() {
    this.inventoryService = new InvenctoryService();
    this.cartService = new CartService();

    this.list()
  }
});

</script>

<style scoped>
.centralizado {
  text-align: center;
}
</style>
