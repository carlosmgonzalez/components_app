import ThemedText from "@/components/presentation/ThemedText";
import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";

const ModalScreen = () => {
  const theme = useColorScheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          router.push("/modal/modal");
        }}
        style={[
          styles.button,
          {
            backgroundColor:
              theme === "dark" ? "rgb(255,255,255)" : "rgb(30,30,30)",
          },
        ]}
      >
        <Text
          style={{
            color: theme === "dark" ? "dark" : "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          Open Modal
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default ModalScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
});
