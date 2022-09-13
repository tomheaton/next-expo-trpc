import tw from "@lib/tailwind";
import {Button, FlatList, SafeAreaView, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {test} from "@utils/index";
import {trpc} from "@utils/trpc";

const MainScreen: React.FC = () => {
    const posts = trpc.useQuery(['post.all'], {
        refetchInterval: 3000
    });

    return (
        <SafeAreaView style={tw`flex-1`}>
            <View style={tw`flex-1 items-center justify-center `}>
                <Text style={tw`text-lg font-bold`}>
                    next + expo + trpc
                </Text>

                <Button
                    title={"test"}
                    onPress={() => test()}
                />

                {posts.data ? (
                    <FlatList
                        data={posts.data}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => {
                                    alert(`You clicked ID ${item.id}`);
                                }}
                            >
                                <View style={tw`p-2 my-2`}>
                                    <Text>
                                        {item.title}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                ) : (
                    <Text>
                        {posts.status}
                    </Text>
                )}
            </View>
        </SafeAreaView>
    );
}

export default MainScreen;
