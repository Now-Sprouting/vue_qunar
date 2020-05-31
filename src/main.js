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

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
