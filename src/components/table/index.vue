<template>
    <div style="position: relative">
        <div v-if="columnsFixed.length > 0" :style="{width: columnsFixedWidth+'px'}" style="position: absolute; top: 0;z-index: 1;overflow: hidden">
            <table-body :columns="columnsFixed" :data-source="dataSource" :bordered = "bordered" :size="size"/>
        </div>
        <div style="overflow: auto">
            <table-body :columns="columns" :data-source="dataSource" :bordered = "bordered" :size="size"/>
        </div>
    </div>
</template>
<style>
    table {
        background: #fff;
        border-collapse: collapse;
        border-spacing: 0;
        table-layout: fixed;
        width: 100%;
    }
</style>
<script>
    import tableBody from './table.vue';
    export default{
        props: {
            columns: Array,
            dataSource: Array,
            bordered: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'default'
            }
        },
        data() {
            return {
               
            }
        },
        computed: {
            columnsFixed() {
                if (!this.columns) {
                    return [];
                }

                return this.columns.filter(i => i.fixed);
            },
            columnsFixedWidth() {
                if (!this.columns) {
                    return undefined;
                }

                return this.columnsFixed.reduce((a, b) => a + b.width, 0) + 1;
            }
        },
        methods: {
            expand(row) {
                this.$set(row, 'expand', !row.expand);
            }
        },
        components: {
            tableBody
        }
    }
</script>
