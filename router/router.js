import Vue  from "vue";
import VueRouter from "vue-router";
import DataVisual from './../pages/DataVisual.vue'
import OneMap from './../pages/OneMap.vue'


Vue.use(VueRouter)

export default new VueRouter ({
    routers: [
        {
            path: '/',
            component: DataVisual
        },
        {
            path:'/onemap',
            component: OneMap,
        },
    ],
    mode: 'history'
})