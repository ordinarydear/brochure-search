import React, {useState} from 'react'
import {Card, BrochureTitle, CompanyLogo, BrochureDesc} from './BrochureElements'
import { Modal, Image, Stack } from 'react-bootstrap';


function BrochureItem(props) {
    const  [showModal, setShowModal] = useState(false)

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
        <Card onClick={handleShow}>
            <CompanyLogo src={props.item.logo} alt="company logo" />
            <Stack gap={1} className="align-self-center">
                <BrochureTitle>{props.item.title}</BrochureTitle>
                <BrochureDesc>{props.item.desc}</BrochureDesc>
            </Stack>
        </Card>

        <Modal show={showModal} onHide={handleClose} size="lg">
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <Image src={props.item.img} alt="Brochure" fluid/>
            </Modal.Body>
        </Modal>
        
        </>

    )
}

export default BrochureItem
