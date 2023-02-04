import { Box, Button, Center, HStack, Icon, Image, Text } from "native-base";
import { Header } from "../../atomic/molecules/Header";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CartItem } from "../../atomic/atoms/CartItem";

export function Cart() {
    const { goBack, navigate } = useNavigation();

    return (
        <Box p="20px" flex="1" mb="-30px">
            <Box mt="-20px">
                <Header
                    text="My Shopping cart"
                    inverted
                    type={"goBack"}
                    handlePress={goBack}
                />
            </Box>

            <CartItem
                title="SMITH - Trade"
                amount="2"
                image="https://i.imgur.com/zjgFbOM.png"
                price="200"
            />
            <CartItem
                title="SMITH - Trade"
                amount="2"
                image="https://i.imgur.com/zjgFbOM.png"
                price="200"
            />
            <CartItem
                title="SMITH - Trade"
                amount="2"
                image="https://i.imgur.com/zjgFbOM.png"
                price="200"
            />
        </Box>
    );
}
