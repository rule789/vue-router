<template>
    <div id="nav">
        <div>
            <AppLink to="/">Home</AppLink>
            <AppLink v-for="destination in destinations" 
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
            </AppLink>
            <AppLink to="/protected">Dashboard</AppLink>
            <AppLink to="https://google.com">Google</AppLink>
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
    components: {},
    data(){
        return {
            destinations: sourceData.destinations
        }
    }
};
</script>