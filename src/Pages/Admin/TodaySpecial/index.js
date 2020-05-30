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
  Col} from 'reactstrap'
import './style.css'

class Product extends Component {
  constructor(){
    super()
    this.state={
      data: [{
        id: 1,
        nama: "Jahe Merah",
        harga: 10000,
        deskripsi: "fresh ginger",
        foto: "https://cdn-radar.jawapos.com/uploads/radarsurabaya/news/2020/02/07/jahe-merah-bantu-hadapi-virus-corona_m_1581045456_178272.jpg"
      },{
        id: 2,
        nama: "Jahe Merah",
        harga: 10000,
        deskripsi: "fresh ginger",
        foto: "https://cdn-radar.jawapos.com/uploads/radarsurabaya/news/2020/02/07/jahe-merah-bantu-hadapi-virus-corona_m_1581045456_178272.jpg"
      }],
      addProduct: false
    }
  }

  addProduct = ()=>{
    // this.setState({isModalAddProductOpen: !this.state.isModalAddProductOpen})
  }

  render() {
    const { data } = this.state
    return (
      <div className="animated fadeIn">
      <h2>Today Special</h2><br />
        {/* Content in here */}
        <Card>
          <CardHeader>
               <Row>
                 <Col lg="1.5">
                  <Button onClick={()=>this.setState({addProduct: !this.state.addProduct})} className="mr-1" size="md"
                  color={this.state.addProduct ? "danger" : "primary"}>
                  {this.state.addProduct ? <i className="fa fa-close">Batal</i> : <i className="fa fa-plus">&nbsp;Tambah</i>}
                  </Button>
                  <Button onClick={()=>this.setState({addProduct: !this.state.addProduct})} size="md" color="primary"
                  style={this.state.addProduct ? {display:"inline"} : {display:"none"}}
                  ><i className="fa fa-save"></i>&nbsp;Simpan</Button>
                 </Col>
                 <Col style={this.state.addProduct ? {display:"inline"} : {display:"none"}}>
                 <FormGroup>
                    <div className="controls">
                      <InputGroup className="input-prepend">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText><i className="fa fa-search" /></InputGroupText>
                        </InputGroupAddon>
                        <Input placeholder="Produk" id="appendedPrependedInput" size="16" type="text" />
                      </InputGroup>
                    </div>
                  </FormGroup>
                 </Col>
               </Row>
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
                  <th>Harga</th>
                  <th>deskripsi</th>
                  <th>Foto</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((v,k)=>(
                  <tr key={v.id}>
                    <td>{k+1}</td>
                    <td>{v.nama}</td>
                    <td>Rp. {v.harga}</td>
                    <td>{v.deskripsi}</td>
                    <td>
                      <img alt="product" src={v.foto} style={{width: 60, height: 60}} />
                    </td>
                    <td>
                      <Button className="mr-1" color="danger" size="sm" ><i className="fa fa-trash"></i> Delete</Button>
                      <Button className="mr-1" color="success" size="sm" ><i className="fa fa-info"></i> Detail</Button>
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
         />
        <UpdateProductModal 
        isOpen={this.state.isModalUpdateProductOpen}
        modalToggle={this.updateProductModalToggler}
        />
      </div>
    );
  }
}

class AddProductModal extends React.PureComponent{
  render(){
    return(
    <Modal toggle={this.props.modalToggle} isOpen={this.props.isOpen}>
      <ModalHeader toggle={this.props.modalToggle}>Tambah Produk</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Nama Produk</Label>
          <Input type="text" id="name" placeholder="Nama Produk" />
        </FormGroup>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="satuan">Kategori Produk</Label>
          <Input type="select" id="satuan" placeholder="Satuan Produk">
            <option>Buah</option>
            <option>Sayur</option>
            <option>Daging</option>
            <option>Bunga</option>
            <option style={{fontWeight:"bold"}}>+ Tambah Kategori baru</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Stok</Label>
          <Input type="text" id="name" placeholder="ex: 10, 20" />
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
          <Input type="text" id="satuan" placeholder="ex: gr, kg, ons" />
        </FormGroup>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Deskripsi</Label>
          <Input type="textarea" style={{resize:"none"}} id="name" placeholder="Deskripsi Produk" />
        </FormGroup>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Foto</Label>
          <Input style={{border:"2px solid #ededed",borderRadius:"2px"}} type="file" id="name" placeholder="Enter your name" />
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
      <ModalHeader toggle={this.props.modalToggle}>Update Katalog Produk</ModalHeader>
      <ModalBody>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Nama Produk</Label>
          <Input type="text" id="name" placeholder="Nama Produk" />
        </FormGroup>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="satuan">Kategori Produk</Label>
          <Input type="select" id="satuan" placeholder="Satuan Produk">
            <option>Umbi Umbian</option>
            <option>Umbi Umbian</option>
            <option>Umbi Umbian</option>
            <option>Umbi Umbian</option>
            <option style={{fontWeight:"bold"}}>+ Tambah Kategori baru</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Stok</Label>
          <Input type="text" id="name" placeholder="ex: 10, 20" />
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
          <Input type="text" id="satuan" placeholder="ex: gr, kg, ons" />
        </FormGroup>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Deskripsi</Label>
          <Input type="textarea" style={{resize:"none"}} id="name" placeholder="Deskripsi Produk" />
        </FormGroup>
        <FormGroup>
          <Label style={{fontWeight:"bold"}} htmlFor="name">Foto</Label>
          <Input style={{border:"2px solid #ededed",borderRadius:"2px"}} type="file" id="name" placeholder="Enter your name" />
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button onClick={this.props.okAction} color="success" size="md">OK</Button>
        <Button onClick={this.props.cancelAction} color="danger" size="md">Batal</Button>
      </ModalFooter>
    </Modal>
    )
  }
}

class DetailProduct extends React.PureComponent{
  render(){
    return(
      <Modal isOpen={this.props.isOpen}>
      <ModalHeader toggle={this.props.toggle}>Detail Product</ModalHeader>
      <ModalBody>

      </ModalBody>
      </Modal>
    )
  }
}

export default Product;
