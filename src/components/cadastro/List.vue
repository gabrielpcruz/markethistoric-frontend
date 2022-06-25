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
            {{ info.checked }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    id: Number,
    invenctory: Object
  },
  name: "List",

  data() {
    return {
      invenctory_product: [],
    }
  },

  created() {
    let productsPromisse = this.$http.get(`http://localhost:8081/v1/invenctory/${this.id}/list`);

    productsPromisse
      .then(res => res.json())
      .then(invenctory_product => this.invenctory_product = invenctory_product);
  }
}
</script>

<style scoped>
.centralizado {
  text-align: center;
}
</style>
