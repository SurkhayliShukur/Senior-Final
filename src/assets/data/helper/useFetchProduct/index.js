import { useState, useEffect } from "react"
import { getProduct } from "../../common"

export const useFetchProduct = () => {
    const [data, setData] = useState([])

    const fetchProducts = async () => {
        try {
            const response = await getProduct()
            setData(response.data)
        }
        catch (err) {
            console.log(err)
        }
    }
    useEffect(() => {
        fetchProducts()
    }, [])

    return { data, fetchProducts }

}