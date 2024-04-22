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
                        <div className="card text-center " key={product.id} style={{ width: '20rem', height: 'auto', }}>
                            <img src={product.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <span className="text-secondary fs-5">title</span>
                                <h2 className="fs-4 text-uppercase">{product.title}</h2>
                                <span className="text-secondary fs-5">category</span>
                                <p className="card-text">{product.category}</p>
                                <span className="text-secondary fs-5">price</span>
                                <p className="card-text fw-bold fs-3" style={{ color: color }}>{product.price}</p>
                                <div className="d-flex justify-content-center align-items-center">
                                    <button type="button" className="btn btn-primary">Primary</button>
                                    <button type="button" className="btn btn-secondary">Secondary</button>
                                    <button type="button" className="btn btn-success">Success</button>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )

}