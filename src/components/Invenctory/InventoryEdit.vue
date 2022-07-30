<template>
    <div>
      <h1 class="form-label centralizado" >{{ listName || 'Digite o nome da lista...' }}</h1>
      <div class="input-group">
            <input class="form-control" v-model="listName" id="nomelista" type="text" placeholder="Nome da Lista">
        </div>
        <hr>
        <table class="table table-striped table-hover">
            <thead>
            <tr>
                <th>Produto</th>
                <th class="text-end">Selecione o produto</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product of product_list" :key="product.id">
                <td class="text-start">{{ product.name }}</td>
                <td class="text-end">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        v-bind:value="product.id"
                        name="list[]"
                        v-model="selecionados"
                    >
                </td>
            </tr>
            </tbody>
        </table>

        <div class="d-grid gap-2 mb-5">
            <button @click="$router.push('/')" type="button" class="btn btn-warning">Cancelar</button>
            <button @click="atualizar" type="button" class="btn btn-primary">Salvar</button>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import InvenctoryService from "@/domain/InvenctoryService";
import ProductService from "@/domain/ProductService";
import ProductInventory from "@/model/product/ProductInventoryInterface";

export default defineComponent({
  name: "InventoryEdit",

  data() {
    return {
      listName: "",
      product_list: [],
      invenctory_products: [],
      invenctory_id: this.$route.params.id as string || '0',
      selecionados: [] as number[],
      inventoryService: new InvenctoryService(),
      productService: new ProductService()
    }
  },

  methods: {
    atualizar() {
      const invenctory_id = parseInt(this.invenctory_id);

      const listName = this.listName;
      const selecionados = this.selecionados;

      this.inventoryService.update(invenctory_id, {
        name: listName,
        products: selecionados
      }).then(() => this.$router.replace('/'));
    }
  },

  created() {
    const invenctory_id = parseInt(this.invenctory_id);

    this.inventoryService
        .get(invenctory_id)
        .then(invenctory => this.listName = invenctory.data.title)

    this.inventoryService.details(invenctory_id)
        .then(invenctory_products => {

          this.invenctory_products = invenctory_products.data;

          this.invenctory_products.forEach((product_inventory: ProductInventory) => {
            this.selecionados.push(parseInt(product_inventory.product_id));
          }, this);
        });

    this.productService
        .lista()
        .then(product_list => this.product_list = product_list.data);
  },
});
</script>

<style scoped>

.centralizado {
    text-align: center;
}

</style>
