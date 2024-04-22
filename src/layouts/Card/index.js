import React, { useContext } from "react"
import { useFetchProduct } from "../../assets/data"
import { ThemeContext } from "../../Context/Theme"


export const Card = () => {
    const { color } = useContext(ThemeContext)
    const { data } = useFetchProduct()

    return (
        <>
            <div className="d-flex justify-content-between aligin-items-center my-5 flex-wrap">
                {
                    data.map((product) => (
                        <div className="card text-center " key={product.id} style={{ width: '18rem' }}>
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h2>{product.title}</h2>
                                <p className="card-text">{product.category}</p>
                                <p className="card-text fw-bold fs-5" style={{ color: color }}>{product.price}</p>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button type="button" class="btn btn-primary">Primary</button>
                                    <button type="button" class="btn btn-secondary">Secondary</button>
                                    <button type="button" class="btn btn-success">Success</button>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )

}