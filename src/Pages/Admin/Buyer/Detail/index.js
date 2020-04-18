import React, { Component } from 'react';
import { Badge, Card, CardBody, CardHeader, Col, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class BuyerDetail extends Component {
  render() {
    const dataBuyer = [
      {
        photo: 'image',
        name: "Vishnu Serghei",
        email: "email@email.com",
        password: "******",
        phoneNumber: "087878787878",
        isActive: "Active"
      },
      {
        photo: 'image',
        name: "Vishnu Serghei",
        email: "email@email.com",
        password: "******",
        phoneNumber: "087878787878",
        isActive: "Active"
      },
      {
        photo: 'image',
        name: "Vishnu Serghei",
        email: "email@email.com",
        password: "******",
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
                <Table hover bordered striped responsive size="sm">
                  <thead>
                    <tr>
                      <th onClick={() => console.log("test")}>Foto</th>
                      <th>Nama</th>
                      <th>E-mail</th>
                      <th>Password</th>
                      <th>Nomor Telepon</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataBuyer.map(buyer =>
                      <tr onClick={() => console.log("test body")} style={{ cursor: 'pointer' }} >
                        <td>{buyer.photo}</td>
                        <td>{buyer.name}</td>
                        <td>{buyer.email}</td>
                        <td>{buyer.password}</td>
                        <td>{buyer.phoneNumber}</td>
                        <td>
                          <Badge color="success">{buyer.isActive}</Badge> {/* color: success, danger, secondary, warning */}
                        </td>
                      </tr>
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

export default BuyerDetail;
