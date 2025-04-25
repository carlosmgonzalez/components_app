import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function ModalLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen
        name="model"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
