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
                        estilo="btn-primary"
                        icone="bi bi-eye"
                        rotulo="visualizar"
                        link="list"
                        :id="invenctory.id"
                        :invenctory="invenctory"
                    />

                    <Botao
                        tipo="button"
                        @metodoBotao="atualizar($event, invenctory)"
                        estilo="btn-warning"
                        icone="bi bi-pencil-square"
                        rotulo="atualizar"
                        link="edit"
                        :id="invenctory.id"
                        :invenctory="invenctory"
                    />

                    <Botao
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

<script>

import Botao from "../shared/botao/Botao";
import InvenctoryService from "../../domain/InvenctoryService";

export default {
    props: {
        recarregar: Boolean
    },
    components: {
        Botao
    },

    data() {
        return {
            titulo: "Marcket Lists",
            invenctorys: [],
            filtro: ''
        }
    },

    computed: {
        invenctorysComFiltro() {
            if (this.filtro) {
                let exp = new RegExp(this.filtro.trim(), 'i')

                return this.invenctorys.filter(invenctory => exp.test(invenctory.titulo));
            } else {
                return this.invenctorys;
            }
        }
    },
    methods: {
        loadListas() {
            this.service
                .lista()
                .then(invenctorys => this.invenctorys = invenctorys.data);
        },

        deletar(dados, invenctory) {
            this.service.delete(invenctory.id).then(() => {
                this.invenctorys.splice(
                    this.invenctorys.indexOf(invenctory),
                    1
                );
            })
        }
    },

    created() {
        this.service = new InvenctoryService(this.$resource)

        this.loadListas();
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
