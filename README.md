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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

---

## 幾個重點
### active router 的 class
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

### 取得 route 參數  
in DestinationShow.vue

頁面
```
this.$route.params.id
this.$route.query
this.$route.path
```

router/index.js 
```
route.params
```

### router-view 要加 :key  
in APP.vue
才會監視

### 子路徑放 children
內容物一樣

### route 相關參數用 props 傳遞   
in ExperienceShow
在 router/index.js 設置 props 
頁面可直接取得

### 在每個 path 中可設置 beforeEnter

### 巢狀 route-view  
in DestinationShow
router-view 的 compomenet 再加 route-view
把頁面塞進去

### 程式 router 操作
回上一頁  `$router.back()`

### not found 
path: "/:pathMatch(.*)*",

傳到 not found 的參數
```
{
    name: 'NotFound',
    // 保留當前路徑並刪除第一個字符，以避免目標 ＵＲＬ以 `//` 開頭
    params: {pathMatch: to.path.split('/'.slice(1))},
    // 保留現有的查詢和 hash 值，如果有的話
    query: to.query,
    hash: to.hash
}
```

### 前後頁，按下後，滑到哪 scrollBehavior
在 router 設置
savedPosition // 跟原生網頁一樣表現


