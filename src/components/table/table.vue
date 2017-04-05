<template>
    <table class="dd-table" :class="{'dd-table-bordered': bordered, 'dd-table-striped': stripe, 'dd-table-small': size === 'small' }">
        <colgroup>
            <col v-for="col in columns" :width="col.width">
        </colgroup>
        <thead>
        <tr>
            <th v-for="col in columns" :class="col.className">{{col.title}}
                <span class="dd-table-sorter" v-if="col.sorter">
                    <div class="dd-table-sort-up" :class="{sorted: col.dataIndex === sortField && sortType === 0}" @click="sort(col, 0)"></div>
                    <div class="dd-table-sort-down" :class="{sorted: col.dataIndex === sortField && sortType === 1}" @click="sort(col, 1)"></div>
                </span>
            </th>
        </tr>
        </thead>
        <tbody>
        <template v-for="row in dataSource">
            <row :indent="0" :needIndentSpaced="needIndentSpaced" v-if="!row.foot" :row="row" :columns="columns" />
            <template v-if="row.expanded">
                <row :indent="1"
                     :needIndentSpaced="needIndentSpaced"
                     v-for="child in row.children"
                     :key="child"
                     class="dd-table-child"
                     :row="child"
                     :columns="columns" />
            </template>
        </template>
        </tbody>
        <tfoot v-if="foot">
            <row :needIndentSpaced="needIndentSpaced" :row="foot" :columns="columns" />
        </tfoot>
    </table>
</template>
<style lang="sass" rel="stylesheet/scss">
    @mixin sort($type) {
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        cursor: pointer;
        &.sorted {
            @if $type == up {
                border-bottom-color: #178ce6;
            } @else {
                border-top-color: #178ce6;
            }
        }
    }
    .dd-table-sorter {
        margin-left: 4px;
        display: inline-block;
        vertical-align: middle;
        text-align: center;
    }
    .dd-table-sort-up {
        @include sort(up);
        border-top: none;
        border-bottom: 5px solid #ccc;
        margin-bottom: 3px;
    }
    .dd-table-sort-down {
        @include sort(down);
        border-top: 5px solid #ccc;
        border-bottom: none;
    }
</style>
<script>
    import row from './tableRow.vue';
    export default{
        props: {
            columns: Array,
            dataSource: Array,
            bordered: {
                type: Boolean
            },
            stripe: {
                type: Boolean,
            },
            size: {
                type: String,
            },
            sortField: String,
            sortType: Number, // 0-正序, 1-倒序
            onChange: Function
        },
        computed: {
            foot() {
                return this.dataSource.find(i => i.foot);
            },
            needIndentSpaced() {
                return this.dataSource.some(i => i.children);
            }
        },
        components: {
            row
        },
        methods: {
            sort(col, type) {
                this.onChange && this.onChange({
                    sortField: col.dataIndex,
                    sortType: type
                });
            }
        }
    }
</script>
