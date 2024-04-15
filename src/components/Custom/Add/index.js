import React, { useState, useRef, useEffect } from 'react'
import { toast } from "react-toastify"
import { addProduct } from '../../../assets/data/common';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { SketchPicker } from "react-color";

const createDate = moment().valueOf();

const initialState = {
    title: "",
    description: "",
    price: 0,
    discountPrice: 0,
    rating: 0,
    stock: 0,
    category: "",
    image: "",
    create_at: createDate,
    color: "#000",
}
const Add = () => {
    const ref = useRef(null)
    const navigate = useNavigate()
    const [newProduct, setNewProduct] = useState(initialState)

    const isEmpty = Object.values(newProduct).some(
        (value) => value === "" || value === 0
    );

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (isEmpty) {
            toast.error("Please fill in all fields", {
                autoClose: 1000,
            });
            try {
                await addProduct(newProduct)
                toast.success("Product added successfully!", {
                    autoClose: 1000,
                });
                setNewProduct(initialState)
                setTimeout(() => {
                    navigate("/customers")
                }, 1500)
            }
            catch (err) {
                throw new Error("err", err)
               
            }
        }
    }

    const handleInput = (event) => {
        const { name, value } = event.target
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }))
    }
    useEffect(() => {
        ref.current.focus()
    }, [])

    return (
        <>
                <div className='d-flex justify-content-center flex-column align-items-center p-5'>
                    <div className='my-3'>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            value={newProduct.title}
                            name='title'
                            placeholder='title'
                            onChange={handleInput}
                            ref={ref}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            value={newProduct.description}
                            name='description'
                            onChange={handleInput}
                            placeholder='description'
                        />
                    </div>
                    <div className='my-3'>
                        <input
                            type="number"
                            className="form-control"
                            aria-label="Sizing example input"
                            value={newProduct.price}
                            name='price'
                            onChange={handleInput}
                            placeholder='price'
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            className="form-control"
                            aria-label="Sizing example input"
                            value={newProduct.discountPrice}
                            name='discountPrice'
                            onChange={handleInput}
                        />
                    </div>
                    <div className='my-3'>
                        <input
                            type="number"
                            className="form-control"
                            aria-label="Sizing example input"
                            value={newProduct.rating}
                            name='rating'
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <input
                            type="number"
                            className="form-control"
                            aria-label="Sizing example input"
                            value={newProduct.stock}
                            name='stock'
                            onChange={handleInput}
                        />
                    </div>
                    <div className='my-3'>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            value={newProduct.category}
                            name='category'
                            onChange={handleInput}
                            placeholder='category'
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            className="form-control"
                            aria-label="Sizing example input"
                            value={newProduct.image}
                            name='image'
                            onChange={handleInput}
                            placeholder='image'
                        />
                    </div>
                    <button
                        type='button'
                        className='btn btn-primary my-3'
                        onClick={handleFormSubmit}
                        >
                        Add
                    </button>
                    <div className=' my-3'>
                        <SketchPicker
                            color={newProduct.color}
                            onChange={(color) => {
                                setNewProduct((prevProduct) => ({
                                    ...prevProduct,
                                    color: color.hex
                                }))
                            }}
                        />
                    </div>
                </div>

        </>
    )
}

export default Add