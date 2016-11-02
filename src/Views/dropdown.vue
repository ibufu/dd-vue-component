<template>
    <div class="app" style="padding: 20px">
        <div style="width: 100px; display: inline-block; margin-left: 20px;">
            <dd-dropdown text="导出明细" trigger="click" :disable="true">
                <dd-dropdown-item><span @click="showText">导出PDF</span></dd-dropdown-item>
                <dd-dropdown-item><span @click="showText">导出Excel</span></dd-dropdown-item>
            </dd-dropdown>
        </div>
        <div style="width: 100px; display: inline-block; margin-left: 20px;">
            <dd-dropdown text="导出明细" trigger="hover" :disable="false">
                <dd-dropdown-item><span @click="showText">导出PDF</span></dd-dropdown-item>
                <dd-dropdown-item><span @click="showText">导出Excel</span></dd-dropdown-item>
            </dd-dropdown>
        </div>
        <div style="width: 100px; display: inline-block; margin-left: 20px;">
            <dd-dropdown text="导出明细" trigger="click" :disable="false">
                <dd-dropdown-item><span @click="showText">导出PDF</span></dd-dropdown-item>
                <dd-dropdown-item><span @click="showText">导出Excel</span></dd-dropdown-item>
            </dd-dropdown>
        </div>
        <div style="width: 100px; display: inline-block; margin-left: 20px;">
            <dd-dropdown text="导出明细" trigger="click" :disable="true">
                <dd-dropdown-item><span @click="showText">导出PDF</span></dd-dropdown-item>
                <dd-dropdown-item><span @click="showText">导出Excel</span></dd-dropdown-item>
            </dd-dropdown>
        </div>
    </div>
</template>
<script>
    import { DdDropdown, DdDropdownItem } from 'dd-vue-component';

    export default {
        methods: {
            showText() {
                console.log('PDF');
            }
        },
        components: {
            DdDropdown,
            DdDropdownItem
        }
    }
</script>