import Vue from 'vue';
import DdSelect from '../../src/components/select';
import DdOption from '../../src/components/select/option.vue';
new Vue ({
    el: '.app',
    data() {
        return {
            options: [{
                value: '选项1',
                label: '黄金糕'
            },
            {
                value: '选项2',
                label: '双皮奶'
            },
            {
                value: '选项3',
                label: '蚵仔煎'
            },
            {
                value: '选项4',
                label: '龙须面'
            },
            {
                value: '选项5',
                label: '北京烤鸭'
            }],
             options2: [{
                value: '选项1',
                label: '男'
            },
            {
                value: '选项2',
                label: '女'
            }],
            value: '选项1'
        }
    },
    methods: {

    },
    components: {
        DdSelect,
        DdOption
    }
})