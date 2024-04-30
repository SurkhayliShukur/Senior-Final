import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { ThemeContext } from '../../../Context/Theme';

export const CustomModal = ({ modalShow, onHide, details,}) => {

    const { color, theme, fontColor } = useContext(ThemeContext)
   
    const keys = Object.keys(details)

    return (
        <Modal
            show={modalShow}
            onHide={onHide}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            style={{
                height: "100%",
                overflow: "hidden",
            }}
        >
            <Modal.Header closeButton style={{backgroundColor: theme, color: fontColor}}>
                <Modal.Title id="contained-modal-title-vcenter">
                    Info
                </Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: theme, color: fontColor}}>
                <form className='form-group p-2'>
                    {
                        keys.map((key, index) => (
                            <div className='d-flex' key={index} style={{position: "relative"}}>
                                {
                                    key !== "image" && <>
                                        <p className='m-auto me-2 w-50'>{key.toUpperCase()}:</p>
                                        <input
                                            className='form-control my-1'
                                            type="text"
                                            value={details[key]}
                                            readOnly
                                        />
                                        <button className='btn bi bi-pencil' style={{color: fontColor}}></button>
                                    </>
                                } 
                            </div>
                        ))
                    }
                </form>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: theme, color: fontColor}}>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
      
    )
}