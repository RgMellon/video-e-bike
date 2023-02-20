import React, { ReactNode } from "react";
import { View } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

type Props = {
    children: ReactNode;
    leftAction: ReactNode;
    handleSwipe: () => void;
};

export function SwipeableButton({ children, leftAction, handleSwipe }: Props) {
    return (
        <View>
            <Swipeable
                rightThreshold={145}
                overshootRight={false}
                onSwipeableLeftOpen={handleSwipe}
                renderLeftActions={() => leftAction}
            >
                {children}
            </Swipeable>
        </View>
    );
}
