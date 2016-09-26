<template>
    <ul class="dd-pager" @click="onPagerClick">
        <li v-for="pager in pagers" :class="{ active: currentPage === pager }" class="dd-number">{{ pager }}</li>
    </ul>
</template>
<style rel="stylesheet/scss" type="text/css" lang="sass">
</style>
<script>
    export default {
        name: 'DdPager',

        props: {
            currentPage: Number,

            pageCount: Number
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
                const pagerCount = 5;

                const currentPage = Number(this.currentPage);
                const pageCount = Number(this.pageCount);
                const array = [];

                if (pageCount < pagerCount) {
                    for (let i = 1; i <= pageCount; i++) {
                        array.push(i);
                    }
                } else {
                    if (currentPage > pagerCount) {
                        for (let i = currentPage - pagerCount + 1; i <= currentPage; i++) {
                            array.push(i);
                        }
                    } else {
                        for (let i = 1; i <= pagerCount; i++) {
                            array.push(i);
                        }
                    }
                }

                return array;
            }
        },
        data() {
            return {
            }
        }
    }
</script>
