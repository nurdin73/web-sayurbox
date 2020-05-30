import React, { Component } from 'react';
import { 
  Card, 
  CardBody,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button, 
  CardHeader,
  Table,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col  
} from 'reactstrap'
import './style.css'

class Product extends Component {
  constructor(){
    super()
    this.state={
      data: [{
        id: 1,
        nama: "Jahe Merah",
        diskon: 10,
        min: "0",
        foto: "https://cdn-radar.jawapos.com/uploads/radarsurabaya/news/2020/02/07/jahe-merah-bantu-hadapi-virus-corona_m_1581045456_178272.jpg"
      },{
        id: 2,
        nama: "Jahe Merah",
        diskon: 10,
        min: "0",
        foto: "https://cdn-radar.jawapos.com/uploads/radarsurabaya/news/2020/02/07/jahe-merah-bantu-hadapi-virus-corona_m_1581045456_178272.jpg"
      }],
      isModalAddProductOpen: false,
      isModalUpdateProductOpen: false,
    }
  }

  addProductModalToggler = ()=>{
    this.setState({isModalAddProductOpen: !this.state.isModalAddProductOpen})
  }

  updateProductModalToggler = ()=>{
    this.setState({isModalUpdateProductOpen: !this.state.isModalUpdateProductOpen})
  }

  render() {
    const { data } = this.state
    return (
      <div className="animated fadeIn">
      <h2>Discount</h2><br />
        {/* Content in here */}
        <Card>
          <CardHeader>
               <Button onClick={this.addProductModalToggler} color="primary" className="btn-pill"><i className="fa fa-plus"></i>Tambah Produk</Button>
          </CardHeader>
          <CardBody>
          <div className="datatbletop">
          <FormGroup style={{display:"flex",flexDirection:"row"}}>
            <Label className="mr-2 mt-1">Show</Label>
            <Input style={{width: 80}} type="select">
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>100</option>
            </Input>
          </FormGroup>
          <FormGroup>
                  <div className="controls">
                    <InputGroup className="input-prepend">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><i className="fa fa-search"></i></InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="search" id="appendedPrependedInput" size="16" type="text" />
                    </InputGroup>
                  </div>
            </FormGroup>
          </div>
            <Table responsive striped bordered>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Nama Produk</th>
                  <th>Diskon</th>
                  <th>Min. Pembelian</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((v,k)=>(
                  <tr key={v.id}>
                    <td>{k+1}</td>
                    <td>{v.nama}</td>
                    <td>{v.diskon}</td>
                    <td>{v.min}</td>
                    <td>
                      <Button onClick={this.updateProductModalToggler} className="mr-1" color="primary" size="sm" ><i className="fa fa-pencil"></i> Update</Button>
                      <Button className="mr-1" color="danger" size="sm" ><i className="fa fa-trash"></i> Delete</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
        <AddProductModal 
        isOpen={this.state.isModalAddProductOpen}
        modalToggle={this.addProductModalToggler}
        cancelAction={this.addProductModalToggler}
         />
        <UpdateProductModal 
        isOpen={this.state.isModalUpdateProductOpen}
        modalToggle={this.updateProductModalToggler}
        cancelAction={this.updateProductModalToggler}
        />      
      </div>
    );
  }
}

class AddProductModal extends React.PureComponent{
  render(){
    return(
      <Modal toggle={this.props.modalToggle} isOpen={this.props.isOpen}>
      <ModalHeader toggle={this.props.modalToggle}>Tambah Diskon Produk</ModalHeader>
      <ModalBody>
      <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="appendedPrependedInput">Produk</Label>
          <div className="controls">
            <InputGroup className="input-prepend">
              <InputGroupAddon addonType="prepend">
                <InputGroupText><i className="fa fa-search" /></InputGroupText>
              </InputGroupAddon>
              <Input id="appendedPrependedInput" size="16" type="text" />
            </InputGroup>
          </div>
        </FormGroup>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Diskon</Label>
          <Input type="text" id="name" placeholder="Ex: 10%" />
        </FormGroup>  
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Min. Pembelian</Label>
          <Input type="text" id="name" placeholder="Ex: 10" />
        </FormGroup>          
      </ModalBody>
      <ModalFooter>
        <Button onClick={this.props.okAction} color="success" size="md">Tambah</Button>
        <Button onClick={this.props.cancelAction} color="danger" size="md">Batal</Button>
      </ModalFooter>
    </Modal>
    )
  }
}

class UpdateProductModal extends React.PureComponent{
  render(){
    return(
      <Modal toggle={this.props.modalToggle} isOpen={this.props.isOpen}>
      <ModalHeader toggle={this.props.modalToggle}>Update Diskon Produk</ModalHeader>
      <ModalBody>
      <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="appendedPrependedInput">Produk</Label>
          <div className="controls">
            <InputGroup className="input-prepend">
              <InputGroupAddon addonType="prepend">
                <InputGroupText><i className="fa fa-search" /></InputGroupText>
              </InputGroupAddon>
              <Input id="appendedPrependedInput" size="16" type="text" />
            </InputGroup>
          </div>
        </FormGroup>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Diskon</Label>
          <Input type="text" id="name" placeholder="Ex: 10%" />
        </FormGroup>  
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Min. Pembelian</Label>
          <Input type="text" id="name" placeholder="Ex: 10" />
        </FormGroup>          
      </ModalBody>
      <ModalFooter>
        <Button onClick={this.props.okAction} color="success" size="md">Ok</Button>
        <Button onClick={this.props.cancelAction} color="danger" size="md">Batal</Button>
      </ModalFooter>
    </Modal>
    )
  }
}

export default Product;
