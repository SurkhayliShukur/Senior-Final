import React, { useState } from 'react'
import { toast } from "react-toastify"
import { addProduct } from '../../../assets/data/common';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate()
    const [newProduct, setNewProduct] = useState(initialState)

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        if (isEmpty) {
            toast.error("Please fill in all fields", {
                autoClose: 1000,
            });
            try {
                await addProduct(newProduct)
                setNewProduct(initialState)
                setTimeout(() => {
                    navigate("/customers")
                },1500)
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

    return (
        <div>index</div>
    )
}

export default Add