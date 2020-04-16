 import React, {Component} from 'react'

 const $ = require('jquery')
 $.Datatable = require('datatables.net-bs4')

 class DataTable extends Component {
    componentDidMount() {
        this.$el = $(this.el)
        this.$el.DataTable(
            {
                data: this.props.data,
                columns: this.props.column,
                columnDefs: [
                    {
                        targets: this.props.target,
                        searchable: this.props.searchable,
                        orderable: this.props.orderable
                    }
                ]
            }
        )
    }
    componentWillMount() {

    }
    render() {
        return (
            <React.Fragment>
                <div className="table-responsive">
                    <table className="table table-bordered" width="100%" ref={el => this.el = el} >

                    </table>
                </div>
            </React.Fragment>
        )
    }
 }

 export default DataTable