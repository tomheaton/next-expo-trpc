import Constants from "expo-constants";

const {manifest} = Constants;

export * from '@next-expo-trpc/react-native/src/trpc';

export const getBaseUrl = (): string => {
    // assume localhost
    if (__DEV__)
        return `http://${manifest.debuggerHost?.split(":").shift()}:3000`;

    // assume production
    return `${manifest.extra?.apiUrl}`;
}
