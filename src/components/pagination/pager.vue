<template>
    <ul class="dd-pager" @click="onPagerClick">
        <li class="dd-pager-more dd-btn-quickprev dd-pager-item" v-if="showPrevMore">...</li>
        <li v-for="pager in pagers" :class="['dd-pager-item', { 'dd-pager-active': currentPage === pager }]">{{ pager }}</li>
        <li class="dd-pager-more dd-btn-quicknext dd-pager-item" v-if="showNextMore">...</li>
    </ul>
</template>
<style rel="stylesheet/scss" type="text/css" lang="sass">
    @import "~dd-common-css/src/variables";

    .dd-pager {
        list-style: none;
        display: inline-block;
        vertical-align: top;
        padding: 0;
        font-size: 0;
    }
    .dd-pager-item {
        margin-right: 8px;
    }
    .dd-pager-more {
        border: none;
    }
    .dd-pager-active {
        border: 1px solid $blue;
        background: rgba($blue-light, .1);
        color: $blue;
    }
</style>
<script>
    export default {
        name: 'DdPager',

        props: {
            currentPage: Number,
            pageCount: Number,

            pagerCount: {
                type: Number
            }
        },

        methods: {
            onPagerClick(event) {
                const target = event.target;
                if (target.tagName === 'UL') {
                    return;
                }

                let newPage = Number(event.target.textContent);
                const pageCount = this.pageCount;
                const currentPage = this.currentPage;

                if (target.className.indexOf('more') !== -1) {
                    if (target.className.indexOf('quickprev') !== -1) {
                        newPage = currentPage - this.pagerCount + 2;
                    } else if (target.className.indexOf('quicknext') !== -1) {
                        newPage = currentPage + this.pagerCount - 2;
                    }
                }

                if (!isNaN(newPage)) {
                    if (newPage < 1) {
                        newPage = 1;
                    }

                    if (newPage > pageCount) {
                        newPage = pageCount;
                    }
                }

                if (newPage !== currentPage) {
                    this.$emit('currentchange', newPage);
                }
            }
        },

        computed: {
            pagers() {
                const pagerCount = this.pagerCount;

                const currentPage = Number(this.currentPage);
                const pageCount = Number(this.pageCount);

                let showPrevMore = false;
                let showNextMore = false;
                if (pageCount > pagerCount) {
                    if (currentPage > pagerCount - 1) {
                        showPrevMore = true;
                    }
                    if (currentPage < pageCount - 1) {
                        showNextMore = true;
                    }
                }

                const array = [];

                if (showPrevMore && !showNextMore) {
                    const startPage = pageCount - (pagerCount - 2);
                    for (let i = startPage; i <= pageCount; i++) {
                        array.push(i);
                    }
                } else if (!showPrevMore && showNextMore) {
                    for (let i = 1; i < pagerCount; i++) {
                        array.push(i);
                    }
                } else if (showPrevMore && showNextMore) {
                    const offset = Math.floor(pagerCount / 2) - 1;
                    for (let i = currentPage - offset ; i <= currentPage - offset + (pagerCount - 2) - 1; i++) {
                        array.push(i);
                    }
                } else {
                    for (let i = 1; i <= pageCount; i++) {
                        array.push(i);
                    }
                }

                this.showPrevMore = showPrevMore;
                this.showNextMore = showNextMore;

                return array;
            }
        },
        data() {
            return {
                showPrevMore: false,
                showNextMore: false
            }
        }
    }
</script>
