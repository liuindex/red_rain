<template>
  <div class="home">
    
    <RedRain></RedRain>
  </div>
</template>

<script>
import RedRain from '../components/RedRain.vue'
export default {
  name: 'home',
  components: {
    RedRain
  }
}
</script>
<style lang="scss" scoped>
  .home{
    width: 100%;
    height: 100%;
    background: rgba($color: #000000, $alpha: 0.7);
    background-image:url(../assets/image/meteor.gif) 
  }
</style>