import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Center } from "native-base";
import { Gradient } from "./Gradient";

type Props = {
    children: React.ReactNode;
    isGradient?: boolean;
} & TouchableOpacityProps;

export function SquareButton({ isGradient = true, children, ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <Center
                shadow="5"
                w="46px"
                padding={2}
                borderRadius="10px"
                h="46px"
                bg="primary.50:alpha.9"
            >
                {isGradient ? <Gradient>{children}</Gradient> : children}
            </Center>
        </TouchableOpacity>
    );
}
