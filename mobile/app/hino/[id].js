import { Stack } from "expo-router";
import Hino from "../../src/components/hymn/Hino";

export default function HinoScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <Hino />
    </>
  );
}
