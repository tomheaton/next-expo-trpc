import tw from "@lib/tailwind";
import {Text, View} from "react-native";
import React from "react";

const MainScreen: React.FC = () => {
    return (
        <View style={tw`flex-1 items-center justify-center`}>
            <Text style={tw`text-lg font-bold`}>
                next + expo + trpc
            </Text>
        </View>
    );
}

export default MainScreen;
