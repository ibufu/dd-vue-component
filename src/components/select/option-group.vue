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
