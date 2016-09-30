<template>
<div @mouseenter="handleMouseEnter"
     @mouseleave="handleMouseLeave"
     v-clickoutside="hide"
     :class="['dd-dropdown-container',{ disable: this.disable }]">
    <div :class="['dd-btn-primary', 'dd-btn', { disabled: this.disable }]"
         @click="handleClick">
        <span :class="{ disable: this.disable }">{{ text }}</span><img src="./images/menu_arrow.png" alt="" :class="['dd-dropdown-arrow' ,{ disable: this.disable}]">
    </div>
    <dd-menu v-if="visible">
        <slot></slot>
    </dd-menu>
</div>
</template>
<style rel="stylesheet/scss" type="text/css" lang="sass">
    @import '../../../node_modules/dd-common-css/src/variables';
    .dd-dropdown-container {
        position: relative;
    }
    .dd-dropdown-arrow {
        margin-left: 8px;
        vertical-align: middle;
    }
</style>
<script>
    import DdMenu from './menu.vue';
    import Clickoutside from '../../utils/clickoutside';
    import bus from './bus';

    export default{
        props: {
            text: {
                type: String,
                default: "下拉菜单"
            },

            trigger: {
                type: String,
                default: 'click'
            },

            disable: {
                type: Boolean,
                default: false
            }
        },

        data(){
            return{
                visible: false
            }
        },

        mounted() {
            bus.$on('click-item', this.hide)
        },

        components: {
            DdMenu
        },

        methods: {
            show() {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = true;
                }, 250);
            },

            hide() {
                clearTimeout(this.timeout);
                this.timeout = setTimeout(() => {
                    this.visible = false;
                }, 150);
            },

            handleMouseEnter(event) {
                const target = event.target;
                if(target.className.indexOf('disable') !== -1) {
                    return
                }

                if (this.trigger === 'hover') {
                    this.show();
                }
            },

            handleMouseLeave(event) {
                const target = event.target;
                if(target.className.indexOf('disable') !== -1) {
                    return
                }

                if (this.trigger === 'hover') {
                    this.hide();
                }
            },

            handleClick(event) {
                const target = event.target;
                if(target.className.indexOf('disable') !== -1) {
                    return
                }

                if (this.trigger === 'click') {
                    this.visible = !this.visible;
                }
            }
        },

        directives: {
            Clickoutside
        }
    }
</script>
