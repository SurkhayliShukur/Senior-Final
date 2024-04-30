import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increamentBalance } from "../../../features/slices/walletSlice";
import { Modal, Button } from "react-bootstrap";

export const AddAmount = ({ modalShow, onHide }) => {

    const [amounth, setAmounth] = useState(0);
    const dispatch = useDispatch()

    const handleAddAmount = () => {
        dispatch(
            increamentBalance(Number(amounth)),
            setAmounth(""),
            onHide()
        )
    }


    return (
        <>
            <Modal
                show={modalShow}
                onHide={onHide}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        Add Amounth
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex flex-column align-items-center">
                        <input
                            type="text"
                            placeholder="Balance"
                            value={amounth}
                            onChange={(e) => setAmounth(e.target.value)}
                        />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        className="btn btn-primary mx-2"
                        onClick={handleAddAmount}
                    >
                        Add Amount
                    </Button>
                </Modal.Footer>


            </Modal>
        </>
    )
}