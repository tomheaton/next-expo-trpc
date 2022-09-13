import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View,} from 'react-native';
import {trpc} from '@next-expo-trpc/react/src/trpc';

const TestScreen = () => {
    const posts = trpc.useQuery(['post.all'], {
        refetchInterval: 3000
    });
    return (
        <SafeAreaView style={styles.container}>
            {posts.data ? (
                <FlatList
                    renderItem={({item}) => (
                        <TouchableOpacity
                            onPress={() => {
                                alert(`You clicked ID ${item.id} `);
                            }}
                        >
                            <View style={styles.item}>
                                <Text>{item.title}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                    data={posts.data}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <Text>{posts.status}</Text>
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        flex: 1,
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
    },
});

export default TestScreen;
