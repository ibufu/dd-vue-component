/**
 * Created by zhaoyongsheng on 16/9/29.
 */
import Vue from 'vue';
import DdDropdown from '../../src/components/dropdown';
import DdItem from '../../src/components/dropdown/item.vue';

new Vue({
    el: '.app',
    components: {
        DdDropdown,
        DdItem
    },
    methods: {
        showText() {
            console.log('PDF');
        }
    }
});