import React from "react";
import {trpc} from "@utils/trpc";
import {CustomText} from "@components/index";

const TRPCComponent: React.FC = () => {
  const hello = trpc.hello.hello.useQuery({text: '@next-expo-trpc/mobile'});

  return (
    <CustomText>
      tRPC: {!hello.data ? "Loading..." : hello.data.greeting}
    </CustomText>
  );
}

export default TRPCComponent;
