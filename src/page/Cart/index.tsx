import {
    Box,
    Button,
    Center,
    HStack,
    Icon,
    Image,
    ScrollView,
    Text,
} from "native-base";
import { Header } from "../../atomic/molecules/Header";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CartItem } from "../../atomic/atoms/CartItem";
import { SectionFooterCart } from "../../atomic/molecules/SectionFooterCart";
import { SwipeableButton } from "../../atomic/molecules/SwipeableButton";

export function Cart() {
    const { goBack, navigate } = useNavigation();

    return (
        <Box p="20px" flex="1" mb="-30px" justifyContent="space-between">
            <Box h="68%">
                <Box mt="-20px">
                    <Header
                        text="My Shopping cart"
                        inverted
                        type={"goBack"}
                        handlePress={goBack}
                    />
                </Box>

                <ScrollView>
                    {[0, 1, 2].map(() => (
                        <CartItem
                            title="SMITH - Trade"
                            amount="2"
                            image="https://i.imgur.com/zjgFbOM.png"
                            price="200"
                        />
                    ))}
                </ScrollView>
            </Box>

            <Box mb="50px">
                <SectionFooterCart title="SubTotal" value="200" />
                <SectionFooterCart title="Delivery Fee " value="0" />
                <SectionFooterCart title="Total " value="250" />

                <Center mt="5">
                    <Box
                        w="140px"
                        h="40px"
                        bg="primary.50"
                        justifyContent="center"
                        borderRadius="8px"
                    >
                        <SwipeableButton
                            handleSwipe={() => {
                                alert("oi");
                            }}
                            leftAction={
                                <Box
                                    w="140px"
                                    justifyContent="center"
                                    bg="primary.50"
                                    borderRadius="8px"
                                />
                            }
                        >
                            <Button
                                w="40px"
                                height="40px"
                                alignItems="center"
                                justifyContent="center"
                            >
                                <Icon
                                    as={AntDesign}
                                    name="right"
                                    color="white"
                                />
                            </Button>
                        </SwipeableButton>
                        <Text
                            zIndex="-1"
                            color="white"
                            left="50px"
                            position="absolute"
                        >
                            Checkout
                        </Text>
                    </Box>
                </Center>
            </Box>
        </Box>
    );
}
