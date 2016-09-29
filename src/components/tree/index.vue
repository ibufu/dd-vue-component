<template>
    <ul>
        <node v-for="model in treeDate" :model="model" :defaultOpen="defaultExpandAll"/>
    </ul>
</template>
<style>

</style>
<script>
import node from './node.vue';
export default {
    components: {
        node
    },
    props: {
        treeDate: Array,
        defaultExpandAll: {
            type: Boolean,
            default: false,
        }
    }
}
</script>