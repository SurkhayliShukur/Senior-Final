import React, { useState, useRef, useEffect, useContext } from 'react'
import { toast } from "react-toastify"
import { addProduct } from '../../../assets/data/common';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import { SketchPicker } from "react-color";
import { ThemeContext } from '../../../Context/Theme';

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
    const { fontColor } = useContext(ThemeContext)
    const ref = useRef(null)
    const navigate = useNavigate()
    const [newProduct, setNewProduct] = useState(initialState)

    const isEmpty = Object.values(newProduct).some(
        (value) => value === "" || value === 0
    );

    const handleFormSubmit = async () => {

        if (isEmpty) {
            toast.error("Please fill in all fields", {
                autoClose: 1000,
            });
            return;
        }
        try {
            await addProduct(newProduct);
            toast.success("Product added successfully!", {
                autoClose: 1000,
            });
            setNewProduct(initialState);
            setTimeout(() => {
                navigate("/products-list");
            }, 1500);
        } catch (err) {
            console.error("Error adding product:", err);
            toast.error("Failed to add product. Please try again later.", {
                autoClose: 1000,
            });
        }
    };


    const handleInput = (event) => {
        const { name, value } = event.target
        setNewProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }))
    }
    useEffect(() => {
        ref.current.focus()
    }, [ref])

    return (
        <>
            <h2 className='my-3'>Add</h2>
            <form>
                <div className='d-flex justify-content-center align-items-center p-5 '>
                    <div>

                        <div className='my-3'>
                            <label className='my-2' style={{ color: fontColor }}>title</label>
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
                            <label className='my-2' style={{ color: fontColor }}>description</label>
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
                            <label className='my-2' style={{ color: fontColor }}>price</label>
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
                            <label className='my-2' style={{ color: fontColor }}>discountPrice</label>
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
                            <label className='my-2' style={{ color: fontColor }}>rating</label>
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
                            <label className='my-2' style={{ color: fontColor }}>stock</label>
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
                            <label className='my-2' style={{ color: fontColor }}>category</label>
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
                            <label className='my-2' style={{ color: fontColor }}>image</label>
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
                    </div>

                    <div className=' mx-5'>
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
            </form>
        </>
    )
}

export default Add