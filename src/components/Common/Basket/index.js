import React, { useState, useEffect } from 'react'

export const Basket = ({ basket, isShow }) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const calculatedTotal = basket.reduce((sum, product) => sum + product.price, 0);
        setTotal(calculatedTotal);
    }, [basket]);

    return (
        <>
            {
                isShow && <div style={{
                    position: "fixed",
                    top: "1rem", right: "1rem",
                    width: "520px",
                    height: "400px",
                    padding: "1rem",
                    backgroundColor: "white",
                    border: "1px solid black",
                    overflow: "auto"
                }}>
                    <div className='d-flex align-items-center flex-column gap-3'>
                        <h1>Basket</h1>
                        {
                            basket.map((product, index) => (
                                <div key={index} className='d-flex align-items-center gap-3 border'>
                                    <img src={product.image} style={{ width: "90px" }} />
                                    <p>{product.description}</p>
                                </div>
                            ))
                        }
                        <div>
                            <h3>Total Price <br/> ${Math.ceil(total)}</h3>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}