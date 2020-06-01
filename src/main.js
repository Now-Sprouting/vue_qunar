import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 移动端解决点击延迟
import fastClick from 'fastclick'
// 移动端样式初始化
import './assets/styles/reset.css'
// 2px边框问题解决方案
import './assets/styles/border.css'
// 引入字体如图标
import './assets/font_1853796_x5pw6m53vu/iconfont.css'
// 引入轮播图依赖
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
