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
            value: '0',
            multipleValue: ['0'],
            provinces: [{label:'浙江省', value: '0'}, {label: '河南省', value: '1'}],
            cities: [[{label:'杭州', value: '0'}, {label: '温州', value: '1'}], [{label:'郑州', value: '0'}, {label: '开封', value: '1'}]],
            province: '0',
            currentCities: [],
            city: '0',
            onCities: ['0'],
            province2: '0'
        }
    },
    methods: {
        
    },
    computed: {
        currentCities() {
            return this.cities[this.province];
        },
        currentCities2() {
            return this.cities[this.province2];
        }
    },
    watch: {
        province() {
            this.city = '0';
        },

        province2() {
            this.onCities = ['0'];
            console.log();
        }
    },
    components: {
        DdSelect,
        DdOption
    }
})