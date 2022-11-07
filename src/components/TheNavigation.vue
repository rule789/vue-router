<template>
    <div id="nav">
        <div>
            <router-link to="/">Home</router-link>
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
                {{destination.name}}
            </router-link>
        </div>
    </div>
</template>

<style lang="css">
    #nav .path-active {
        font-weight: bold;
    }
</style>

<script>
import sourceData from '@/data.json'
export default {
    data(){
        return {
            destinations: sourceData.destinations
        }
    }
};
</script>