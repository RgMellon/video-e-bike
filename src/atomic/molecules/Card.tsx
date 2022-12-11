import { Box, Image, Text } from "native-base";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { CardProps } from "../../page/Home";
import { TextAlpha50 } from "../atoms/TextAlpha50";

type Props = CardProps & TouchableOpacityProps;

export function Card({
    id,
    image,
    price,
    model,
    title,
    handleRedirect,
    ...rest
}: Props) {
    return (
        <TouchableOpacity
            style={{ padding: 5, width: "50%", height: 240, opacity: 0.9 }}
            {...rest}
        >
            <Box
                borderRadius="20px"
                p="4"
                flex="1"
                shadow="5"
                bg="primary.50:alpha.9"
                justifyContent="center"
                alignItems="center"
            >
                <Box>
                    <Image
                        src={image}
                        width="121px"
                        h="80px"
                        alt="image"
                        resizeMode="contain"
                    />
                    <Box mt="17px">
                        <TextAlpha50 text={title} />
                        <Text fontSize="md" bold color="white">
                            {model}
                        </Text>
                        <TextAlpha50 text={`RS ${price}`} />
                    </Box>
                </Box>
            </Box>
        </TouchableOpacity>
    );
}
