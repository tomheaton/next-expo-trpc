import React from "react";
import {trpc} from "@utils/trpc";

const TRPCComponent: React.FC = () => {
  const hello = trpc.hello.hello.useQuery({text: '@next-expo-trpc/web'});

  return (
    <p>
      tRPC: {!hello.data ? "Loading..." : hello.data.greeting}
    </p>
  );
}

export default TRPCComponent;
