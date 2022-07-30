<template>
    <div class="p-1">

      <h1 class="form-label centralizado" >{{ productName || 'Digite o nome do Produto...' }}</h1>
      <div class="input-group">
          <input class="form-control" v-model="productName" id="productName" type="text" placeholder="Nome do produto">
        </div>
        <hr>
        <div class="d-grid gap-2 mb-5">
            <button @click="$router.push('/')" type="button" class="btn btn-warning">Cancelar</button>
            <button @click="salvar" type="button" class="btn btn-primary">Salvar</button>
        </div>
    </div>
</template>

<script>
import ProductService from "../../domain/ProductService";
import router from "@/router";

export default {
    props: {
        id: Number,
    },
    name: "ProductAdd",

    data() {
        return {
            productName: "",
            productService: new ProductService(),
        }
    },

    methods: {
        salvar() {
            this.productService.add({name: this.productName}).then(() => router.push('/'));
        },
    },
}
</script>

<style scoped>
.centralizado {
    text-align: center;
}
</style>
