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
  Table,
  Modal,  
  ModalBody,  
  Button,
  ModalHeader,
  Row,
  Col,
} from 'reactstrap'

class Transaction extends Component {
  constructor(){
    super()
    this.state={
      data: [{
        id: 1,
        nama: "SYB0203847HDKFL3",
        harga: 10000,
        deskripsi: "pending",
        lastUpdate: "20/02/2020",
        foto: "https://passingthroughresearcher.files.wordpress.com/2019/06/img_20190511_084303.jpg?w=546&h=400&crop=1"
      },{
        id: 2,
        nama: "SYB0203847HDKFL3",
        harga: 10000,
        deskripsi: "pending",
        lastUpdate: "20/02/2020",
        foto: "https://passingthroughresearcher.files.wordpress.com/2019/06/img_20190511_084303.jpg?w=546&h=400&crop=1"
      }],
      isModalAddProductOpen: false,
      isModalUpdateProductOpen: false,
      isModalDetailProductOpen: false,
      paymentDetail: false,
      transactionStatus: "pending",
      transactionDetail: false
    }
  }

  render() {
    const { 
      data, 
      transactionStatus, 
      transactionDetail 
    } = this.state
    console.log(transactionDetail)
    return (
      <div className="animated fadeIn">
        {/* Content in here */}
        <h2>Transaction</h2><br />
        <Card>
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
                  <th>Transaction Code</th>
                  <th>Address</th>
                  <th>Status</th>
                  <th>Last Update</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((v,k)=>(
                  <tr key={v.id}>
                    <td>{k+1}</td>
                    <td>{v.nama}</td>
                    <td>Rp. {v.harga}</td>
                    <td><span class="badge badge-warning badge-sm">{v.deskripsi}</span></td>
                    <td>{v.lastUpdate}</td>
                    <td>
                      <Button color="secondary" onClick={()=>this.setState({transactionDetail: !transactionDetail})}>
                       <i className="fa fa-info-circle">&nbsp;Detail</i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
        <ProofPayment
        isOpen={this.state.paymentDetail}
        modalToggle={()=>this.setState({paymentDetail: !this.state.paymentDetail})}
        cancelAction={()=>this.setState({paymentDetail: !this.state.paymentDetail})}
        />  
        <DetailTransaction 
        isOpen={transactionDetail}
        toggle={()=>this.setState({transactionDetail: !transactionDetail})}
        />
      </div>
    );
  }
}

class DetailTransaction extends React.PureComponent{
  render(){
    return(
      <Modal size="md" toggle={this.props.toggle} isOpen={this.props.isOpen}>
      <ModalHeader toggle={this.props.toggle}>
        Detail Transaksi
      </ModalHeader>
        <ModalBody>
          <Row>
            <Col>
              <h5>Bejo</h5>
              <h6>Jl. Jalan</h6>
            </Col>
            <Col>
            <Button size="sm" className="btn-vine btn-brand mr-1 mb-1"><i className="fa fa-whatsapp"></i><span>Hubungi</span></Button>
            <Button size="sm" className="btn-facebook btn-brand mr-1 mb-1"><i className="fa fa-map"></i><span>Lihat Maps</span></Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table responsive striped>
                <thead>
                  <tr>
                    <th>Produk</th>
                    <th>Total</th>
                    <th>Total Harga</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jahe</td>
                    <td>10Kg</td>
                    <td>Rp. 130.000</td>
                  </tr>
                  <tr>
                    <td>Jahe</td>
                    <td>10Kg</td>
                    <td>Rp. 130.000</td>
                  </tr>
                  <tr>
                    <td>Jahe</td>
                    <td>10Kg</td>
                    <td>Rp. 130.000</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th>Total:</th>
                    <th>30Kg</th>
                    <th>Rp. 390.000</th>
                  </tr>
                </tfoot>
              </Table>
            </Col>
          </Row>
        </ModalBody>
      </Modal>
    )
  }
}

class ProofPayment extends React.PureComponent{
  render(){
    return(
      <Modal centered size="lg" toggle={this.props.modalToggle} isOpen={this.props.isOpen}>
      <ModalBody style={{backgroundColor:"rgba(255, 255, 255, 0)"}}>
        <img style={{width:"100%"}} src="https://passingthroughresearcher.files.wordpress.com/2019/06/img_20190511_084303.jpg?w=546&h=400&crop=1" alt="detail payment" />
      </ModalBody>
      </Modal>
    )
  }
}

export default Transaction;