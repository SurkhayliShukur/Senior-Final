import React, { useEffect, useState, useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { getSingleProduct } from "../../assets/data"
import { ThemeContext } from "../../Context/Theme"


export const Detail = () => {
    const { fontColor } = useContext(ThemeContext)
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
                <h1 className="mt-3 " style={{ color: fontColor }}>Detail Pages</h1>
                {
                    product && (
                        <div className="max-w-md border-none d-flex  border-2 rounded-lg lg:max-w-3xl lg:flex font-poppins shadow-lg shadow-primary flex-row mx-auto mt-4">
                            <img
                                className="  details object-cover"
                                src={product.image}
                                alt={product.title}
                            />
                            <div className="py-3 w-100 lg:w-50 text-capitalize text-gray-200 d-flex flex-column justify-content-center align-items-center text-lg lg-text-xl">
                                <h3 className="text-primary fs-3" style={{ color: fontColor }}>
                                    {product.title}
                                </h3>
                                <p className="my-3 lg:my-4" style={{ color: fontColor }}>price: {product.price} $</p>
                                <p className="my-3 lg:my-4" style={{ color: fontColor }}>Discount: {product.discountPrice} $</p>
                                <p className="my-3 lg:my-4" style={{ color: fontColor }}>
                                    total: {product.price - product.discountPrice} $
                                </p>
                                <p className="my-3 lg:my-4" style={{ color: fontColor }}>rating: {product.rating}</p>
                                <p className="text-green-300  dark:text-indigo-300 text-bold my-3 lg:my-6" style={{ color: fontColor }}>
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