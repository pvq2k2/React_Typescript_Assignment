export type ProductType = {
    _id?: number | string,
    slug?: string,
    name: string,
    price: number,
    img: string,
    quantity?: number,
    category: string
}