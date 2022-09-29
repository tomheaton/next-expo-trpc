import React, {useState} from "react";
import {Text, View} from 'react-native';
import tw from "@lib/tailwind";
import {getBaseUrl, trpc} from "@utils/trpc";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {httpBatchLink} from '@trpc/client';
import TrpcComponent from "@components/TrpcComponent";
import superjson from 'superjson';

const App: React.FC = () => {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            transformer: superjson,
            links: [
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                    headers() {
                        return {};
                    },
                }),
            ],
        })
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <View style={tw`flex-1 items-center justify-center`}>
                    <Text style={tw`font-bold text-5xl`}>
                        next-expo-trpc
                    </Text>

                    <TrpcComponent/>
                </View>
            </QueryClientProvider>
        </trpc.Provider>
    );
}

export default App;
