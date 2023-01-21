import { Button } from "native-base";
import React from "react";

type ButtonDetailProps = {
    title: string;
};

export function ButtonDetail({ title }: ButtonDetailProps) {
    return (
        <Button
            _pressed={{ bgColor: "primary.50" }}
            shadow="1"
            borderRadius="10"
            bg="primary.10"
            w="149"
            h="43"
        >
            {title}
        </Button>
    );
}
