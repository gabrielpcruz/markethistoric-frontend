<template>
  <div>

    <!-- Modal -->
    <div class="modal modal-dialog modal-xl" :id="'modal_' + product_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ product_name }}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="accordion">

              <div class="accordion-item" v-for="product of this.product_history">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    {{ product.data }} - {{ toMonney(product.price) }}
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    {{ product.description }}
                  </div>
                </div>
              </div>

            </div>

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
          </div>
        </div>
      </div>
    </div>

  </div>
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
