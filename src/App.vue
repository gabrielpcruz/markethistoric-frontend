<template>
  <main>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" v-for="(route, index) of routeList" :key="index">
              <router-link
                  :class="'nav-link'"
                  :to="route.path"
              >
                {{ route.meta.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import router from "@/router";

export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      router
    }
  },
  computed: {
    routeList() {
      let routes = [] as object[];

      router.getRoutes().forEach(function (route, index) {
        if (route.meta.isMenu) {
          routes.push(route);
        }
      });

      return routes;
    }
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
