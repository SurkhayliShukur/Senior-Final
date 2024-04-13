import React, { useState } from 'react'

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
    const [addProduct, setAddProduct] = useState(initialState)

    const handleInput = (event) => {
        const { name, value } = event.target
        setAddProduct((prevProduct) => ({
            ...prevProduct,
            [name]: value
        }))
    }
    return (
        <div>index</div>
    )
}

export default Add