import { View, Text, StyleSheet } from "react-native";
import React from "react";
import ThemedText from "@/components/presentation/ThemedText";

const Modal = () => {
  return (
    <View style={styles.container}>
      <ThemedText>Modal</ThemedText>
    </View>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
