<template>
    <div class="corpo mt-5">
        <router-view></router-view>
    </div>
</template>

<script>

import routes from "./routes";

export default {
    data() {
        return {
            routes
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}

.corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
}
</style>
