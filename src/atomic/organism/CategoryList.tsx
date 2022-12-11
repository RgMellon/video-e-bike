import React from "react";
import { Box, HStack, Image, Text } from "native-base";
import { SquareButton } from "../atoms/SquareButton";

import bike from "../../img/categories/subtract.png";
import road from "../../img/categories/road.png";
import helmet from "../../img/categories/helmet.png";
import mountain from "../../img/categories/mountain.png";

export function CategoryList() {
    return (
        <Box
            mb="20px"
            mt="5px"
            width="100%"
            alignSelf="center"
            justifyContent="space-between"
        >
            <HStack justifyContent="space-between" width="95px">
                <Box ml="20px">
                    <SquareButton isGradient>
                        <Text color="white">All</Text>
                    </SquareButton>
                </Box>

                <Box ml="20px" mt="-10px">
                    <SquareButton isGradient={false}>
                        <Image
                            source={bike}
                            alt="icon of a bike"
                            resizeMode="contain"
                        />
                    </SquareButton>
                </Box>

                <Box ml="20px" mt="-20px">
                    <SquareButton isGradient={false}>
                        <Image
                            source={road}
                            alt="icon of a bike"
                            resizeMode="contain"
                        />
                    </SquareButton>
                </Box>

                <Box ml="20px" mt="-30px">
                    <SquareButton isGradient={false}>
                        <Image
                            source={helmet}
                            alt="icon of a bike"
                            resizeMode="contain"
                        />
                    </SquareButton>
                </Box>

                <Box ml="20px" mt="-40px">
                    <SquareButton isGradient={false}>
                        <Image
                            source={mountain}
                            alt="icon of a bike"
                            resizeMode="contain"
                        />
                    </SquareButton>
                </Box>
            </HStack>
        </Box>
    );
}
