<template>
    <span class="dd-datepicker" v-clickoutside="hideCalendar">
        <span class="dd-datepicker-input">
            <input
                :placeholder="placeholder"
                :disabled="disabled"
                class="dd-input"
                type="text"
                @focus="handleFocus"
                @keyup="handleKeyup"
                v-model="dateStr" />
            <i @click="handleClickCalendarIcon" class="dd-datepicker-calendar-icon" :class="{disabled: disabled}"></i>
        </span>
        <calendar v-show="calendarVisible" v-on:select="handleSelect" v-on:changeDate="handleChangeDate" :default-value="value" :disabled-date="disabledDate"/>
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
            placeholder: String,
            disabledDate: Function,
            value: {},
        },

        data() {
            return {
                calendarVisible: false,
                date: null,
                dateStr: null,
                changedByInput: false,
            }
        },

        watch: {
            date(newVal) {
                if (!this.changedByInput) {
                    this.dateStr = newVal ? formatDate(newVal) : '';
                }

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

            handleSelect() {
                this.hideCalendar();
            },

            handleChangeDate(date) {
                if (this.changedByInput) {
                    this.changedByInput = false;
                    return;
                }
                
                this.date = date;
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
            },

            handleKeyup() {
                if (/\d{4}-\d{2}-\d{2}/.test(this.dateStr)) {
                    const str = this.dateStr.split('-');
                    this.date = new Date(str[0], str[1] - 1, str[2]);
                }

                if (this.dateStr === '') {
                    this.date = null;
                }

                this.changedByInput = true;
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