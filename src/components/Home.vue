<template>
  <table class="table table-striped">
    <thead>
    <tr>
      <th class="text-start">Nome</th>
      <th class="text-end">
        <BotaoComponent
            tipo="button"
            estilo="btn-success"
            icone="bi bi-plus"
            rotulo="a"
            link="invenctory_add"
        />
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(invenctory, index) of invenctorysComFiltro" :key="index">
      <td class="text-start">{{ invenctory.title }}</td>
      <td class="text-end">
        <BotaoComponent
            tipo="button"
            estilo="btn-primary"
            icone="bi bi-eye"
            rotulo="visualizar"
            link="invenctory_list"
            :id="invenctory.id"
            :invenctory="invenctory"
        />

        <BotaoComponent
            tipo="button"
            @metodoBotao="atualizar($event, invenctory)"
            estilo="btn-warning"
            icone="bi bi-pencil-square"
            rotulo="atualizar"
            link="invenctory_edit"
            :id="invenctory.id"
            :invenctory="invenctory"
        />

        <BotaoComponent
            tipo="button"
            @metodoBotao="deletar($event, invenctory)"
            estilo="btn-danger"
            icone="bi bi-trash"
            rotulo="deletar"
            :id="invenctory.id"
            :invenctory="invenctory"
        />
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import BotaoComponent from "./shared/botao/Botao.vue";
import InvenctoryService from "@/domain/InvenctoryService";
import Invenctory from '@/model/invenctory/InvectoryInterface';

export default defineComponent({
  name: 'HomeComponent',
  props: {
    recarregar: Boolean
  },
  components: {
    BotaoComponent
  },

  data() {
    return {
      titulo: "Marcket Lists",
      invenctorys: [] as Invenctory[],
      filtro: '',
      inventoryService: new InvenctoryService(),
    }
  },

  computed: {
    invenctorysComFiltro() {
      return this.invenctorys;
    }
  },
  methods: {
    loadListas() {
      this.inventoryService
          .lista()
          .then(invenctorys => this.invenctorys = invenctorys.data);
    },

    deletar(dados: Event, invenctory: Invenctory) {
      this.inventoryService.delete(invenctory.id).then(() => {
        this.invenctorys.splice(
            this.invenctorys.indexOf(invenctory),
            1
        );
      })
    }
  },

  created() {
    this.loadListas();
  }
});

</script>

<style>

</style>
