<template>

    <b-modal :id="'modal_' + product_id" :title="product_name">
        <div class="d-flex justify-content-end mb-3">
            <div class="input-group">
                <input v-model="historyDescription" class="form-control" type="text" placeholder="description">
                <input v-model="historyPrice" class="form-control" type="number" placeholder="R$ 99,99">
                <button @click="add" class="btn btn-primary">
                    <i class="bi bi-plus"></i>
                </button>
            </div>
        </div>
        <div class="accordion" id="accordion">
            <div class="accordion-item" v-for="(product, index) of this.product_history" :key="index">
                <h2 class="accordion-header" id="headingOne">
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        :data-bs-target="'#collapse_' + product.id"
                        aria-expanded="false"
                        :aria-controls="'#collapse_' + product.id"
                    >
                        {{ product.data }} - {{ toMonney(product.price) }}
                    </button>
                </h2>
                <div :id="'collapse_' + product.id" class="accordion-collapse collapse" aria-labelledby="headingOne"
                     data-bs-parent="#accordion">
                    <div class="accordion-body">
                        {{ product.description }}
                    </div>
                </div>
            </div>
        </div>
    </b-modal>
</template>

<script>
import { defineComponent } from 'vue';

import ProductService from "../../../domain/ProductService";

export default defineComponent({
  name: 'HistoryComponent',
  props: {
    product_id: {
      type: Number,
      required: true
    },

    product_name: String,

    product: {
      price: Number,
      description: String,
      date: Date,
    }
  },
  data() {
    return {
      product_history: [],
      historyDescription: '',
      historyPrice: '',
    }
  },
  methods: {
    toMonney(valor) {
      return (new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      })).format(valor);
    },

    loadHistory(id) {
      this.productService.history(id)
          .then(product_history => {
            this.product_history = product_history.data;
          })
    },
    add() {
      const description = this.historyDescription;
      const price = this.historyPrice;

      const history = {
        description,
        price,
      };

      this.productService.addHistory(this.product_id, history)
          .then(() => {
            this.product_history.unshift({
              product_id: this.product_id,
              price: history.price,
              description: history.description,
              data: new Date().toLocaleDateString('pt-BR', {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
              }),
              product_name: this.product_name
            });

            this.historyPrice = '';
            this.historyDescription = '';
          })
    }
  },
  computed: {
    estiloDoBotao() {
      if (!this.estilo) {
        return 'btn-primary';
      }

      return this.estilo;
    },
  },

  created() {
    this.productService = new ProductService(this.$resource);
    this.loadHistory(this.product_id);
  }
})

</script>

<style scoped>

</style>
