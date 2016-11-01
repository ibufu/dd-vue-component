/**
 * Created by lingchenxuan on 16-11-1.
 */
import Vue from 'vue';
import  Router from 'vue-router';
import datepicker from './Views/datepicker.vue';
import dropdown from './Views/dropdown.vue';
import pagination from './Views/pagination.vue';
import select from './Views/select.vue';


Vue.use(Router);

export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
    routes: [
        { path: '/datepicker', component: datepicker },
        { path: '/dropdown', component: dropdown },
        { path: '/pagination', component: pagination },
        { path: '/select', component: select }
    ]
})