<template>
    <ul class="dd-dropdown-menu">
        <slot></slot>
    </ul>
</template>
<style rel="stylesheet/scss" type="text/css" lang="sass">
    @import '../../../node_modules/dd-common-css/src/variables';
    .dd-dropdown-menu {
        padding: 0;
        margin: 4px 0 0 0;
        font-size: 0;
        list-style: none;
        background: $gary-background;
        box-shadow: $table-box-shadow;
        border-radius: $border-radius;
        position: absolute;
        width: 100%;
    }
</style>
<script>
    export default{
        data(){
            return{
            }
        }
    }
</script>
