import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import tw from "@lib/tailwind";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {TestScreen} from "@next-expo-trpc/react-native/src/TestScreen";
import {transformer, trpc} from "@next-expo-trpc/react-native/src/trpc";
import Constants from 'expo-constants';
import {QueryClient, QueryClientProvider} from "react-query";

const { manifest } = Constants;

const localhost = `http://${manifest?.debuggerHost?.split(':').shift()}:3000`;

const App = () => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            url: `${localhost}/api/trpc`,

            async headers() {
                return {};
            },
            transformer,
        }),
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <SafeAreaProvider>
                    <GestureHandlerRootView style={tw`flex-1`}>
                        <StatusBar style={"auto"}/>
                        {/*<MainScreen/>*/}
                        <HelloWorld/>
                    </GestureHandlerRootView>
                </SafeAreaProvider>
            </QueryClientProvider>
        </trpc.Provider>
    );
}

export default App;
