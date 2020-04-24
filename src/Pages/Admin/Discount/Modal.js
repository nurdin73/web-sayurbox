import React, { Component } from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "reactstrap"

export default class Modals extends Component{
    render(){
        const {
            containerStyle,
            isOpen, 
            toggle, 
            modalClass, 
            headerTitle,
            okAction,
            cancelAction,
            toggleModal,
            togglerColor,
            togglerTitle,
            togglerSize
        } = this.props
        return(
            <div style={containerStyle}>
            <Button className="btn-pill" onClick={toggleModal} color={togglerColor} size={togglerSize}>{togglerTitle}</Button>
            <Modal isOpen={isOpen} toggle={toggle} className={modalClass}>
             <ModalHeader toggle={toggle}>{headerTitle}</ModalHeader>
                <ModalBody>
                  {this.props.children}
                </ModalBody>
             <ModalFooter>
                <Button onClick={okAction} color="success" size="md">OK</Button>
                <Button onClick={cancelAction} color="danger" size="md">Batal</Button>
             </ModalFooter>
            </Modal>
            </div>
        )
    }
} 