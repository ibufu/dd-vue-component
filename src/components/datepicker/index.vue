<template>
    <span>
        <span>
            <input type="text">
            <i></i>
        </span>
        <div>
            <div></div>
            <div>
                <tabele>
                    <thead>
                        <th></th>
                    </thead>
                    <tbody>
                        <td></td>
                    </tbody>
                </tabele>
            </div>
        </div>
    </span>
</template>
<style>

</style>
<script>
    export default {
        name: 'DdDatePicker',
        props: {
            defaultValue: [String, Date],
            format: String,
            placeholder: String,
            disabledDate: Function,
        }
    }
</script>