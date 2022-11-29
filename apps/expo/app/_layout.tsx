import {Stack} from "expo-router";
import {TRPCProvider} from "@utils/trpc";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";

export default function Layout() {
  return (
    <TRPCProvider>
      <SafeAreaProvider style={{flex: 1}}>
        <SafeAreaView style={{flex: 1}}>
          <Stack screenOptions={{headerShown: false}}/>
        </SafeAreaView>
      </SafeAreaProvider>
    </TRPCProvider>
  );
}
