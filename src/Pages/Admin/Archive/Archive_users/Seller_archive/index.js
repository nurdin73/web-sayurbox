import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap'
import Datatable from '../../../../../Components/Datatable';
const dataSet = [
  [ 
    "1", 
    "Jamal", 
    "example@gmail.com", 
    'Cirebon', 
    "Bung bung",
    `<div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-sm btn-success"><i class="fa fa-fw fa-refresh"></i> Restore</button>
        <button class="btn btn-sm btn-danger"><i class="fa fa-fw fa-trash"></i> Delete</button> 
      </div>`
  ],
  [ 
    "2", 
    "Jamal", 
    "example@gmail.com", 
    'Cirebon', 
    "Bung bung",
    `<div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-sm btn-success"><i class="fa fa-fw fa-refresh"></i> Restore</button>
        <button class="btn btn-sm btn-danger"><i class="fa fa-fw fa-trash"></i> Delete</button> 
      </div>`
  ],
];

const columns = [
  {title:"No"},
  {title:"Name Seller"},
  {title:"Email"},
  {title:"Phone Number"},
  {title:"Address"},
  {title:"Action"},
]
class Seller_archive extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        {/* Content in here */}
        <Card>
          <CardBody>
            <Datatable data={dataSet} column={columns} orderable={false} searchable={false} target={[0,5]}/>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Seller_archive;
