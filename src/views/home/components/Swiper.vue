<template>
  <div class="wiper">
    <template>
      <swiper :options="swiperOptions">
        <swiper-slide v-for="item of swiperList" :key="item.id">
          <img class="swiper-image" :src="item.imgUrl" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </template>
  </div>
</template>
 

<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: 1,
          imgUrl: 'https://dimg04.c-ctrip.com/images/zg0a1g000001hinte2FB0.jpg'
        },
        { id: 2, imgUrl: 'https://dimg04.c-ctrip.com/images/zg0c1g000001hm34eE4BC.jpg' }
      ]
    }
  }
}
</script>


<style  scoped>
.swiper-image {
  width: 100%;
}
.wiper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.23%;
  background-color: #eee;
}
</style>