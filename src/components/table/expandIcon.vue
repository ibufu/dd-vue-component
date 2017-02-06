<script>
    export default{
        props: {
            expandable: Boolean,
            needIndentSpaced: Boolean,
            row: Object
        },
        methods: {
            toggleExpand() {
                this.$set(this.row, 'expanded', !this.row.expanded);
            }
        },
        render(h) {
            if (this.expandable) {
                const expandClassName = this.row.expanded ? 'expanded' : 'unexpanded';
                return (
                    <span
                        class={`dd-table-expand-icon dd-table-expand-icon-${expandClassName}`}
                        onClick={this.toggleExpand}
                    />
                );
            } else if (this.needIndentSpaced) {
                return <span class="dd-table-expand-icon dd-table-spaced" />;
            }

            return null;
        }
    }
</script>
