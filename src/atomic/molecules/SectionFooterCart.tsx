import { HStack, Text } from "native-base";
import React from "react";

type Props = {
    title: string;
    value: string;
};

export function SectionFooterCart({ title, value }: Props) {
    return (
        <HStack justifyContent="space-between" mb="4">
            <Text fontSize="sm" color="white" bold>
                {title} :
            </Text>
            <Text fontSize="sm" color="white:alpha.50">
                R$ {value}
            </Text>
        </HStack>
    );
}
