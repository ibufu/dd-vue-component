<template>
    <div>
        <div></div>
        <div>
            <tabele>
                <thead>
                    <tr>
                        <th v-for="WEEK in WEEKS">{{WEEK}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row in rows">
                        <td v-for="day in row">{{day.getDate()}}</td>
                    </tr>
                </tbody>
            </tabele>
        </div>
    </div>
</template>
<style>

</style>
<script>
export default {
    data() {
        return {
            data: new Date();
            WEEKS: ['一', '二', '三', '四', '五', '六', '日']
        }
    },
    computed: {
        rows() {
            const date = new Date(this.year, this.month, 1);
            return data.getDay();
        }
    },
    watch: {
        date(newVal) {
            if (!this.year) {
                this.year = newVal.getFullYear();
                this.month = newVal.getMonth();
            }
        }
    }
}
</script>