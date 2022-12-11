import React, { useEffect, useState } from "react";
import { Box, Image, Text } from "native-base";
import { SafeAreaView } from "react-native";
import { useRoute } from "@react-navigation/native";
import api from "../../service/api";
import { CardProps } from "../Home";

import rectangle from "../../img/rectangle.png";

type RouteParams = {
    equipmentId: string;
};

export function Detail() {
    const route = useRoute();
    const { equipmentId } = route.params as RouteParams;

    const [equipment, setEquipment] = useState<CardProps>({} as CardProps);

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

    return (
        <SafeAreaView>
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
            </Box>
        </SafeAreaView>
    );
}
