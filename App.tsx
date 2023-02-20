import { Box, NativeBaseProvider } from "native-base";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./src/routes/app.routes";

import { theme } from "./src/styles/theme";

const navigationTheme = DefaultTheme;
navigationTheme.colors.background = theme.colors.primary[100];

export default function App() {
    return (
        <NativeBaseProvider theme={theme}>
            <Box flex="1" safeAreaTop bg={theme.colors.primary[100]}>
                <GestureHandlerRootView style={{ flex: 1 }}>
                    <NavigationContainer theme={navigationTheme}>
                        <AppRoutes />
                    </NavigationContainer>
                </GestureHandlerRootView>
            </Box>
        </NativeBaseProvider>
    );
}
