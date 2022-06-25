<template>
  <div>
    <h1 class="titulo">{{ titulo }}</h1>

    <table class="table table-striped">
      <thead>
        <tr>
          <th>Nome</th>
          <th class="text-end">
            <Botao
              tipo="button"
              @botaoAtivado="remove($event, foto)"
              estilo="btn-success"
              icone="bi bi-plus"
              rotulo="a"
              link="cadastrarLista"
            />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="invenctory of invenctorysComFiltro">
          <td>{{ invenctory.title }}</td>
          <td class="text-end">
            <Botao
              tipo="button"
              @botaoAtivado="remove($event, foto)"
              estilo="btn-primary"
              icone="bi bi-eye"
              rotulo="a"
              link="list"
              :id="invenctory.id"
              :invenctory="invenctory"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import Botao from "../shared/botao/Botao";

export default {
  components: {
    Botao
  },

  data() {
    return {
      titulo: "Marcket history",
      invenctorys: [],
      filtro: ''
    }
  },

  computed: {

    invenctorysComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i')

        return this.invenctorys.filter( invenctory => exp.test(invenctory.titulo));
      } else {
        return this.invenctorys;
      }
    }
  },

  methods: {

  },

  created() {
    let promisse = this.$http.get("http://localhost:8081/v1/invenctory");

    promisse
      .then(res => res.json())
      .then(invenctorys => this.invenctorys = invenctorys);
  }
}
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
