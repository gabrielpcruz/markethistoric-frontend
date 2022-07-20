<template>
    <div>
        <h1 class="titulo">{{ titulo }}</h1>

        <table class="table table-striped">
            <thead>
            <tr>
                <th>Nome</th>
                <th class="text-end">
                    <BotaoComponent
                        tipo="button"
                        estilo="btn-success"
                        icone="bi bi-plus"
                        rotulo="a"
                        link="cadastrarLista"
                    />
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(invenctory, index) of invenctorysComFiltro" :key="index">
                <td>{{ invenctory.title }}</td>
                <td class="text-end">
                    <BotaoComponent
                        tipo="button"
                        estilo="btn-primary"
                        icone="bi bi-eye"
                        rotulo="visualizar"
                        link="list"
                        :id="invenctory.id"
                        :invenctory="invenctory"
                    />

                    <BotaoComponent
                        tipo="button"
                        @metodoBotao="atualizar($event, invenctory)"
                        estilo="btn-warning"
                        icone="bi bi-pencil-square"
                        rotulo="atualizar"
                        link="edit"
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
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import BotaoComponent from "../shared/botao/Botao.vue";
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

    deletar(dados: any, invenctory: Invenctory) {
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
* {
    margin: 0;
    padding: 0;
}

.titulo {
    text-align: center;
}

.lista-invenctorys {
    list-style: none;
}

.lista-invenctorys .lista-invenctory-item {
    display: inline-block;
}

.filtro {
    display: block;
    width: 100%;
}
</style>
