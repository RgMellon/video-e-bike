import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../page/Home";
import { Detail } from "../page/Detail";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    );
}
