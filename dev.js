import { Dimensions } from "react-native";

import { StatusBar } from "react-native";


export const dWidth = Dimensions.get("screen").width;
export const dHeight = Dimensions.get("height").width;

export let statmar = StatusBar.currentHeight;

