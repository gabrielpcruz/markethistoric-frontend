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
          <th class="text-end">
            <BotaoComponent
                tipo="button"
                estilo="btn-success"
                icone="bi bi-plus"
                rotulo="a"
                link="product_add"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product of product_list" :key="product.id">
          <td class="text-start">
            <span>
              {{ product.name }}
            </span>
          </td>
          <td class="text-end">
            <BotaoComponent
                tipo="button"
                @metodoBotao="atualizar($event, product)"
                estilo="btn-warning"
                icone="bi bi-pencil-square"
                rotulo="atualizar"
                link="product_edit"
                :id="product.id"
                :invenctory="invenctory"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { AxiosResponse } from 'axios';
import ProductService from "@/domain/ProductService";
import ProductInterface from "@/model/product/ProductInterface";
import BotaoComponent from "@/components/shared/botao/Botao.vue";

export default defineComponent({
  name: 'ProductList',
  components: {
    BotaoComponent
  },
  props: {
  },
  data() {
    return {
      product_list: [] as ProductInterface[],
      productService: new ProductService(),
      invenctory_id: this.id || '0',
      invenctory_title: this.title || ''
    }
  },

  methods: {
    list() {
      this.productService.lista()
          .then((data: AxiosResponse) => this.product_list = data.data);
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
