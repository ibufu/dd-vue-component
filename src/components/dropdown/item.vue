<template>
    <li @click="handleClick" class="dd-dropdown-item"><slot></slot></li>
</template>
<style rel="stylesheet/scss" lang="sass" type="text/css">
    @import '~dd-common-css/src/variables';
    .dd-dropdown-item {
        font-size: $font-size-sm;
        padding-left: 4px;
        height: 24px;
        line-height: 24px;
        cursor: pointer;
        &:hover {
            background: $blue-lighter;
        }
        span {
            display: inline-block;
            height: 100%;
            width: 100%;
        }
    }
</style>
<script>
    export default{
        created() {
            this.bus = this.$parent.bus;
        },
        
        methods: {
            handleClick() {
                this.bus.$emit('click-item');
            }
        }
    }
</script>
