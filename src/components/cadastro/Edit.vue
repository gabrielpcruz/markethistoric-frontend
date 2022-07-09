<template>
    <div>
        <h1 class="centralizado" v-if="listName">
            {{ listName }}
        </h1>

        <label for="nomelista">Nome</label>
        <div class="input-group">
            <input class="form-control" v-model="listName" id="nomelista" type="text" placeholder="Nome da Lista">
        </div>
        <hr>
        <table class="table table-striped table-hover">
            <thead>
            <tr>
                <th>Produto</th>
                <th class="text-end">Selecione o produto</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product of product_list">
                <td>{{ product.name }}</td>
                <td class="text-end">
                    <input
                        class="form-check-input"
                        type="checkbox"
                        v-bind:value="product.id"
                        name="list[]"
                        v-model="selecionados"
                    >
                </td>
            </tr>
            </tbody>
        </table>

        <div class="d-grid gap-2 mb-5">
            <button @click="$router.push('/')" type="button" class="btn btn-warning">Cancelar</button>
            <button @click="atualizar" type="button" class="btn btn-primary">Salvar</button>
        </div>
    </div>
</template>

<script>
import InvenctoryService from "../../domain/InvenctoryService";
import ProductService from "../../domain/ProductService";

export default {
    props: {
        id: Number,

        product_inventory: {
            product_entity_id: Number
        }
    },
    name: "List",

    data() {
        return {
            listName: "",
            product_list: [],
            invenctory_products: [],
            selecionados: []
        }
    },

    methods: {
        atualizar() {
            const listName = this.listName;
            const selecionados = this.selecionados;

            this.inventoryService.update(this.id, {
                name: listName,
                products: selecionados
            }).then(() => this.$router.replace('/'));
        }
    },

    created() {
        this.inventoryService = new InvenctoryService(this.$resource);
        this.productService = new ProductService(this.$resource);


        this.inventoryService.get(this.id)
            .then(invenctory => this.listName = invenctory.data.title)

        this.inventoryService.details(this.id)
            .then(invenctory_products => {
                this.invenctory_products = invenctory_products.data;

                this.invenctory_products.forEach((product_inventory) => {
                    this.selecionados.push(parseInt(product_inventory.product_id));
                }, this);

            });

        this.productService
            .lista()
            .then(product_list => this.product_list = product_list.data);
    },
}
</script>

<style scoped>

.centralizado {
    text-align: center;
}

</style>
