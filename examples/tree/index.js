import Vue from 'vue';
import DdTree from '../../src/components/tree';

const data = [
    {
        name: '住宿',
        children: [
            { name: '',
              value: {
                  type: '住宿',
                  id: 1
              } },
            { name: 'wat' },
        ],
        checked: ''
    },
    {
        name: '餐饮',
        children: [
            { name: 'hello' },
            { name: 'wat' },
        ]
    },
    {
        name: '娱乐',
        children: [
            { name: 'hello' },
            { name: 'wat' },
        ]
    }
    
]
new Vue({
    el: '.app',
    data: {
        treeData: data
    },
    components: {
        DdTree
    }
})