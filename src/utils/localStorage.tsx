import { ProductType } from "../types/product";
import { UserType } from "../types/user";

export const authenticated = (user: UserType, next: () => void) => {
    localStorage.setItem("user", JSON.stringify(user));
    next();
}

export const isAuthenticate = () => {
    if (!localStorage.getItem("user")) return;
    return JSON.parse(localStorage.getItem("user") as string);
}
let cart: any = [];
if (localStorage.getItem("cart")) {
    cart = JSON.parse(localStorage.cart);
}

// eslint-disable-next-line import/prefer-default-export
export const addToCart = (newProduct: ProductType, callback: () => void) => {
    console.log(1);
    
    const existProduct = cart.find((item: ProductType) => item._id === newProduct._id);
    if (!existProduct) {
        cart.push(newProduct);
    } else {
        // eslint-disable-next-line no-plusplus
        existProduct.quantity += newProduct.quantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    callback();
};

export const increaseQuantity = (id: number | string, callback: () => void) => {
    // eslint-disable-next-line no-plusplus
    cart.find((item: ProductType) => item._id === id).quantity++;
    localStorage.setItem("cart", JSON.stringify(cart));
    callback();
};
export const decreaseQuantity = (id: number | string, callback: () => void) => {
    const currentProduct = cart.find((item: ProductType) => item._id === id);
    // eslint-disable-next-line no-plusplus
    currentProduct.quantity--;

    if (currentProduct.quantity < 1) {
        // eslint-disable-next-line no-alert
        const confirm = window.confirm("Are you sure you want to delete this item?");
        if (confirm) {
            cart = cart.filter((item: ProductType) => item._id !== id);
            // toastr.success("Delete successfully!");
        } else {
            currentProduct.quantity = 1;
        }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    callback();
};
export const removeItemInCart = (id: number | string, callback: () => void) => {
    // eslint-disable-next-line no-alert
    const confirm = window.confirm("Are you sure you want to delete this item?");
    if (confirm) {
        cart = cart.filter((item: ProductType) => item._id !== id);
        // toastr.success("Delete successfully!");
    } else {
        // toastr.error("Delete finally!");
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    callback();
};