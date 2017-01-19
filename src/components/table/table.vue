<template>
    <table>
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
            <tr @click="expand(row)">
                <td v-for="col in columns">{{row[col.dataIndex]}}</td>
            </tr>
            <template v-if="row.expand">
                <tr v-for="child in row.children">
                    <td v-for="col in columns">{{child[col.dataIndex]}}</td>
                </tr>
            </template>
        </template>
        </tbody>
    </table>
</template>
<style>
</style>
<script>
    export default{
        props: {
            columns: Array,
            dataSource: Array
        },
        data() {
            return {
               
            }
        },
        methods: {
            expand(row) {
                this.$set(row, 'expand', !row.expand);
            }
        }
    }
</script>
