import Vue from 'vue'
import App from './App'
import router from './router'
import {  Input,
          Col,
          Row,
          Card,
          Select} from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import underscore from 'vue-underscore';

Vue.use(Input);
Vue.use(Col);
Vue.use(Row);
Vue.use(Card);
Vue.use(Select);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
