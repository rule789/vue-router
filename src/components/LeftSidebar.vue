<template>
    <ul>
        <li><router-link :to="{name: 'protected'}">Dashboard</router-link></li>
        <li><router-link :to="{name: 'invoice'}">Invoice</router-link></li>
    </ul>
</template>

<style scoped>
ul {
    background: white;
    padding: 10px;
    list-style: none;
    margin-left: 20px;
}

li {
    margin: 10px;
}
</style>