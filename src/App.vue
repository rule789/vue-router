<template>
  <TheNavigation />
  <div class="container">
    <!-- <router-view :key="$route.path"></router-view> -->

    <router-view v-slot="{Component}">
      <transition name="fade" mode="out-in">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
import TheNavigation from "@/components/TheNavigation.vue";

export default {
  components: { TheNavigation },
};
</script>


<style lang="css">
  .fade-enter-active, .fade-leave-active{
    transition: opacity 0.3s;
  }

  .fade-enter-from, .fade-leave-to{
    opacity: 0;
  }

  .left-sidebar {
    width: 20%;
  }

  .main-view {
    width: 100%
  }
  
</style>