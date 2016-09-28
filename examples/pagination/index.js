/**
 * Created by zhaoyongsheng on 16/9/27.
 */
import Vue from 'vue';
import Pagination from '../../src/components/pagination/';

new Vue({
    el: '.app',
    components: {
        Pagination
    },
    
    methods: {
        handleChange(page) {
            console.log(page);
        }
    }
});
