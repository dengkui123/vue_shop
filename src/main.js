import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './assets/css/global.css'
import './assets/font/iconfont.css'


Vue.use(elementUI)
Vue.prototype.$message = elementUI.Message;
Vue.prototype.$success = elementUI.Message.success;
Vue.prototype.$error = elementUI.Message.error;
Vue.prototype.$warning = elementUI.Message.warning;
Vue.prototype.$info = elementUI.Message.info;
Vue.config.productionTip = false
Vue.prototype.$confirm = elementUI.MessageBox.confirm;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
