import ThemedText from "@/components/presentation/ThemedText";
import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [count, setCount] = useState<number>(0);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setCount((c) => c + 1);
      setRefreshing(false);
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <ThemedText>Number of times refreshed: {count}</ThemedText>
      </ScrollView>
    </View>
  );
};

export default PullToRefreshScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
