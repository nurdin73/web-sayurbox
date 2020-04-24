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
        [ "1", "Jahe Merah", "Rp. 10,000", '10%', '<button class="btn btn-sm btn-primary mr-2"><i class="fa fa-pencil"></i> Update</button> <button class="btn btn-sm btn-danger mr-2"><i class="fa fa-trash"></i> delete</button>' ],
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
                headerTitle={"Tambah Katalog Produk"}
                toggle={()=>this.setState({isModalOpen: !this.state.isModalOpen})}
                cancelAction={()=>this.setState({isModalOpen: !this.state.isModalOpen})}
                togglerTitle={<i className="fa fa-plus">Tambah</i>}
                togglerColor="primary"
                togglerSize="md">

                     <FormGroup>
                        <Label style={{fontWeight:"bold"}} htmlFor="name">Nama Produk</Label>
                        <Input type="text" id="name" placeholder="Enter your name" />
                      </FormGroup>
                      <FormGroup>
                        <Label style={{fontWeight:"bold"}} htmlFor="appendedPrependedInput">Harga</Label>
                        <div className="controls">
                          <InputGroup className="input-prepend">
                            <InputGroupAddon addonType="prepend">
                              <InputGroupText>Rp</InputGroupText>
                            </InputGroupAddon>
                            <Input id="appendedPrependedInput" size="16" type="text" />
                            <InputGroupAddon addonType="append">
                              <InputGroupText>.00</InputGroupText>
                            </InputGroupAddon>
                          </InputGroup>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Label style={{fontWeight:"bold"}} htmlFor="satuan">Satuan Produk</Label>
                        <Input type="text" id="satuan" placeholder="Satuan Produk" />
                      </FormGroup>
                      <FormGroup>
                        <Label style={{fontWeight:"bold"}} htmlFor="name">Foto</Label>
                        <Input style={{border:"2px solid #ededed",borderRadius:"2px"}} type="file" id="name" placeholder="Enter your name" />
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
