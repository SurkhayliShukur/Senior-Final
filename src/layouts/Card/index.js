import React from "react"
import { useFetchProduct } from "../../assets/data"

export const Card = () => {
    const { data } = useFetchProduct()


    return (
        <>
        <div className="d-flex justify-content-between aligin-items-center my-5">
        {
                data.map((product) => (
                    <div className="card" key={product.id} style={{width:'18rem'}}>
                        <img src={product.image} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h2>{product.title}</h2>
                            <p className="card-text">{product.category}</p>

                        </div>
                    </div>
                ))
            }
        </div>
        </>
    )

}