import { ProductType } from "../types/product";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const { token, user } = isAuthenticate();
export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const read = (id: number | string) => {
    const url = `/products/${id}`;
    return instance.get(url);
}
export const readOneProduct = (slug: string) => {
    const url = `/product/${slug}`;
    return instance.get(url);
}
export const remove = (id: number | string) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}
export const add = (product: ProductType) => {
    const url = `/product/${user._id}`;
    return instance.post(url, product, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const update = (product: ProductType) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product);
}