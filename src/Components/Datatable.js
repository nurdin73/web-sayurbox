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
                        targets: [0,3,4,5],
                        searchable: false,
                        orderable: false
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
                <table className="table table-bordered" width="100%" ref={el => this.el = el} >

                </table>
            </React.Fragment>
        )
    }
 }

 export default DataTable