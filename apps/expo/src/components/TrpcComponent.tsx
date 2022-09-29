import React from "react";
import {Text} from "react-native";
import {trpc} from "@utils/trpc";

const TestComponent: React.FC = () => {
    const hello = trpc.hello.hello.useQuery({text: 'next-expo-trpc'});

    return (
        <Text>
            tRPC: {!hello.data ? "Loading..." : hello.data.greeting}
        </Text>
    );
}

export default TestComponent;
