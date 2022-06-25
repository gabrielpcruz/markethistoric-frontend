<template>
  <a
    @click="$router.push({
        name: 'list',
        params: {
          id: id,
          invenctory
        }
      })"
    class="btn"
    :class="estiloDoBotao"
  >
    <i :class="icone"></i>
  </a>
</template>

<script>
export default {
  props: {
    tipo: {
      type: String,
      required: true
    },

    rotulo: {
      type: String,
      required: true
    },

    confirmacao: Boolean,
    estilo: String,
    icone: String,
    id: Number,
    invenctory: Object,
  },
  methods: {
    // disparaAcao() {
    //   if (this.confirmacao) {
    //     if (confirm("Confirma operação?")) {
    //       this.$emit('botaoAtivado', "Um mais um é igual a dois");
    //     }
    //
    //     return;
    //   }
    //
    //   this.$emit('botaoAtivado', "Um mais um é igual a dois");
    // }
  },
  computed: {
    estiloDoBotao() {
      if (!this.estilo) {
        return 'btn-primary';
      }

      return this.estilo;
    },

    iconeDoBotao() {
      if (!this.icone) {
        return 'btn-primary';
      }

      return this.icone;
    }
  }
}
</script>

<style scoped>

</style>
