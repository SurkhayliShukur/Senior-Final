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
export const getSingleProduct = (userId) => {
    return instanceAxios({
        method: "GET",
        url: ENDPOINTS.PRODUCT_ID(userId)
    })
}
export const editProduct = (productId, newProduct) => {
    return instanceAxios({
        method: "PUT",
        url: ENDPOINTS.PRODUCT_ID(productId),
        data: newProduct
    })
}