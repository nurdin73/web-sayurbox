import React, { Component } from 'react';
import { Card, CardBody, Table, Badge, Button } from 'reactstrap'
class Transaction extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        {/* Content in here */}
        <Card>
          <CardBody>
            <Table striped bordered>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Kode Transaction</th>
                  <th>Buyer</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Last Update</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>SYB0203402HG021</td>
                  <td>John doe</td>
                  <td>Disana</td>
                  <td><Badge color="warning">Pending</Badge></td>
                  <td>20 April 2020 17:00:00</td>
                  <td>
                    <Button color="primary mr-2"><i className="fa fa-truck"></i> Update</Button>
                    <Button color="info"><i className="fa fa-list"></i> Detail</Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default Transaction;
