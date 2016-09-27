<template>
    <span class="dd-datepicker" v-clickoutside="hideCalendar">
        <span class="dd-datepicker-input">
            <input
                :placeholder="placeholder"
                :disabled="disabled"
                class="dd-input"
                type="text"
                @focus="handleFocus"
                v-model.lazy="dateStr" />
            <i @click="handleClickCalendarIcon" class="dd-datepicker-calendar-icon" :class="{disabled: disabled}"></i>
        </span>
        <calendar v-show="calendarVisible" v-on:selectDate="handleSelectDate" :default-value="value" />
    </span>
</template>
<style lang="sass">
    .dd-datepicker {
        position: relative;
        display: inline-block;
    }
    .dd-datepicker-input {
        position: relative;
    }
    .dd-datepicker-calendar-icon {
        background: url('images/calendar.png') center no-repeat;
        width: 14px;
        height: 14px;
        display: inline-block;
        position: absolute;
        right: 8px;
        top: 1px;
        cursor: pointer;
        &.disabled {
            cursor: not-allowed;
        }
    }
</style>
<script>
    import calendar from './calendar.vue';
    import Clickoutside from '../../utils/clickoutside'
    import { formatDate } from './utils';
    export default {
        name: 'DdDatePicker',

        props: {
            disabled: Boolean,
            defaultValue: [String, Date],
            placeholder: String,
            disabledDate: Function,
            value: {},
        },

        data() {
            return {
                calendarVisible: false,
                date: null,
                dateStr: null,
            }
        },

        watch: {
            date(newVal) {
                this.dateStr = formatDate(newVal);
                this.$emit('input', this.dateStr);
            }
        },

        computed: {

        },

        methods: {
            showCalendar() {
                this.calendarVisible = true;
            },

            hideCalendar() {
                this.calendarVisible = false;
            },
            handleFocus() {
                !this.calendarVisible && this.showCalendar();
                this.$emit('focus', this);
            },

            handleBlur() {
                this.$emit('blur', this);
            },

            handleSelectDate(date) {
                this.date = date;
                this.hideCalendar();
            },

            toggleCalendar() {
                if (this.calendarVisible) {
                    this.hideCalendar();
                } else {
                    this.showCalendar();
                }
            },

            handleClickCalendarIcon() {
                if (this.disabled) {
                    return
                }
                this.toggleCalendar();
            }
        },

        components: {
            calendar
        },

        directives: {
            Clickoutside
        }
    }
</script>