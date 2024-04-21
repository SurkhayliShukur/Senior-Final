import React from "react"
import { useFetchProduct } from "../../assets/data"

export const Card = () => {
    const { data } = useFetchProduct()


    return (
        <>
            {
                data.map((product) => (
                    <div class="card" key={product.id} style="width: 18rem;">
                        <img src={product.image} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h2>{product.title}</h2>
                            <p class="card-text">{product.category}</p>
                        </div>
                    </div>
                ))
            }


        </>
    )

}