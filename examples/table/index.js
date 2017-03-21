/**
 * Created by lingchenxuan on 2017/1/12.
 */
import Vue from 'vue';
import DdTable from '../../src/components/table';

new Vue({
    el: '#app',
    data() {
        return {
            columns: [
                {
                    title: 'Name',
                    dataIndex: 'name',
                    width: 100,
                    fixed: true,
                    className: 'name'
                }, {
                    title: 'Age',
                    dataIndex: 'age',
                    sorter: true,
                    width: 100,
                }, {
                    title: 'Address',
                    dataIndex: 'address',
                    width: 100,
                }, {
                    title: 'action',
                    width: 100,
                    render: (h, row) => (<span>{row.name}</span>)
                }
            ],
            dataSource: [{
                key: 1,
                name: 'John',
                age: 60,
                address: 'New York ',
                children: [{
                    key: 11,
                    name: 'John Brown',
                    age: 42,
                    address: 'New York',
                }],
            }, {
                key: 2,
                name: 'Joe',
                age: 32,
                address: 'Sidney',
            }, {
                key: 2,
                name: 'Joe',
                age: 32,
                address: 'Sidney',
                foot: true
            }]
        }
    },
    methods: {
        handleTableChange(data) {
            console.log(data);
        }
    },
    components: {
        DdTable
    }
});