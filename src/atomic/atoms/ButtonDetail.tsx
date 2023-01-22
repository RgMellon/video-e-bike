import { Button, IButtonProps } from "native-base";
import React from "react";

type ButtonDetailProps = {
    title: string;
} & IButtonProps;

export function ButtonDetail({ title, ...rest }: ButtonDetailProps) {
    return (
        <Button
            _pressed={{ bgColor: "primary.50" }}
            shadow="1"
            borderRadius="10"
            bg="primary.10"
            w="149"
            h="43"
            {...rest}
        >
            {title}
        </Button>
    );
}
