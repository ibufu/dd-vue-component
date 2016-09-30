<template>
    <div class="dd-pagination" v-if="pageCount > 1 || showOnePage">
        <button
                :class="['dd-pagination-btn', 'pagination-btn-first', { 'dd-pagination-disabled': this.internalCurrentPage <= 1}]"
                @click="this.goToFirstPage">
                <span v-text="firstText"></span>
        </button>
        <button
                :class="['dd-pagination-btn', 'pagination-btn-prev', { 'dd-pagination-disabled': this.internalCurrentPage <= 1}]"
                @click="this.getPrevPage">
                <span>&lt;</span>
        </button>
        <pager
                :currentPage="this.internalCurrentPage"
                :pageCount="this.pageCount"
                :pagerCount="this.visiblePagerCount"
                @currentchange="this.handleCurrentChange">

        </pager>
        <button
                :class="['dd-pagination-btn', 'pagination-btn-next', { 'dd-pagination-disabled': this.internalCurrentPage === this.pageCount }]"
                @click="this.getNextPage">
                <span>&gt;</span>
        </button>
        <button
                :class="['dd-pagination-btn', 'pagination-btn-first', { 'dd-pagination-disabled': this.internalCurrentPage === this.pageCount }]"
                @click="this.goToLastPage">
                <span v-text="lastText"></span>
        </button>
    </div>
</template>
<style rel="stylesheet/scss" type="text/css" lang="sass">
    @import '../../../node_modules/dd-common-css/src/variables';

    .dd-pagination {
        font-size: 0;
    }
    .dd-pagination-btn, .dd-pager-item {
        padding: 0 4px;
        border: 1px solid $gary;
        display: inline-block;
        border-radius: $border-radius;
        font-size: $font-size-sm;
        color: $gary-dark;
        height: 24px;
        line-height: 24px;
        min-width: 24px;
        cursor: pointer;
        background: transparent;
        outline: none;
        text-align: center;
        vertical-align: top;
        &:not(:last-child) {
            margin-right: 8px;
        }
    }
    .dd-pagination-disabled {
        color: $gary;
        border: 1px solid $gary-light;
        cursor: not-allowed;
    }
</style>
<script>
    import Vue from 'vue';
    import Pager from './pager.vue';

    export default {
        name: 'DdPagination',

        props: {
            firstText: {
                type: String,
                default: '首页'
            },

            lastText: {
                type: String,
                default: '尾页'
            },

            pageCount: {
                type: Number
            },

            currentPage: {
                type: Number,
                default: 1
            },

            visiblePagerCount: {
                type: Number,
                default: 5
            },

            showOnePage: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                internalCurrentPage: 1,
                internalPageSize: 0
            };
        },

        components: {
            Pager
        },

        methods: {
            handleCurrentChange(val) {
                this.internalCurrentPage = this.getValidCurrentPage(val);
                this.$emit('currentchange', this.internalCurrentPage);
            },

            goToFirstPage() {
                const oldPage = this.internalCurrentPage;
                const newVal = 1;
                this.internalCurrentPage = this.getValidCurrentPage(newVal);

                if (this.internalCurrentPage !== oldPage) {
                    this.$emit('currentchange', this.internalCurrentPage);
                }
            },

            getPrevPage() {
                const oldPage = this.internalCurrentPage;
                const newVal = this.internalCurrentPage - 1;
                this.internalCurrentPage = this.getValidCurrentPage(newVal);

                if (this.internalCurrentPage !== oldPage) {
                    this.$emit('currentchange', this.internalCurrentPage);
                }
            },

            getNextPage() {
                const oldPage = this.internalCurrentPage;
                const newVal = this.internalCurrentPage + 1;
                this.internalCurrentPage = this.getValidCurrentPage(newVal);

                if (this.internalCurrentPage !== oldPage) {
                    this.$emit('currentchange', this.internalCurrentPage);
                }
            },

            goToLastPage() {
                const oldPage = this.internalCurrentPage;
                const newVal = this.pageCount;
                this.internalCurrentPage = this.getValidCurrentPage(newVal);

                if (this.internalCurrentPage !== oldPage) {
                    this.$emit('currentchange', this.internalCurrentPage);
                }
            },

            getValidCurrentPage(value) {
                value = parseInt(value, 10);

                let resetValue;
                if (value < 1) {
                    resetValue = this.pageCount > 0 ? 1 : 0;
                } else if (value > this.pageCount) {
                    resetValue = this.pageCount;
                }

                if (resetValue === undefined && isNaN(value)) {
                    value = this.pageCount > 0 ? 1 : 0;
                }

                return resetValue === undefined ? value : resetValue;
            }
        },

        watch: {
            pageCount(newVal) {
                if (newVal > 0 && this.internalCurrentPage === 0) {
                    this.internalCurrentPage = 1;
                } else if (this.internalCurrentPage > newVal) {
                    this.internalCurrentPage = newVal;
                }
            },

            currentPage: {
                immediate: true,
                handler(val) {
                    this.internalCurrentPage = val;
                }
            },

            pageSize: {
                immediate: true,
                handler(val) {
                    this.internalPageSize = val;
                }
            },

            internalCurrentPage(newVal, oldVal) {
                newVal = parseInt(newVal, 10);

                if (isNaN(newVal)) {
                    newVal = oldVal || 1;
                } else {
                    newVal = this.getValidCurrentPage(newVal);
                }

                if (newVal !== undefined) {
                    Vue.nextTick(() => {
                        this.internalCurrentPage = newVal;
                    });
                }
            }
        }
    }
</script>
