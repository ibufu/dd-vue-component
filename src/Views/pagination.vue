<template>
    <div style="padding: 20px">
        <dd-pagination @currentchange="handleChange" :visible-pager-count="6" :show-one-page="false" :page-count="10"></dd-pagination>
    </div>
</template>
<script>
    import { DdDropdown, DdDropdownItem, DdPagination, DdDatepicker, DdSelect, DdOption } from 'dd-vue-component';

    export default {
        methods: {
            handleChange(page) {
                console.log(page);
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