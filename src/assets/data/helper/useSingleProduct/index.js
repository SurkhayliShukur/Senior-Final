import React, { useState, useEffect } from "react"
import { getSingleProduct } from "../../common"

export const useSingleProduct = (productId) => {
    const [product, setProduct] = useState(null)

    const fetchSingleProduct = async () => {
        try {
            const response = await getSingleProduct(productId)
            setProduct(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchSingleProduct()
    }, [productId])
    return { product, fetchSingleProduct }
}