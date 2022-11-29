import React, {useEffect, useState} from "react";
import {SplashScreen} from "expo-router";
import {CustomText, CustomView} from "@components/index";
import {add} from "@utils/index";
import TrpcComponent from "@components/TRPCComponent";

export default function Index() {
  const [isReady, setReady] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setReady(true);
    }, 1000);
  }, []);

  if (!isReady) {
    return <SplashScreen/>
  }

  return (
    <CustomView className={"flex flex-col items-center justify-center p-4"}>
      <CustomText className={"font-bold text-5xl"}>
        next-expo-trpc
      </CustomText>

      <CustomText>
        Add: 5 + 7 = {add(5, 7)}
      </CustomText>

      <TrpcComponent/>
    </CustomView>
  );
};
