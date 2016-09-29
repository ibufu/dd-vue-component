<template>
<div @mouseenter="handleMouseEnter"
     @mouseleave="handleMouseLeave"
     v-clickoutside="hide"
     :class="['dropdown_container',{ disable: this.disable }]">
    <div :class="['dd-btn-menu', { menu_disable: this.disable }]"
         @click="handleClick">
        <span :class="{ disable: this.disable }">{{ text }}</span><img src="./images/menu_arrow.png" alt="" :class="{ disable: this.disable}">
    </div>
    <dd-menu v-if="visible">
        <slot></slot>
    </dd-menu>
</div>
</template>
<style rel="stylesheet/scss" type="text/css" lang="sass">
    @import '../../../node_modules/dd-common-css/src/variables';

    .dd-btn-menu {
        width: 100%;
        background: $blue;
        border-radius: $border-radius;
        font-size: $font-size-base;
        height: 24px;
        line-height: 24px;
        text-align: center;
        color: $body-bg;
        cursor: pointer;
        img {
            margin-left: 8px;
            vertical-align: middle;
        }
    }
    .menu_disable {
        cursor: not-allowed;
        background: $gary;
    }
    .dropdown_container {
        position: relative;
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
