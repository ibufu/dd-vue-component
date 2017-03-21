<template>
    <div>
        <li class="dd-select-option-group_title">{{ label }}</li>
        <li>
            <ul class="dd-select-option-group">
                <slot></slot>
            </ul>
        </li>
    </div>
</template>
<style lang="sass">
    @import"~dd-common-css/src/variables";
    .dd-select-option-group_title {
        font-size: 12px;
        padding-left: 4px;
        height: 24px;
        line-height: 24px;
    }
    .dd-select-option-group .dd-select-option {
        color: #999999;
        padding-left: 8px;
    }
</style>
<script>
    export default{
        props: {
            label: String
        },
        data(){
            return{
                bus: this.$parent.bus
            }
        }
    }
</script>
