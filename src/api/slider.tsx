import { SliderType } from "../types/slider";
import instance from "./instance";

export const listSlider = () => {
    const url = "/sliders";
    return instance.get(url);
}
export const readOneSlider = (id: number | string) => {
    const url = `/slider/${id}`;
    return instance.get(url);
}
export const removeSlider = (id: number | string) => {
    const url = `/slider/${id}`;
    return instance.delete(url);
}
export const addSlider = (slider: SliderType) => {
    const url = `/slider`;
    return instance.post(url, slider);
}
export const updateSlider = (slider: SliderType) => {
    const url = `/slider/${slider._id}`;
    return instance.put(url, slider);
}