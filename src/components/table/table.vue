<template>
    <table class="dd-table" :class="{'dd-table-bordered': bordered, 'dd-table-striped': stripe, 'dd-table-small': size === 'small' }">
        <colgroup>
            <col v-for="col in columns" :width="col.width">
        </colgroup>
        <thead>
        <tr>
            <th v-for="col in columns">{{col.title}}</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="row in dataSource">
            <tr v-if="!row.foot" @click="expand(row)">
                <td v-for="col in columns">{{row[col.dataIndex]}}</td>
            </tr>
            <template v-if="row.expand">
                <tr class="dd-table-child" v-for="child in row.children">
                    <td v-for="col in columns">{{child[col.dataIndex]}}</td>
                </tr>
            </template>
        </template>
        </tbody>
        <tfoot v-if="foot">
            <tr>
                <td v-for="col in columns">{{foot[col.dataIndex]}}</td>
            </tr>
        </tfoot>
    </table>
</template>
<style>
</style>
<script>
    export default{
        props: {
            columns: Array,
            dataSource: Array,
            bordered: {
                type: Boolean,
            },
            stripe: {
                type: Boolean,
            },
            size: {
                type: String,
            }
        },
        data() {
            return {
               
            }
        },
        computed: {
            foot() {
                return this.dataSource.find(i => i.foot);
            }
        },
        methods: {
            expand(row) {
                this.$set(row, 'expand', !row.expand);
            }
        }
    }
</script>
