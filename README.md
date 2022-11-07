# vue-router

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 幾個重點
### active router
設置 linkActiveClass

### router-link  to 用 name 的話，/:id/:slug 用 params 放入
像是這樣
```
 <router-link v-for="destination in destiantions" 
    :key="destination.id"
    :to="{
        name: 'destination.show',
        params: {
            
        }
    }" 
>
    {{destination.name}}
</router-link>
```
### 頁面取得 route 參數
```
this.$route.params.id
this.$route.query
this.$route.path
```

### router-view 要加 :key