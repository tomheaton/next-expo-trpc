import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'expo-status-bar';
import tw from "@lib/tailwind";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import MainScreen from "@screens/MainScreen";

const App = () => {
    return (
        <SafeAreaProvider>
            <GestureHandlerRootView style={tw`flex-1`}>
                <StatusBar style={"auto"}/>
                <MainScreen/>
            </GestureHandlerRootView>
        </SafeAreaProvider>
    );
}

export default App;
