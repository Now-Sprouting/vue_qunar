<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <div>1</div>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="less" scoped>
</style>
