'use strict'
const Vue = require('vue')

import Greeter from './components/Greeter.vue'

new Vue({
  el: '#app',

  components: { Greeter },

  ready () {
    console.log('Vue and Vueify all set to go! Hell yeah!')
  }
})

