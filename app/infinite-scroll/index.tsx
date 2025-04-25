import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ActivityIndicator,
} from "react-native";

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5]);

  const loadMoreNumbers = () => {
    const newNumbers = Array.from(
      { length: 5 },
      (_, i) => numbers.length + 1 + i
    );

    setTimeout(() => {
      setNumbers([...numbers, ...newNumbers]);
    }, 1000);

    console.log(numbers);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.container}
        data={numbers}
        renderItem={({ item }) => <RenderImageItem number={item} />}
        keyExtractor={(item) => item.toString()}
        onEndReached={loadMoreNumbers}
        onEndReachedThreshold={0.6}
        ListFooterComponent={() => (
          <View style={{ height: 50, justifyContent: "center" }}>
            <ActivityIndicator size={30} />
          </View>
        )}
      />
    </View>
  );
};

export default InfiniteScrollScreen;

const RenderImageItem = ({ number }: { number: number }) => {
  return (
    <Image
      source={{ uri: `https://picsum.photos/id/${number}/500/400` }}
      style={{ height: 400, width: 500 }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
