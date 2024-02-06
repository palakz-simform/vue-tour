// import Vue from 'vue'
import Vue3Tour from 'vue3-tour'
import 'vue3-tour/dist/vue3-tour.css'

export default defineNuxtPlugin(({ vueApp }) => {
    vueApp.use(Vue3Tour)
})

// import Vue from 'vue'
// import VueTour from 'vue-tour'
// require('vue-tour/dist/vue-tour.css')
// Vue.use(VueTour)