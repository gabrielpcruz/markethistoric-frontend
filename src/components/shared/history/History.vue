<template>

    <b-modal :title="product_name">
        <div class="d-flex justify-content-end mb-3">
            <div class="input-group">
                <input v-model="historyDescription" class="form-control" type="text" placeholder="description">
                <input v-model="historyPrice" class="form-control" type="number" placeholder="R$ 99,99">
                <button @click="add" class="btn btn-primary">
                    <i class="bi bi-plus"></i>
                </button>
            </div>
        </div>
        <b-accordion>
            <b-accordion-item :title="product.data + ' - ' + this.toMonney(product.price)" v-for="(product, index) of this.product_history" :key="index">

              {{ product.description }}
            </b-accordion-item>
        </b-accordion>
    </b-modal>
</template>

<script>
import { defineComponent } from 'vue';

import ProductService from "../../../domain/ProductService";
import { BModal } from "bootstrap-vue-3";

export default defineComponent({
  name: 'HistoryComponent',
  components: {
    BModal
  },
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
      productService: new ProductService(),
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
      if (!this.historyPrice) {
        this.$swal('Erro ao adicionar histórico!', "Por favor, informe ao menos o valor.", 'error');

        return false;
      }

      const description = this.historyDescription || 'Sem descrição';
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

  created() {
    this.loadHistory(this.product_id);
  }
})

</script>

<style scoped>

</style>
