import { Dimensions } from "react-native";

const {width,height}=Dimensions.get('window')

export const percentagewidth=(percentage)=>(percentage/100)*width
export const percentageheight=(percentage)=>(percentage/100)*height