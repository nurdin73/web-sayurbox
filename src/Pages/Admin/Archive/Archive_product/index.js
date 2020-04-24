import React, { Component } from 'react';
import { Card, CardBody } from 'reactstrap'
import Datatable from '../../../../Components/Datatable';
const dataSet = [
  [ 
    "1", 
    "Jahe", 
    "Rp.20.000 ,-", 
    'Rempah rempah', 
    "Bung bung",
    `<div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-sm btn-success"><i class="fa fa-fw fa-refresh"></i> Restore</button>
        <button class="btn btn-sm btn-danger"><i class="fa fa-fw fa-trash"></i> Delete</button> 
      </div>`
  ],
  [ 
    "2", 
    "Jahe", 
    "Rp.20.000 ,-", 
    'Rempah rempah', 
    "Bung bung",
    `<div class="btn-group" role="group" aria-label="Basic example">
        <button class="btn btn-sm btn-success"><i class="fa fa-fw fa-refresh"></i> Restore</button>
        <button class="btn btn-sm btn-danger"><i class="fa fa-fw fa-trash"></i> Delete</button> 
      </div>`
  ],
];

const columns = [
  {title:"No"},
  {title:"Name Product"},
  {title:"Price"},
  {title:"Category Product"},
  {title:"Seller"},
  {title:"Action"},
]
class Archive_product extends Component {
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

export default Archive_product;
