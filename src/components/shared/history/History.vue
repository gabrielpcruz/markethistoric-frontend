<template>

  <b-modal :id="'modal_' + product_id" :title="product_name">
    <div class="accordion" id="accordion">


      <div class="accordion-item" v-for="product of this.product_history">
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
import axios from "axios";

export default {
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
    }
  },
  methods: {
    toMonney(valor) {
      // Create our number formatter.
      let formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
      });

      return formatter.format(valor); /* $2,500.00 */
    },
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
    axios.get(`http://localhost:8081/v1/product/${this.product_id}/history`)
      .then(product_history => {
        this.product_history = product_history.data;
        console.log(this.product_history)
      });
  }
}
</script>

<style scoped>

</style>
