import { CategoryType } from '../types/category';
import instance from './instance';

export const listCategory = () => {
    const url = "/categories";
    return instance.get(url);
}
export const readOneCategory = (slug: string) => {
    const url = `/category/${slug}`;
    return instance.get(url);
}
export const addCategory = (category: CategoryType) => {
    const url = '/category';
    return instance.post(url, category);
}
export const updateCategory = (category: CategoryType) => {
    const url = `/category/${category.slug}`;
    return instance.put(url, category);
}
export const removeCategory = (slug: string) => {
    const url = `/category/${slug}`;
    return instance.delete(url);
}