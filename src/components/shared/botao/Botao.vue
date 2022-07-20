<template>
    <a
        @click="metodoBotao"
        class="btn ms-1"
        :class="estiloDoBotao"
    >
        <i :class="icone"></i>
    </a>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue';
import Invectory from "@/model/invenctory/InvectoryInterface";

export default defineComponent({
  name: 'BotaoComponent',
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

    invenctory: {
      type: Object as PropType<Invectory>,
      required: false
    },

    link: String
  },
  methods: {
    metodoBotao() {
      if (this.link) {

        this.$router.push({
          name: this.link,
          params: {
            id: this.id,
            title: this.invenctory?.title
          }
        })
      } else {
        this.$emit('metodoBotao', this.invenctory);
      }
    },
  },
  computed: {
    estiloDoBotao() {
      if (!this.estilo) {
        return 'btn-primary';
      }

      return this.estilo;
    },
  }
});

</script>

<style scoped>

</style>
