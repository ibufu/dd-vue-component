<template>
    <div id="app">
        <ul>
            <li><router-link to="/datepicker">datepicker</router-link></li>
            <li><router-link to="/dropdown">dropdown</router-link></li>
            <li><router-link to="/pagination">pagination</router-link></li>
            <li><router-link to="/select">select</router-link></li>
        </ul>
        <router-view></router-view>
    </div>
</template>
<style>

</style>
<script>
    import 'dd-common-css/dist/dd-common.min.css';
    import { DdDropdown, DdDropdownItem, DdPagination, DdDatepicker, DdSelect, DdOption } from 'dd-vue-component';
    export default {
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