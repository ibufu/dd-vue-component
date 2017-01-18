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
                    key: 'name',
                    width: 100,
                    fixed: true
                }, {
                    title: 'Age',
                    dataIndex: 'age',
                    key: 'age',
                    width: 100,
                }, {
                    title: 'Address',
                    dataIndex: 'address',
                    key: 'address',
                    width: 100,
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
            }]
        }
    },
    components: {
        DdTable
    }
});