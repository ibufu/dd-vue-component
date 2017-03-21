<template>
    <li class="dd-select-option"
        :class="{'dd-select-option-selected': current}"
        @click="handleClick">
        <input type="checkbox" class="dd-checkbox" v-if="multiple" :checked="current">
        <slot>
            <span>{{ label }}</span>
        </slot>
    </li>
</template>
<style lang="sass">
    @import"~dd-common-css/src/variables";
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
                multiple: this.$parent.multiple
            }
        },

        computed: {
            current() {
                return this.selected || (this.multiple ? this.$parent.value.indexOf(this.value) > -1 : this.$parent.value === this.value);
            }
        },

        methods: {
            handleClick() {
                this.bus.$emit('selectByClick', this);
                this.$emit('click', this);
            },

            handleChange(select) {
                if (this.multiple) {
                    this.bus.$emit('selectMultiple', this);
                } else {
                    if (this.value === select.value) {
                        this.bus.$emit('selectOne', this);
                    }
                }
            }
        },

        created() {
            this.bus = this.$parent.bus;
            if (this.current && !this.multiple) {
                this.bus.$emit('selectOne', this);
            }

            if (this.current && this.multiple) {
                this.bus.$emit('selectMultiple', this);
            }

            this.bus.$on('change', this.handleChange);
        },

        beforeDestroy() {
            if (this.multiple) {
                this.bus.$emit('optionDestroy', this);
            }

            this.bus.$off('change', this.handleChange);
        }

    }
</script>
