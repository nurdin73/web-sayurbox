import React, { Component } from 'react';
import DataTable from '../../../Components/Datatable';
import { Card, CardBody, Button, CardHeader } from 'reactstrap';

const dataSet = [
  [ "1", "SYB02038479NBS93", "Edinburgh", '<span class="badge badge-warning badge-sm">pending</span>', "2011/04/25", '<button class="btn btn-sm btn-primary mr-2"><i class="fa fa-print"></i> Report</button><button class="btn btn-sm btn-danger mr-2"><i class="fa fa-trash"></i> Delete</button>' ],
  [ "2", "SYB0203847HDKFL3", "Tokyo", '<span class="badge badge-warning badge-sm">pending</span>', "2011/07/25", '<button class="btn btn-sm btn-primary mr-2"><i class="fa fa-print"></i> Report</button><button class="btn btn-sm btn-danger mr-2"><i class="fa fa-trash"></i> Delete</button>' ],
];

const columns = [
  {title:"No"},
  {title:"Kode Transaction"},
  {title:"Address"},
  {title:"Status."},
  {title:"Last Update"},
  {title:"Action"},
]
class Report extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        {/* Content in here */}
        <h4>REPORT</h4>
        <Card>
          <CardHeader>
            <Button className="float-right" color="success" size="sm"><i className="fa fa-fw fa-print"></i> Export</Button>
          </CardHeader>
          <CardBody>
            <DataTable data={dataSet} column={columns}/>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Report;
