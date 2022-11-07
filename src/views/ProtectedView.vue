<template>
    <div>
        <h1>Greetings {{username}}</h1>
        <button @click="logout">Logout</button>
        <router-link to="/invoice">Invoice</router-link>
    </div>
</template>

<script>
export default {
    data(){
        return {
            username: window.user
        }
    },
    methods: {
        logout(){
            window.user = null;
            this.$router.push({name: 'login'})
        }
    }
}
</script>