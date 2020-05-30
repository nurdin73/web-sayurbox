import React, { Component, Fragment } from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Label,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  Button,
  Modal,
  ModalBody,
  ModalHeader
} from 'reactstrap';
import Modals from './Modal'

class Buyer extends Component {
  constructor() {
    super()
    this.state = {
      isModalOpen: false
    }
  }
  modalToggler = () => {
    this.setState({ isModalOpen: !this.state.isModalOpen })
  }
  render() {
    const { isModalOpen } = this.state
    const dataBuyer = [
      {
        photo: 'https://jncheli.co.za/wp-content/uploads/2016/10/profile-pict-circle.png',
        name: "Vishnu Serghei",
        email: "email@email.com",
        phoneNumber: "087878787878",
        isActive: "Active"
      },
      {
        photo: 'https://jncheli.co.za/wp-content/uploads/2016/10/profile-pict-circle.png',
        name: "Vishnu Serghei",
        email: "email@email.com",
        phoneNumber: "087878787878",
        isActive: "Active"
      },
      {
        photo: 'https://jncheli.co.za/wp-content/uploads/2016/10/profile-pict-circle.png',
        name: "Vishnu Serghei",
        email: "email@email.com",
        phoneNumber: "087878787878",
        isActive: "Active"
      }
    ]

    return (
      <div className="animated fadeIn">
        {/* Content in here */}
        {/* <h1>BUYER DISINI</h1> */}
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Daftar Pembeli
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive >
                  <thead>
                    <tr>
                      <th onClick={() => console.log("test")}>Foto</th>
                      <th>Nama</th>
                      <th>E-mail</th>
                      <th>Nomor Telepon</th>
                      <th>Status</th>
                      <th>Aksi</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataBuyer.map((buyer, index) =>
                      <Fragment key={index}>
                        <tr>
                          <td><img src={buyer.photo} style={{ width: 100, display: "block", margin: "0 auto" }} alt="buyerPhoto" /></td>
                          <td onClick={()=>this.setState({isModalOpen: !isModalOpen})} style={{ cursor: 'pointer',color:"blue" }} >{buyer.name}</td>
                          <td>{buyer.email}</td>
                          <td>{buyer.phoneNumber}</td>
                          <td>
                            <Badge color="success">{buyer.isActive}</Badge> {/* color: success, danger, secondary, warning */}
                          </td>
                          <td>                          
                            <Button color="danger" size="sm"><i className="fa fa-trash"></i>&nbsp;Delete</Button>
                          </td>
                        </tr>
                      </Fragment>
                    )}
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active><PaginationLink tag="button">1</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">2</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">3</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink tag="button">4</PaginationLink></PaginationItem>
                    <PaginationItem><PaginationLink next tag="button">Next</PaginationLink></PaginationItem>
                  </Pagination>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <DetailBuyerModal 
         isOpen={isModalOpen}
         toggle={()=>this.setState({isModalOpen: !isModalOpen})}
        />
      </div>
    );
  }
}

class DetailBuyerModal extends React.PureComponent{
  render(){
    const {
      isOpen,
      toggle
    } = this.props
    return(
      <Modal size="lg" isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>Detail Pembeli</ModalHeader>
       <ModalBody>
       <FormGroup>
        <img src="https://jncheli.co.za/wp-content/uploads/2016/10/profile-pict-circle.png" className="img-avatar" alt="adminProfilePhoto" style={{ height: 175, display: "block", margin: "0 auto" }}></img>
        </FormGroup>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%" }}>
            <FormGroup>
              <Label style={{ fontWeight: "bold" }} htmlFor="name">Nama</Label>
              <Input plaintext value="Vishnu Serghei" />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontWeight: "bold" }} htmlFor="email">E-mail</Label>
              <Input plaintext value="email@email.com" />
            </FormGroup>                                
          </div>
          <div style={{ width: "50%" }}>
            <FormGroup>
              <Label style={{ fontWeight: "bold" }} htmlFor="phoneNumber">Nomor Telepon</Label>
              <Input plaintext value="087878787878" />
            </FormGroup>
            <FormGroup>
              <Label style={{ fontWeight: "bold" }} htmlFor="address">Alamat</Label>
              <Input style={{ height: "100%" }} type="textarea" value="Kelurahan Curug, Kecamatan Cimanggis, Kota Depok, Provinsi Jawa Barat, 12345" />
            </FormGroup>
          </div>
        </div>
       </ModalBody>
      </Modal>
    )
  }
}

export default Buyer;
