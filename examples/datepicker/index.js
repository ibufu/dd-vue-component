import Vue from 'vue';
import DatePicker from '../../src/components/datepicker';
new Vue ({
    el: '.app',
    data() {
        return {
            value: new Date('2016-01-01'),
            value2: undefined
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
        },
        reset() {
            this.value2 = undefined;
        },
        handleDateChange(val) {
            console.log(val);
        }
    },
    components: {
        DatePicker
    }
})