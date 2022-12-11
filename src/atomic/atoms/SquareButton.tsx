import React from "react";
import { TouchableOpacity } from "react-native";
import { Center } from "native-base";
import { Gradient } from "./Gradient";

type Props = {
    children: React.ReactNode;
    isGradient?: boolean;
};

export function SquareButton({ isGradient = true, children }: Props) {
    return (
        <TouchableOpacity>
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
