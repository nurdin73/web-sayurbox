import React, { Component, Fragment } from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardHeader,
  Col,
  FormGroup,
  Label,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
  Row,
  Table,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
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
                        <tr onClick={() => console.log("test body")} style={{ cursor: 'pointer' }} >
                          <td><img src={buyer.photo} style={{ width: 100, display: "block", margin: "0 auto" }} /></td>
                          <td>{buyer.name}</td>
                          <td>{buyer.email}</td>
                          <td>{buyer.phoneNumber}</td>
                          <td>
                            <Badge color="success">{buyer.isActive}</Badge> {/* color: success, danger, secondary, warning */}
                          </td>
                          <td>
                            <Modals
                              isOpen={isModalOpen}
                              toggleModal={this.modalToggler}
                              headerTitle={"Detail Pembeli"}
                              toggle={() => this.setState({ isModalOpen: !this.state.isModalOpen })}
                              cancelAction={() => this.setState({ isModalOpen: !this.state.isModalOpen })}
                              togglerTitle="Detail"
                              // togglerTitle={<i className="fa fa-plus">Tambah</i>}
                              togglerColor="primary"
                              togglerSize="sm"
                              size="lg">

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
                                  {/* <FormGroup>
                                    <Label style={{ fontWeight: "bold" }} htmlFor="password">Kata Kunci</Label>
                                    <Input plaintext value="******" />
                                  </FormGroup> */}
                                </div>
                                <div style={{ width: "50%" }}>
                                  <FormGroup>
                                    <Label style={{ fontWeight: "bold" }} htmlFor="phoneNumber">Nomor Telepon</Label>
                                    <Input plaintext value="087878787878" />
                                  </FormGroup>
                                  <FormGroup>
                                    <Label style={{ fontWeight: "bold" }} htmlFor="address">Alamat</Label>
                                    <Input style={{ height: "100%" }} type="textarea" value="Kelurahan Curug, Kecamatan Cimanggis, Kota Depok, Provinsi Jawa Barat, 12345" />
                                    {/* <Input plaintext value="Kota" />
                                    <Input plaintext value="Kecamatan" />
                                    <Input plaintext value="Desa" />
                                    <Input plaintext value="Kode Pos" /> */}
                                  </FormGroup>
                                </div>
                              </div>

                              {/* <FormGroup>
                                <Label style={{ fontWeight: "bold" }} htmlFor="appendedPrependedInput">Harga</Label>
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
                                <Label style={{ fontWeight: "bold" }} htmlFor="satuan">Satuan Produk</Label>
                                <Input type="text" id="satuan" placeholder="Satuan Produk" />
                              </FormGroup>
                              <FormGroup>
                                <Label style={{ fontWeight: "bold" }} htmlFor="name">Foto</Label>
                                <Input style={{ border: "2px solid #ededed", borderRadius: "2px" }} type="file" id="name" placeholder="Enter your name" />
                              </FormGroup> */}
                            </Modals>
                            &nbsp;
                            <ButtonDropdown size="sm">
                              <DropdownToggle caret>
                                Button Dropdown
                              </DropdownToggle>
                              <DropdownMenu>
                                <DropdownItem header>Header</DropdownItem>
                                <DropdownItem disabled>Action</DropdownItem>
                                <DropdownItem>Another Action</DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>Another Action</DropdownItem>
                              </DropdownMenu>
                            </ButtonDropdown>
                          </td>
                        </tr>
                      </Fragment>
                    )}
                  </tbody>
                </Table>
                <nav>
                  <Pagination>
                    <PaginationItem><PaginationLink previous tag="button">Prev</PaginationLink></PaginationItem>
                    <PaginationItem active>
                      <PaginationLink tag="button">1</PaginationLink>
                    </PaginationItem>
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
      </div>
    );
  }
}

export default Buyer;
