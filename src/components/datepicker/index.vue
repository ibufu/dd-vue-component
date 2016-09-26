<template>
    <span>
        <span>
            <input type="text">
            <i></i>
        </span>
        <calendar />
    </span>
</template>
<style>

</style>
<script>
    import calendar from './calendar.vue';
    export default {
        name: 'DdDatePicker',
        props: {
            defaultValue: [String, Date],
            format: String,
            placeholder: String,
            disabledDate: Function,
        },
        components: {
            calendar
        }
    }
</script>