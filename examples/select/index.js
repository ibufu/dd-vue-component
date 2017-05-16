import Vue from 'vue';
import DdSelect from '../../src/components/select';
import DdOption from '../../src/components/select/option.vue';
import DdGroupOption from '../../src/components/select/option-group.vue';
new Vue ({
    el: '.app',
    data() {
        return {
            car: undefined,
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
                label: '房间C'
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
            options3: [{
                label: '私家车',
                options: [{
                    label: '大众',
                    value: 'dazhong'
                },
                {
                    label: '保时捷',
                    value: 'baoshijie'
                },
                {
                    label: '兰博基尼',
                    value: 'lanbojini'
                }]
            },
            {
                label: '公用车',
                options: [{
                    label: '公交',
                    value: 'bus'
                },
                {
                    label: '出租车',
                    value: 'taxi'
                },
                {
                    label: '优步',
                    value: 'uber'
                }]
            }],
            value: '0',
            multipleValue: ['0', '1', '2', '3'],
            provinces: [{label:'浙江省', value: '0'}, {label: '河南省', value: '1'}],
            cities: [[{label:'杭州', value: '0'}, {label: '温州', value: '1'}], [{label:'郑州', value: '0'}, {label: '开封', value: '1'}]],
            province: '0',
            city: '0',
            onCities: ['0'],
            province2: '0',
            sex: undefined
        }
    },
    methods: {
        clear() {
            this.multipleValue = [];
        },
        henan() {
            this.province = '1';
        }
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
        DdOption,
        DdGroupOption
    }
})