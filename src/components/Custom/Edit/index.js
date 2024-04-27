import React, { useState, useRef, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { editProduct } from "../../../assets/data"
import { SketchPicker } from "react-color";
import { getSingleProduct } from "../../../assets/data";
import { toast } from "react-toastify"
import moment from 'moment';

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

export const Edit = () => {
    const inputRef = useRef(null)
    const { id } = useParams()
    const [newProduct, setNewProduct] = useState(initialState)
    const navigate = useNavigate()

    const fetchUser = async () => {
        try {
            const response = await getSingleProduct(id);
            console.log("Response from getSingleProduct:", response);
            if (response.data) {
                console.log("response", response.data)
                setNewProduct(response.data);
            } else {
                console.error("No data returned from getSingleProduct");
            }
        } catch (error) {
            console.error("Error fetching user:", error);
        }
    };


    const handleEditProduct = async () => {
        try {
            await editProduct(id, newProduct)
            setNewProduct(initialState)
            toast.success("User edited successfully!", {
                autoClose: 1000,
            });
            setTimeout(() => {
                navigate("/products-list")
            }, 1500)
        }
        catch (err) {
            console.log(err)
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
        fetchUser()
    }, [])

    console.log("newProduct.title", newProduct.title)

    return (
        <>
            <h2 className='my-3'>Edit</h2>
            <form>
                <div className='d-flex justify-content-center align-items-center p-5 '>
                    <div>
                        <div className='my-3'>
                            <input
                                type="text"
                                className="form-control"
                                aria-label="Sizing example input"
                                value={newProduct.title}
                                name='title'
                                placeholder='title'
                                onChange={handleInput}
                                ref={inputRef}
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
                            onClick={handleEditProduct}

                        >
                            Edit
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