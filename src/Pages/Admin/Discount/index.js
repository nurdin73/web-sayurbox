import React, { Component } from 'react'
import { 
    Card, 
    CardBody,
    FormGroup,
    Label,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input, 
    CardHeader } from 'reactstrap'
import Datatable from '../../../Components/Datatable'
import Modals from './Modal'

const columns = [
  {title:"No"},
  {title:"Nama Produk"},
  {title:"Minimal Pembelian"},
  {title:"Diskon"},
  {title:"Aksi"},
]
class Transaction extends Component {
  constructor(){
    super()
    this.state={
      data: [
        [ "1", "Jahe Merah", "Rp. 10,000", '10%', '<button class="btn btn-sm btn-primary mr-2"><i class="fa fa-pencil"></i> Update</button> <button class="btn btn-sm btn-danger mr-2"><i class="fa fa-trash"></i> delete</button>' ],
        [ "2", "Jahe Merah", "Rp. 10,000", '10%', '<button class="btn btn-sm btn-primary mr-2"><i class="fa fa-pencil"></i> Update</button> <button class="btn btn-sm btn-danger mr-2"><i class="fa fa-trash"></i> delete</button>' ],
      ],
      isModalOpen: false
    }
  }
  modalToggler =()=>{
    this.setState({isModalOpen: !this.state.isModalOpen})
  } 
  render() {
    const { data } = this.state
    const { isModalOpen } = this.state
    return (
      <div className="animated fadeIn">
        {/* Content in here */}
        <Card>
        <CardHeader>
        <Modals
                isOpen={isModalOpen}
                toggleModal={this.modalToggler}
                headerTitle={"Tambah Diskon Produk"}
                toggle={()=>this.setState({isModalOpen: !this.state.isModalOpen})}
                cancelAction={()=>this.setState({isModalOpen: !this.state.isModalOpen})}
                togglerTitle={<i className="fa fa-plus">Tambah</i>}
                togglerColor="primary"
                togglerSize="md">

                     <FormGroup>
                        <Label style={{fontWeight:"bold"}} htmlFor="name">Produk</Label>
                        <Input type="select" id="name" placeholder="Enter your name">
                          <option>Jahe Merah</option>
                          <option>Jahe Merah</option>
                          <option>Jahe Merah</option>
                          <option>Jahe Merah</option>
                        </Input>
                      </FormGroup>
                      <FormGroup>
                        <Label style={{fontWeight:"bold"}} htmlFor="satuan">Minimal Pembelian</Label>
                        <Input type="number" id="satuan" placeholder="Satuan Produk" />
                      </FormGroup>
                      <FormGroup>
                        <Label style={{fontWeight:"bold"}} htmlFor="name">Tanggal Berlaku</Label>
                        <Input type="date" id="satuan" />
                      </FormGroup>
              </Modals>
        </CardHeader>
          <CardBody>
            <Datatable data={data} column={columns} orderable={false} searchable={false} />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Transaction;
