<template>
    <div style="padding: 20px">
        <dd-pagination @currentchange="handleChange" :visible-pager-count="6" :show-one-page="false" :page-count="10"></dd-pagination>
    </div>
</template>
<script>
    import { DdPagination } from 'dd-vue-component';

    export default {
        methods: {
            handleChange(page) {
                console.log(page);
            }
        },
            components: {
                DdPagination
            }
    }
</script>