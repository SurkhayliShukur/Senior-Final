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