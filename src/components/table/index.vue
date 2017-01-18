<template>
    <div style="position: relative">
        <div style="position: absolute; top: 0;z-index: 1;overflow: hidden">
            <table style="width: auto">
                <colgroup>
                    <col v-for="col in columnsFixed" :width="col.width">
                </colgroup>
                <thead>
                <tr>
                    <th v-for="col in columnsFixed">{{col.title}}</th>
                </tr>
                </thead>
                <tbody>
                <template v-for="row in dataSource">
                    <tr @click="expand(row)">
                        <td v-for="col in columnsFixed">{{row[col.dataIndex]}}</td>
                    </tr>
                    <template v-if="row.expand">
                        <tr v-for="child in row.children">
                            <td v-for="col in columnsFixed">{{child[col.dataIndex]}}</td>
                        </tr>
                    </template>
                </template>
                </tbody>
            </table>
        </div>
        <div style="overflow: auto">
            <table :width="columnsWidth">
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
        </div>
    </div>
</template>
<style>
    table {
        background: #fff;
        text-align: left;
        border-collapse: separate;
        border-spacing: 0;
    }
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
        computed: {
            columnsFixed() {
                if (!this.columns) {
                    return [];
                }

                return this.columns.filter(i => i.fixed);
            },
            columnsWidth() {
                if (!this.columns) {
                    return undefined;
                }

                return this.columns.reduce((a, b) => a + b.width, 0)
            }
        },
        methods: {
            expand(row) {
                this.$set(row, 'expand', !row.expand);
            }
        }
    }
</script>
