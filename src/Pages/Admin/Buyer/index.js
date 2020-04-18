import React, { Component, Fragment, useState } from 'react';
import { Badge, Button, Card, CardBody, CardHeader, Col, Modal, ModalHeader, ModalBody, ModalFooter, Pagination, PaginationItem, PaginationLink, Row, Table } from 'reactstrap';

class Buyer extends Component {
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

    // const ModalExample = (props) => {
    //   const {
    //     buttonLabel,
    //     className
    //   } = props;

    //   const [modal, setModal] = useState(false);

    //   const toggle = () => setModal(!modal);

    //   return (
    //     <div>
    //       <Button color="danger" onClick={toggle}>{buttonLabel}</Button>
    //       <Modal isOpen={modal} toggle={toggle} className={className}>
    //         <ModalHeader toggle={toggle}>Modal title</ModalHeader>
    //         <ModalBody>
    //           Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    //           <br />
    //           <Button color="success" onClick={toggleNested}>Show Nested Modal</Button>
    //           <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
    //             <ModalHeader>Nested Modal title</ModalHeader>
    //             <ModalBody>Stuff and things</ModalBody>
    //             <ModalFooter>
    //               <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
    //               <Button color="secondary" onClick={toggleAll}>All Done</Button>
    //             </ModalFooter>
    //           </Modal>
    //         </ModalBody>
    //         <ModalFooter>
    //           <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
    //           <Button color="secondary" onClick={toggle}>Cancel</Button>
    //         </ModalFooter>
    //       </Modal>
    //     </div>
    //   );
    // }

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
                    {dataBuyer.map((buyer,index) =>
                      <Fragment key={index}>
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
