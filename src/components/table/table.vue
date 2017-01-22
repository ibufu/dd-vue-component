<template>
    <table class="dd-table" :class="{'dd-table-bordered': bordered, 'dd-table-small': size === 'small' }">
        <colgroup>
            <col v-for="col in columns" :width="col.width">
        </colgroup>
        <thead>
        <tr>
            <th v-for="col in columns" :class="col.className">{{col.title}}</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="row in dataSource">
            <row :indent="0" :needIndentSpaced="needIndentSpaced" v-if="!row.foot" :row="row" :columns="columns" />
            <template v-if="row.expanded">
                <row :indent="1" :needIndentSpaced="needIndentSpaced" v-for="child in row.children" class="dd-table-child" :row="child" :columns="columns" />
            </template>
        </template>
        </tbody>
        <tfoot v-if="foot">
            <row :needIndentSpaced="needIndentSpaced" :row="foot" :columns="columns" />
        </tfoot>
    </table>
</template>
<style>
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
            size: {
                type: String,
            }
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
        }
    }
</script>
