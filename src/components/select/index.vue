<template>
    <div class="dd-select" :class="{'dd-disabled': disabled}" v-clickoutside="hideMenu">
        <span>
            <input type="text"
                :placeholder="placeholder"
                class="dd-input dd-select-input"
                readonly
                :value="selectedLabel"
                :disabled="disabled"
                @click="toggleMenu">
            <i class="dd-select-icon" @click="toggleMenu"></i>
        </span>
        <div class="dd-select-menu" v-show="menuVisible">
            <ul>
                <slot></slot>
            </ul>
        </div>
    </div>
</template>
<style lang="sass">
    @import"~dd-common-css/src/variables";
    .dd-select {
        position: relative;
    }
    .dd-select-input {
        cursor: pointer;
    }
    .dd-select-icon {
        cursor: pointer;
        width: 8px;
        height: 4px;
        position: absolute;
        top: 10px;
        right: 4px;
        background: url(images/dd-select-icon.png) no-repeat center;
    }
    .dd-disabled {
        .dd-select-icon {
            cursor: $cursor-disabled;
        }
    }
    .dd-select-menu {
        position: absolute;
        z-index: $zindex-popover;
        left: 0;
        top: 28px;
        width: 100%;
        box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.15);
        border-radius: $border-radius;
        overflow-x: hidden;
        overflow-y: auto;
        ul {
            list-style: none;
            padding: 0 1px;
            margin: 0;
            background: $gary-background;
        }
    }
</style>
<script>
    import Clickoutside from '../../utils/clickoutside'
    import Vue from 'vue';
    export default {
        directives: {
            Clickoutside
        },

        data() {
            return {
                menuVisible: false,
                selectedLabel: '',
                selectedOptions: [],
                changedBySelect: false,
                selectedOption: {},
            }
        },

        props: {
            value: {},
            disabled: {
                type: Boolean,
                default: false
            },
            placeholder: String,
            multiple: {
                type: Boolean,
                default: false
            }
        },

        watch: {
            value(newVal, oldVal) {
                if (this.changedBySelect) {
                    this.changedBySelect = false;
                    return
                }
                
                this.selectedOptions = [];
                this.bus.$emit('change', this);
            }
        },

        computed: {
            selectedValue() {
                return this.selectedOptions.map(el => el.value);
            },

            selectedLabel() {
                return this.multiple ? this.selectedOptions.map(el => el.label).join('、') : this.selectedOption.label;
            }

        },

        methods: {
            toggleMenu() {
                if (this.disabled) {
                    return
                }
                this.menuVisible = !this.menuVisible;
            },

            hideMenu() {
                this.menuVisible = false;
            },

            handleSelect(option) {
                this.changedBySelect = true;
                if (this.multiple) {
                    if (this.selectedValue.indexOf(option.value) > -1) {
                        this.selectedOptions = this.selectedOptions.filter(el => el.value !== option.value);
                        //option.current = false;
                    } else {
                        this.selectedOptions.push({ value: option.value, label: option.label });
                        //option.current = true;
                    }

                    this.selectedLabel = this.selectedOptions.map(el => el.label).join('、');
                    this.$emit('input', this.selectedValue);
                } else {
                    this.selectedOption = { value: option.value, label: option.label };
                    this.$emit('input', option.value);
                    this.hideMenu();
                }
            },

            selectMultiple(option) {
                if (option.current) {
                    this.selectedOptions.push({ value: option.value, label: option.label });
                } else {
                    this.selectedOptions = this.selectedOptions.filter(el => el.value !== option.value);
                }
            },

            optionDestroy(option) {
                this.selectedOptions = this.selectedOptions.filter(el => {
                    return el.value !== option.value || el.label !== option.label
                });
            }
        },

        created() {
            this.bus = new Vue();
            this.bus.$on('optionDestroy', this.optionDestroy);
            this.bus.$on('select', this.handleSelect);
            this.bus.$on('selectMultiple', this.selectMultiple);
            if (this.value) {
                this.bus.$emit('change', this);
            }
        }
    }
</script>
