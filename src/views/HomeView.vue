<template>
<div class="home">
  <h1>All Destinations</h1>

  <button @click="addDynamicRoute">Add Dynamic Route</button>
  <button @click="deleteDynamicRoute">Delete Dynamic Route</button>
  <router-link to="/dynamic">Visit Dynamic Route</router-link>
  
  <div class="destinations">
    <router-link v-for="destination in destinations" 
        :to="{
            name: 'destination.show',
            params: {
                id: destination.id,
                slug: destination.slug
            }
        }" 
        :key="destination.id"
    >
      <h2>{{destination.name}}</h2>
      <img :src="`/images/${destination.image}`" :alt="destination.name">
    </router-link>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import sourceData from '@/data.json'

export default {
  data(){
    return {
      destinations: sourceData.destinations
    }
  },
  methods: {
    addDynamicRoute(){
      this.$router.addRoute({
        name: 'dynamic',
        path: '/dynamic',
        component: () => import("@/views/LoginView.vue")
      })
    },
    deleteDynamicRoute(){
      this.$router.removeRoute('dynamic');
    },
  }
};
</script>
