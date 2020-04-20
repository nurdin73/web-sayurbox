import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap'
import Datatable from '../../../Components/Datatable';
const dataSet = [
  [ 
    "1", 
    "SYB02038479NBS93", 
    "Edinburgh", 
    '<span class="badge badge-warning badge-sm">pending</span>', 
    "2011/04/25",
    `<div class="btn-group" role="group" aria-label="Basic example">
        <div class="dropdown">
          <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-fw fa-edit"></i>Update
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Proses</a>
            <a class="dropdown-item" href="#">Kirim</a>
            <a class="dropdown-item" href="#">Selesaikan</a>
          </div>
        </div>
        <button class="btn btn-sm btn-info"><i class="fa fa-fw fa-truck"></i> Detail</button>
        <button class="btn btn-sm btn-danger"><i class="fa fa-fw fa-trash"></i> Cancel</button> 
      </div>`
    ],
    [ 
      "2", 
      "SYB0203847HDKFL3", 
      "Tokyo", 
      '<span class="badge badge-warning badge-sm">pending</span>', 
      "2011/07/25", 
      `<div class="btn-group" role="group" aria-label="Basic example">
        <div class="dropdown">
          <button class="btn btn-sm btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fa fa-fw fa-edit"></i>Update
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#">Proses</a>
            <a class="dropdown-item" href="#">Kirim</a>
            <a class="dropdown-item" href="#">Selesaikan</a>
          </div>
        </div>
        <button class="btn btn-sm btn-info"><i class="fa fa-fw fa-truck"></i> Detail</button>
        <button class="btn btn-sm btn-danger"><i class="fa fa-fw fa-trash"></i> Cancel</button> 
      </div>`
    ],
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
