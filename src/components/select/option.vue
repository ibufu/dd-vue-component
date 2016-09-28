<template>
    <li class="dd-select-option"
        :class="{'dd-select-option-selected': current}"
        @click="handleClick">
        {{label}}
    </li>
</template>
<style lang="sass">
    @import"../../../node_modules/dd-common-css/src/variables";
    .dd-select-option {
        font-size: 12px;
        padding-left: 4px;
        height: 24px;
        line-height: 24px;
        cursor: pointer;
    }
    .dd-select-option-selected {
        background: $blue-lighter;
    }
</style>
<script>
    import bus from './bus.js'
    export default {
        props: {
            value: [String, Number],
            label: [String, Number],
            selected: {
                type: Boolean,
                default: false
            }
        },

        data() {
            return {
                current: this.selected
            }
        },

        methods: {
            handleClick() {
                bus.$emit('select', this);
            },

            handleSelect(option) {
                this.current = this === option;
            },

            handleChange(select) {
                const isParent = this.$parent === select;
                if (isParent && this.value === select.value) {
                    bus.$emit('select', this);
                }
            }
        },

        created() {
            bus.$on('select', this.handleSelect);
            bus.$on('change', this.handleChange);
        }

    }
</script>
