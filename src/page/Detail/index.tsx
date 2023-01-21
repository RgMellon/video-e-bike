import React, { useEffect, useState } from "react";
import { Box, Button, HStack, Image, Text } from "native-base";
import { useRoute } from "@react-navigation/native";
import api from "../../service/api";
import { CardProps } from "../Home";

import Animated, {
    Easing,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

import rectangle from "../../img/rectangle.png";
import { ImagePreview } from "../../atomic/atoms/ImagePreview";
import { ButtonDetail } from "../../atomic/atoms/ButtonDetail";

type RouteParams = {
    equipmentId: string;
};

export function Detail() {
    const route = useRoute();

    const { equipmentId } = route.params as RouteParams;
    const [equipment, setEquipment] = useState<CardProps>({} as CardProps);
    const [showDescription, setShowDescription] = useState(true);

    const cardOffset = useSharedValue(460);

    useEffect(() => {
        async function getEquipmentById() {
            try {
                const response = await api.get(`equipments/${equipmentId}`);

                setEquipment(response.data);
            } catch (err) {
                alert("Ops, algo de errado ocorreu");
            }
        }

        getEquipmentById();
    }, []);

    function handleToggleFooter() {
        setShowDescription((old) => !old);
    }

    function handleDescription() {
        handleToggleFooter();

        if (showDescription) {
            cardOffset.value = withTiming(1, {
                duration: 500,
                easing: Easing.bezier(0.25, 0.1, 0.25, 1),
            });
        } else {
            cardOffset.value = withTiming(460, {
                duration: 500,
            });
        }
    }

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY: cardOffset.value,
                },
            ],
        };
    });

    return (
        <>
            <Box
                flex="1"
                position="relative"
                justifyContent="center"
                alignItems="center"
            >
                <Image
                    source={rectangle}
                    alt="image detail"
                    position="absolute"
                    top="-50"
                    right="0"
                    bottom="0"
                />

                <ImagePreview
                    showDescription={showDescription}
                    image={equipment.image}
                    alt={equipment.title}
                />
            </Box>

            {showDescription ? (
                <Box
                    bg="primary.100"
                    justifyContent="center"
                    p="7"
                    borderRadius={30}
                    shadow={5}
                    h="110px"
                >
                    <HStack w="100%" justifyContent="space-between">
                        <ButtonDetail
                            title="Description"
                            onPress={handleDescription}
                        />

                        <ButtonDetail title="Specification" />
                    </HStack>
                </Box>
            ) : (
                <Animated.View style={animatedStyle}>
                    <Box
                        bg="primary.100"
                        borderTopRadius={30}
                        shadow={5}
                        h={showDescription ? "110px" : "460px"}
                    >
                        <Box pl="7" p="7" pt="7">
                            <HStack w="100%" justifyContent="space-between">
                                <ButtonDetail
                                    title="Description"
                                    onPress={handleDescription}
                                />

                                <ButtonDetail title="Specification" />
                            </HStack>

                            <Box mt="30">
                                <Text bold color="white" fontSize="17">
                                    {equipment.title}
                                </Text>

                                <Text color="white" opacity="0.6" mt="8">
                                    The LR01 uses the same design as the most
                                    iconic bikes from PEUGEOT Cycles' 130-year
                                    history and combines it with agile, dynamic
                                    performance that's perfectly suited to
                                    navigating today's cities. As well as a
                                    lugged steel frame and iconic PEUGEOT
                                    black-and-white chequer design, this city
                                    bike also features a 16-speed Shimano Claris
                                    drivetrain.
                                </Text>
                            </Box>
                        </Box>
                        <HStack
                            bg="primary.200"
                            borderTopRadius={30}
                            justifyContent="space-between"
                            shadow={5}
                            h={100}
                            w={"100%"}
                            mt="30"
                            alignItems="center"
                            p="7"
                        >
                            <Text bold color="ocean.200" fontSize="17">
                                {equipment.price}
                            </Text>

                            <Button
                                w="149"
                                h="43"
                                justifyContent="center"
                                alignItems="center"
                                borderRadius="10px"
                                shadow={5}
                                bg="ocean.200"
                                _pressed={{ bgColor: "ocean.100" }}
                                onPress={() => {}}
                            >
                                Add to Cart
                            </Button>
                        </HStack>
                    </Box>
                </Animated.View>
            )}
        </>
    );
}
