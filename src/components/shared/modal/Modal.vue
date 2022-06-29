<template>

  <div class="modal modal-dialog modal-xl" :id="'modal_' + modal_id" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ modal_title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
<!--          <div class="accordion">-->
<!--            <div class="accordion-item" v-for="product of this.product_history">-->
<!--              <h2 class="accordion-header" id="headingOne">-->
<!--                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">-->
<!--                  {{ product.data }} - {{ toMonney(product.price) }}-->
<!--                </button>-->
<!--              </h2>-->
<!--              <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">-->
<!--                <div class="accordion-body">-->
<!--                  {{ product.description }}-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  props: {
    modal_id: Number,
    modal_title: String,
  },
  methods: {
    metodoBotao() {
      if (this.link) {
        this.$router.push({
          name: this.link,
          params: {
            id: this.id,
            invenctory: this.invenctory
          }
        })
      } else {
        this.$emit('metodoBotao', this.invenctory);
      }
    },
  },
  computed: {

  }
}
</script>

<style scoped>

</style>
