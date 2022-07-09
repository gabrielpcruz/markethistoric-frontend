<template>
    <a
        @click="metodoBotao"
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
        link: String
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
        estiloDoBotao() {
            if (!this.estilo) {
                return 'btn-primary';
            }

            return this.estilo;
        },
    }
}
</script>

<style scoped>

</style>
