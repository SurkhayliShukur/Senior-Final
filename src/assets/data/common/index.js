import { ENDPOINTS } from "../../../constant/endpoints";
import { instanceAxios } from "../services";

export const addProduct = (newProduct) => {
    return instanceAxios({
        method: "POST",
        url: ENDPOINTS.PRODUCT,
        data: newProduct,
    })
}

export const getProduct = (params) => {
    return instanceAxios({
        method: "GET",
        url: ENDPOINTS.PRODUCT,
        params
    })
}
export const deleteProduct = (productId) => {
    return instanceAxios({
        method: "DELETE",
        url: ENDPOINTS.PRODUCT_ID(productId)
    })
}
export const getSingleProduct = (productId) => {
    return instanceAxios({
        method: "DELETE",
        url: ENDPOINTS.PRODUCT_ID(productId)
    })
}