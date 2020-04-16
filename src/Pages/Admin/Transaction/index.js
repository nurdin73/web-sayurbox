import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap'
import Datatable from '../../../Components/Datatable';
const dataSet = [
  [ "1", "SYB02038479NBS93", "Edinburgh", '<span class="badge badge-warning badge-sm">pending</span>', "2011/04/25", '<button class="btn btn-sm btn-primary mr-2"><i class="fa fa-truck"></i> Update</button><button class="btn btn-sm btn-info mr-2"><i class="fa fa-truck"></i> Detail</button>' ],
  [ "2", "SYB0203847HDKFL3", "Tokyo", '<span class="badge badge-warning badge-sm">pending</span>', "2011/07/25", '<button class="btn btn-sm btn-primary mr-2"><i class="fa fa-truck"></i> Update</button><button class="btn btn-sm btn-info mr-2"><i class="fa fa-truck"></i> Detail</button>' ],
];

const columns = [
  {title:"No"},
  {title:"Kode Transaction"},
  {title:"Address"},
  {title:"Status."},
  {title:"Last Update"},
  {title:"Action"},
]
class Transaction extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        {/* Content in here */}
        <Card>
          <CardBody>
            <Datatable data={dataSet} column={columns} orderable={false} searchable={false} target={[0,3,4,5]}/>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Transaction;
