import Vue from 'vue';
import DdSelect from '../../src/components/select';
import DdOption from '../../src/components/select/option.vue';
new Vue ({
    el: '.app',
    data() {
        return {
            options: [{
                value: '0',
                label: '所有房型'
            },
            {
                value: '1',
                label: '房间A'
            },
            {
                value: '2',
                label: '房间B'
            },
            {
                value: '3',
                label: '房间B'
            }
            ],
             options2: [{
                value: 'male',
                label: '男'
            },
            {
                value: 'female',
                label: '女'
            }],
            value: null,
            multipleValue: ['0']
        }
    },
    methods: {

    },
    components: {
        DdSelect,
        DdOption
    }
})