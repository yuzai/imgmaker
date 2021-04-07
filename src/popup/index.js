import Vue from 'vue'
import { Button, Row, Col, Input, InputNumber, Radio, message } from 'ant-design-vue'
import 'bulma-fluent/bulma.sass'

import App from './App.vue'

Vue.use(Button)
Vue.use(Row)
Vue.use(Col)
Vue.use(Input)
Vue.use(InputNumber)
Vue.use(Radio)

Vue.prototype.$message = message

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App),
})
