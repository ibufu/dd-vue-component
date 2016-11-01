<template>
    <div style="padding: 20px;">
        <div style="width: 200px;">
            <dd-select v-model="value">
                <dd-option v-for="option in options" :value="option.value" :label="option.label">
                </dd-option>
            </dd-select>
        </div>
        <p>当前选中的value<span v-text="value"></span></p>
        <div style="width: 200px;">
            <dd-select disabled>
                <dd-option v-for="option in options2" :value="option.value" :label="option.label">
                </dd-option>
            </dd-select>
        </div>
        <br>
        <br>
        <div style="width: 200px;">
            <dd-select placeholder="请选择性别">
                <dd-option v-for="option in options2" :value="option.value" :label="option.label">
                </dd-option>
            </dd-select>
        </div>
        <br>
        <br>
        <div style="width: 200px;">
            <dd-select multiple v-model="multipleValue">
                <dd-option v-for="option in options" :value="option.value" :label="option.label">
                </dd-option>
            </dd-select>
        </div>
        <button @click="clear" class="dd-btn">清空</button>
        <p>当前选中的value<span v-text="multipleValue"></span></p>
        <h3>单选联动</h3>
        <div style="width: 100px;">
            <dd-select v-model="province">
                <dd-option v-for="option in provinces" :value="option.value" :label="option.label">
                </dd-option>
            </dd-select>
        </div>
        <div style="width: 100px;">
            <dd-select v-model="city">
                <dd-option v-for="option in currentCities" :value="option.value" :label="option.label" :key="option.label+option.value">
                </dd-option>
            </dd-select>
        </div>
        <h3>多选联动</h3>
        <div style="width: 100px;">
            <dd-select v-model="province2">
                <dd-option v-for="option in provinces" :value="option.value" :label="option.label">
                </dd-option>
            </dd-select>
        </div>
        <div style="width: 100px;">
            <dd-select v-model="onCities" multiple>
                <dd-option v-for="option in currentCities2" :value="option.value" :label="option.label" :key="option.label+option.value">
                </dd-option>
            </dd-select>
        </div>
    </div>
</template>
<script>
    import { DdDropdown, DdDropdownItem, DdPagination, DdDatepicker, DdSelect, DdOption } from 'dd-vue-component';

    export default {
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
                value: '0',
                multipleValue: ['0', '1', '2', '3'],
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
            clear() {
                this.multipleValue = [];
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
            DdDropdown,
            DdDropdownItem,
            DdPagination,
            DdDatepicker,
            DdSelect,
            DdOption
        }
    }
</script>