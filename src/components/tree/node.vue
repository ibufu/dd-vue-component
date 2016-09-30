<template>
    <li>
        <div>
            <span v-if="isFolder" @click="toggle" >[{{open ? '-' : '+'}}]</span>
            <input type="checkbox" v-model="model.checked" class="dd-checkbox">
            <span>{{model.name}}</span>
        </div>
        <ul v-show="open" v-if="isFolder">
            <node
                v-for="model in model.children"
                :model="model"
            />
        </ul>
    </li>
</template>
<style>

</style>
<script>
export default {
    name: 'node',
    props: {
        model: Object,
        defaultOpen: Boolean
    },
    data() {
        return {
            open: this.defaultOpen
        }
    },
    computed: {
        isFolder() {
            return this.model.children && this.model.children.length
        }
    },
    methods: {
        toggle() {
            if (this.isFolder) {
                this.open = !this.open;
            }
        }
    }
}
</script>