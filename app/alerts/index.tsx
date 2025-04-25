import ThemedText from "@/components/presentation/ThemedText";
import {
  View,
  Text,
  Alert,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from "react-native";

const AlertsScreen = () => {
  const theme = useColorScheme();

  const createTwoButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert("Alert Title", "My Alert Msg", [
      {
        text: "Ask me later",
        onPress: () => console.log("Ask me later pressed"),
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={createTwoButtonAlert}
        style={[
          styles.button,
          {
            backgroundColor:
              theme === "dark" ? "rgba(10,10,10,0.8)" : "rgba(200,200,200,0.8)",
          },
        ]}
      >
        <ThemedText type="h2">2 Button Alert</ThemedText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={createThreeButtonAlert}
        style={[
          styles.button,
          {
            backgroundColor:
              theme === "dark" ? "rgba(10,10,10,0.8)" : "rgba(200,200,200,0.8)",
          },
        ]}
      >
        <ThemedText type="h2">3 Button Alert</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default AlertsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    padding: 5,
    borderRadius: 5,
  },
});
