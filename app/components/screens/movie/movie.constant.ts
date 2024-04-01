import { Dimensions } from "react-native";

const {height} = Dimensions.get('window') //getting the height of the window

export const HEADER_HEIGHT = 350

//1 downscroll 2 - middle 3 - upscroll
export const inputRange = [-HEADER_HEIGHT, 0, HEADER_HEIGHT]