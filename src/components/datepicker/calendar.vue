<template>
    <div class="dd-datepicker-calendar">
        <div class="dd-datepicker-header">
            <i class="dd-datepicker-icon dd-datepicker-icon-prev-year" @click="changeYear(year - 1)"></i>
            <i class="dd-datepicker-icon dd-datepicker-icon-prev-month" @click="changeMonth(month - 1)"></i>
            <span class="dd-datepicker-year-month">{{this.year}}年{{this.month + 1}}月</span>
            <i class="dd-datepicker-icon dd-datepicker-icon-next-month" @click="changeMonth(month + 1)"></i>
            <i class="dd-datepicker-icon dd-datepicker-icon-next-year" @click="changeYear(year + 1)"></i>            
        </div>
        <div>
            <table class="dd-datepicker-table">
                <thead>
                    <tr>
                        <th v-for="WEEK in WEEKS">{{WEEK}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in rows">
                        <td v-for="day in row"
                            >
                            <div :class="getCellClasses(day)"
                                @click="selectDate(day)"
                            >
                                {{isSameDate(day, new Date()) ? '今' : day.getDate()}}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<style  lang="sass" scoped>
    @import"~dd-common-css/src/variables";
    .dd-datepicker-calendar {
        background: #fff;
        position: absolute;
        left: 0;
        top: 24px;
        margin-top: 4px;
        padding: 8px;
        box-shadow:0px 0px 5px 0px rgba(0,0,0,0.15);
        border-radius:2px;
        z-index: $zindex-popover;
    }
    .dd-datepicker-header {
        margin: 8px 0;
    }
    .dd-datepicker-year-month {
        font-size: $font-size-sm;
        font-weight: bold;
        text-align: center;
        display: inline-block;
        margin: 0 29px;
        min-width: 64px;
    }
    .dd-datepicker-icon {
        cursor: pointer;
        width: 8px;
        height: 8px;
        display: inline-block;
        background: no-repeat center;
        user-select: none;

        &.dd-datepicker-icon-prev-year {
            margin-left: 8px;
            background-image: url('images/double-left-arrow.png');
        }
        &.dd-datepicker-icon-prev-month {
            margin-left: 16px;
            background-image: url('images/left-arrow.png');
        }
        &.dd-datepicker-icon-next-year {
            background-image: url('images/double-right-arrow.png');

        }
        &.dd-datepicker-icon-next-month {
            margin-right: 16px;
            background-image: url('images/right-arrow.png');
        }
    }
    .dd-datepicker-table {
        table-layout: fixed;
        width: 231px;
        font-size: 14px;
        border-spacing: 0;
        border-collapse: collapse;
        td, th {
            width: 33px;
            height: 35px;
            text-align: center;
        }
        th {
            color: $gary-dark;
            font-weight: normal;
        }
        tbody td {
            .dd-datepicker-prev-month,.dd-datepicker-next-month {
                color: $gary;
            }
            .dd-datepicker-date {
                width: 24px;
                height: 24px;
                border-radius: 2px;
                line-height: 24px;
                margin: auto;
                cursor: pointer;
                transition: background .2s ease-in-out;
                &:hover {
                    background: $blue-lighter;
                }
            }
            .dd-datepicker-today {
                color: $blue;
            }
            .dd-datepicker-current {
                background: $blue;
                color: #fff;
            }
        }
    }
</style>
<script>
import { getRows, isSameDate } from './utils';
export default {
    name: 'calendar',

    props: {
        defaultValue: [String, Date]
    },

    data() {
        return {
            date: this.defaultValue ? new Date(this.defaultValue) : new Date(),
            WEEKS: ['一', '二', '三', '四', '五', '六', '日'],
            year: null,
            month: null,
        }
    },

    computed: {
        rows() {
            const date = new Date(this.year, this.month, 1);
            return getRows(date);
        }
    },

    methods: {
        selectDate(day) {
            this.date = day;
            // select这个事件是用来关闭日历的，因为用户有可能通过输入框更改时间
            this.$emit('select');
        },

        changeYear(year) {
            this.year = year;
        },

        changeMonth(month) {
            if (month === -1) {
                this.month = 11;
                this.year  --;
            } else if (month === 12) {
                this.month = 0;
                this.year  ++;
            } else {
                this.month = month;
            }
        },

        getCellClasses(cell) {
            const classes = ['dd-datepicker-date'];
            if (cell.getFullYear() < this.year || cell.getMonth() < this.month) {
                classes.push('dd-datepicker-prev-month');
            }

            if (cell.getFullYear() > this.year || cell.getMonth() > this.month) {
                classes.push('dd-datepicker-next-month');
            }

            if (cell.getMonth() === this.month) {
                classes.push('dd-datepicker-normal');
            }

            if (isSameDate(cell, new Date())) {
                classes.push('dd-datepicker-today');
            }

            if (isSameDate(cell, this.date)) {
                classes.push('dd-datepicker-current');
            }

            return classes.join(' ');
        },

        isSameDate(date1, date2) {
            return isSameDate(date1, date2);
        }
    },

    watch: {
        date(newVal) {
            this.year = newVal.getFullYear();
            this.month = newVal.getMonth();
            this.$emit('changeDate', this.date);
        },

        defaultValue(newVal) {
            this.date = new Date(newVal);
        }
    },

    created() {
        if (this.date && !this.year) {
            this.year = this.date.getFullYear();
            this.month = this.date.getMonth();
        }

        if (this.defaultValue) {
            this.$emit('changeDate', this.date);
        }
    },
}
</script>