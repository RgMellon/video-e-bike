import React from "react";
import { Box, Icon, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { SquareButton } from "../atoms/SquareButton";

type Props = {
    text: string;
    inverted?: boolean;
    type?: "goBack" | "default" | "down";
    handlePress: () => void;
};

export function Header({
    text,
    inverted = false,
    type = "default",
    handlePress,
}: Props) {
    const iconModifier = {
        default: "search1",
        goBack: "left",
        down: "down",
    };

    return (
        <Box
            h="100px"
            alignItems="center"
            mt="26"
            flexDirection="row"
            justifyContent={inverted ? "flex-start" : "space-between"}
        >
            {!inverted && (
                <Text fontSize="lg" fontWeight="bold" color="white">
                    {text}
                </Text>
            )}

            <SquareButton onPress={handlePress}>
                <Icon as={AntDesign} name={iconModifier[type]} color="white" />
            </SquareButton>

            {inverted && (
                <Text fontSize="lg" fontWeight="bold" ml="56px" color="white">
                    {text}
                </Text>
            )}
        </Box>
    );
}
