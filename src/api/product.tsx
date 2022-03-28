import { ProductType } from "../types/product";
import instance from "./instance";

export const list = () => {
    const url = "/products";
    return instance.get(url);
}
export const read = (id: number | string) => {
    const url = `/product/${id}`;
    return instance.get(url);
}
export const remove = (id: number | string) => {
    const url = `/product/${id}`;
    return instance.delete(url);
}
export const add = (product: ProductType) => {
    const url = `/product`;
    return instance.post(url, product);
}
export const update = (product: ProductType) => {
    const url = `/product/${product._id}`;
    return instance.put(url, product);
}