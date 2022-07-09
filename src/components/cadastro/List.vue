<template>
    <div>
        <div id="modal"></div>
        <h1 class="centralizado" v-if="invenctory">
            {{ invenctory.title }}
        </h1>

        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th class="text-end">No carrinho</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="getId()" v-for="info of invenctory_product">
                    <td>
                        <span @click="$bvModal.show('modal_' + info.product_id)">
                            {{ info.product_name }}

                            <History
                                :id="'button_' + info.product_id"
                                :product_name="info.product_name"
                                :product_id="parseInt(info.product_id)">
                            </History>
                        </span>
                    </td>
                    <td class="text-end">
                        <button @click="addRemoveCart(info)" class="btn" :class="noCarrinhoBotao(info.checked)">
                            <i class="bi" :class="noCarrinho(info.checked)"></i>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import History from "../shared/history/History";
import InvenctoryService from "../../domain/InvenctoryService";
import CartService from "../../domain/CartService";
import { v4 as uuidv4 } from 'uuid';

export default {
    components: {
        History,
    },
    props: {
        id: Number,
        invenctory: Object,

        info: {
            product_name: String
        }
    },
    name: "List",

    data() {
        return {
            invenctory_product: [],
        }
    },

    methods: {
        noCarrinho(isOnCart) {
            return parseInt(isOnCart) ? 'bi-cart-check-fill' : 'bi-cart';
        },

        noCarrinhoBotao(isOnCart) {
            return parseInt(isOnCart) ? 'btn-secondary' : 'btn-light';
        },

        addRemoveCart(inventory_product) {
            const index = this.invenctory_product.indexOf(inventory_product);
            const isOnCart = this.invenctory_product[index].checked;


            if (parseInt(isOnCart) !== 1) {
                this.cartService.put(inventory_product.id)
                    .then(() => this.list())
            } else {
                this.cartService.remove(inventory_product.id)
                    .then(() => this.list())
            }

            this.$router.replace('/list', {
                id: this.id,
                invenctory: this.invenctory
            })
        },

        getId() {
            return uuidv4();
        },

        list() {
            this.inventoryService.details(this.id)
                .then(invenctory_product => this.invenctory_product = invenctory_product.data);
        },
    },

    created() {
        this.inventoryService = new InvenctoryService(this.$resource);
        this.cartService = new CartService(this.$resource);

        this.list()
    }
}
</script>

<style scoped>
.centralizado {
    text-align: center;
}
</style>
