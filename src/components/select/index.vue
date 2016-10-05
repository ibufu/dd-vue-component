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
        <div class="dd-select-menu">
            <ul v-show="menuVisible">
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
    import bus from './bus.js';
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
                bus.$emit('change', this);
            }
        },

        computed: {
            selectedValue() {
                return this.selectedOptions.map(el => el.value);
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
                // every select will trigger in bus pattern
                const isChild = this.$children.some(el => el === option);
                this.changedBySelect = true;
                if (!isChild) {
                    return
                }
                    
                if (this.multiple) {
                    if (this.selectedValue.indexOf(option.value) > -1) {
                        this.selectedOptions = this.selectedOptions.filter(el => el.value !== option.value);
                        option.current = false;
                    } else {
                        this.selectedOptions.push({ value: option.value, label: option.label });
                        option.current = true;
                    }

                    this.selectedLabel = this.selectedOptions.map(el => el.label).join('、');
                    this.$emit('input', this.selectedValue);
                } else {
                    this.selectedLabel = option.label;
                    this.$emit('input', option.value);
                    this.hideMenu();
                }
            }
        },

        mounted() {
            bus.$on('select', this.handleSelect);
            if (this.value) {
                bus.$emit('change', this);
            }
        }
    }
</script>
