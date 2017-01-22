<script>
    import expandIcon from './expandIcon.vue';
    export default{
        components: {
            expandIcon
        },
        props: {
            row: Object,
            columns: Array,
            needIndentSpaced: Boolean,
            indent: Number
        },
        render(h) {
            const row = this.row;
            return (
                <tr>
                    {this.columns.map((col, index) => {
                        const expandable = !!row.children;
                        return (
                            <td
                                title={row[col.dataIndex]}
                                class={col.className}
                            >
                                {index === 0 && <span class="dd-table-indent" style={`padding-left: ${this.indent*8}px`}></span>}
                                {index === 0 &&
                                    <expandIcon
                                        row={row}
                                        expandable={expandable}
                                        needIndentSpaced={this.needIndentSpaced}
                                    />
                                }
                                {col.render ? col.render(h, row) : row[col.dataIndex]}
                            </td>
                        )
                    })}
                </tr>
            )
        }
    }
</script>
