import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import { DetailBackground } from "../../atomic/atoms/DetailBackground";
import { MainBanner } from "../../atomic/molecules/MainBanner";
import { Card } from "../../atomic/molecules/Card";
import api from "../../service/api";
import { FlatList } from "react-native";
import { Header } from "../../atomic/molecules/Header";
import { CategoryList } from "../../atomic/organism/CategoryList";
import { useNavigation } from "@react-navigation/native";

export type CardProps = {
    title: string;
    price: number;
    model: string;
    image: string;
    id: string;
    handleRedirect?: (id: string) => void;
};

export function Home() {
    const { navigate } = useNavigation();

    const [equipments, setEquipments] = useState<CardProps[]>([]);

    useEffect(() => {
        async function getEquipments() {
            try {
                const { data } = await api.get("equipments");
                setEquipments(data);
            } catch (err) {
                console.log(err);
            }
        }

        getEquipments();
    }, []);

    function handleRedirect(id: string) {
        navigate("Detail", {
            equipmentId: id,
        });
    }

    return (
        <Box flex="1" padding="20px" pt="-10px" position="relative">
            <DetailBackground />
            <FlatList
                ListHeaderComponent={() => (
                    <>
                        <Header text="Choose Your Bike" />
                        <MainBanner />
                        <CategoryList />
                    </>
                )}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                keyExtractor={(item) => item.id}
                data={equipments}
                renderItem={({ item: equipment }) => (
                    <Card
                        onPress={() => {
                            handleRedirect(equipment.id);
                        }}
                        image={equipment.image}
                        id={equipment.id}
                        model={equipment.model}
                        price={equipment.price}
                        title={equipment.title}
                    />
                )}
            />
        </Box>
    );
}
