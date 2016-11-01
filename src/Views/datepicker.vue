<template>
    <div style="padding: 20px">
        <div>
            <dd-datepicker placeholder="请输入日期" />
        </div>
        <br>
        <br>
        <h4>默认时间2016-01-01</h4>
        <div>
            <dd-datepicker placeholder="请输入日期" v-model="value" />
        </div>
        <div><span>当前选中的时间：<span v-text="value"></span></span> <button class="dd-btn dd-btn-primary" @click="changeValue">改变时间</button><button class="dd-btn dd-btn-primary" @click="changeValueAgain">改变时间</div>
        <br>
        <br>
        <div>
            <dd-datepicker placeholder="请输入日期" disabled />
        </div>
        <br>
        <br>
        <div>
            <dd-datepicker placeholder="请输入日期" :disabled-date="disabledDate"/>
        </div>
    </div>
</template>
<script>
    import { DdDropdown, DdDropdownItem, DdPagination, DdDatepicker, DdSelect, DdOption } from 'dd-vue-component';

    export default {
        data() {
            return {
                value: new Date('2016-01-01')
            }
        },
        methods: {
            changeValue() {
                this.value = '2016-01-02';
            },
            changeValueAgain() {
                this.value = new Date('2016-01-03');
            },
            disabledDate(date) {
                return date && date.valueOf() > Date.now();
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