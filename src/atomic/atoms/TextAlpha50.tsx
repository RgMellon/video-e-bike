import React  from "react";
import { Text } from "native-base";

type Props ={
    text: string
}

export function TextAlpha50 ({ text } : Props ) {
    return  <Text fontSize="sm" bold color="white:alpha.50">{text}</Text>
}