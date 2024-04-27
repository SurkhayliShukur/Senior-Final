import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getSingleProduct } from "../../assets/data"


export const Detail = () => {
    const [product, setProduct] = useState("")
    const { id } = useParams()
    const navigate = useNavigate()

    const fetchUsersId = async () => {
        try {
            const response = await getSingleProduct(id)
            setProduct(response.data)
        }
        catch (err) {
            console.log(err)
            throw new Error("Error", err)
        }
    }

    useEffect(() => {
        fetchUsersId()
    }, [])


    return (
        <>
            <section className="py-10">
                <h1 className="mb-8">Detail Pages</h1>
                {
                    product && (
                        <div className="max-w-md border border-primary border-2 rounded-lg lg:max-w-3xl lg:flex font-poppins shadow-lg shadow-primary flex-row mx-auto">
                            <img
                                className="img-fluid w-100 lg:w-50 lg:h-555 object-cover"
                                src={product.image}
                                alt={product.title}
                            />
                            <div className="py-3 w-100 lg:w-50 text-capitalize text-gray-200 d-flex flex-column justify-content-center align-items-center text-lg lg-text-xl">
                                <h3 className="text-primary fs-3">
                                    {product.title}
                                </h3>
                                <p className="my-3 lg:my-4">price: {product.price} $</p>
                                <p className="my-3 lg:my-4">Discount: {product.discountPrice} $</p>
                                <p className="my-3 lg:my-4">
                                    total: {product.price - product.discountPrice} $
                                </p>
                                <p className="my-3 lg:my-4">rating: {product.rating}</p>
                                <p className="text-green-300  dark:text-indigo-300 text-bold my-3 lg:my-6">
                                    category: {product.category}
                                </p>
                            </div>
                        </div>
                    )
                }
            </section>
        </>
    )
}