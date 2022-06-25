<template>
  <div>
    <h1 class="centralizado" v-if="listName">
      {{ listName }}
    </h1>

    <label for="nomelista">Nome</label>
    <div class="input-group">
      <input class="form-control" v-model="listName" id="nomelista" type="text" placeholder="Nome da Lista">
    </div>
    <hr>
    <table class="table table-striped">
      <thead>
      <tr>
        <th>Produto</th>
        <th class="text-end">Selecione o produto</th>
      </tr>
      </thead>
      <tbody>
        <tr v-for="product of product_list">
          <td>{{ product.name }}</td>
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
      <button type="button" class="btn btn-warning">Cancelar</button>
      <button @click="salvar" type="button" class="btn btn-primary">Salvar</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: {
    id: Number,
  },
  name: "List",

  data() {
    return {
      listName: "",
      product_list: [],
      selecionados: []
    }
  },

  methods: {
    salvar() {
      const listName = this.listName;
      const selecionados = this.selecionados;

      const listObject = {
        name: listName,
        products: selecionados
      }

      console.log(listObject)

      axios.post('http://localhost:8081/v1/invenctory', listObject)
        .then(invenctoryCreated => console.log(invenctoryCreated));

      this.$router.replace('/')
    }
  },

  created() {
    let productsPromisse = this.$http.get(`http://localhost:8081/v1/product`);

    productsPromisse
      .then(res => res.json())
      .then(product_list => this.product_list = product_list);
  },
}
</script>

<style scoped>
.centralizado {
  text-align: center;
}
</style>
