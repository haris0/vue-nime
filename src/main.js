import Vue from 'vue'
import App from './App'
import router from './router'
import {  Input,
          Col,
          Row,
          Card} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'

Vue.use(Input);
Vue.use(Col);
Vue.use(Row);
Vue.use(Card);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
