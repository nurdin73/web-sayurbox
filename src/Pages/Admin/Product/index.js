import React, { Component } from 'react';
import { 
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  Button,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input
} from "reactstrap";
import './style.css';
import Modals from './Modal';

class Product extends Component {
  constructor(){
    super()
    this.state = {
      data: [
        {
          id: 1,
          name: "Jahe Putih",
          price: 10000,
          image: "https://firebasestorage.googleapis.com/v0/b/project-2059615900628317391.appspot.com/o/vegetable-new%2F1533533465507_jahe%202.jpg?alt=media"
        },
        {
          id: 2,
          name: "Jahe Putih",
          price: 10000,
          image: "https://firebasestorage.googleapis.com/v0/b/project-2059615900628317391.appspot.com/o/vegetable-new%2F1533533465507_jahe%202.jpg?alt=media"
        },
        {
          id: 3,
          name: "Jahe Putih",
          price: 10000,
          image: "https://firebasestorage.googleapis.com/v0/b/project-2059615900628317391.appspot.com/o/vegetable-new%2F1533533465507_jahe%202.jpg?alt=media"
        },
        {
          id: 4,
          name: "Jahe Putih",
          price: 10000,
          image: "https://firebasestorage.googleapis.com/v0/b/project-2059615900628317391.appspot.com/o/vegetable-new%2F1533533465507_jahe%202.jpg?alt=media"
        },
        {
          id: 5,
          name: "Jahe Putih",
          price: 10000,
          image: "https://firebasestorage.googleapis.com/v0/b/project-2059615900628317391.appspot.com/o/vegetable-new%2F1533533465507_jahe%202.jpg?alt=media"
        },
        {
          id: 6,
          name: "Jahe Putih",
          price: 10000,
          image: "https://firebasestorage.googleapis.com/v0/b/project-2059615900628317391.appspot.com/o/vegetable-new%2F1533533465507_jahe%202.jpg?alt=media"
        },
      ],
      isModalOpen: false
    }
  }
  modalToggler = ()=>{
    this.setState({isModalOpen: !this.state.isModalOpen})
  }
  render() {
    const { 
      data,
      isModalOpen
    } = this.state
    return (
      <div className="animated fadeIn">
          <Row style={{margin:"1%"}}>
            <Col>
              <h3>Katalog Produk</h3>
            </Col>
            <Col>
              <div style={{float:"right"}}>
              <Modals
                isOpen={isModalOpen}
                toggleModal={this.modalToggler}
                headerTitle={"Tambah Katalog Produk"}
                toggle={()=>this.setState({isModalOpen: !this.state.isModalOpen})}
                cancelAction={()=>this.setState({isModalOpen: !this.state.isModalOpen})}
                togglerTitle={<i className="fa fa-plus">Tambah</i>}
                togglerColor="primary"
                togglerSize="md">
                <Row>
                  <Col lg="12">
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
                  </Col>
                </Row>
              </Modals>
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="container">
            {data.map(v=>
              <Card key={v.id} className="card-content">
                <CardBody className="card-body-container">
                  <Row>
                    <Col lg="3">
                    <CardImg                    
                    alt="product"
                    src={v.image} />              
                    </Col>
                    <Col lg="7">
                    <div className="text-container">
                      <CardTitle className="product-title">{v.name}</CardTitle>
                      <CardTitle className="product-price">Rp. {v.price}</CardTitle>
                    </div>
                    </Col>
                    <Col lg="2" className="action-button">
                      <Button size="sm" color="primary"><i className="fa fa-pencil"></i></Button>                  
                      <Button size="sm" color="danger"><i className="fa fa-trash"></i></Button>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            )}
            </Col>
          </Row>
      </div>
    );
  }
}

export default Product;
