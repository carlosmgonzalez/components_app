import ThemedText from "@/components/presentation/ThemedText";
import {
  View,
  ImageSourcePropType,
  FlatList,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  Text,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useRef, useState } from "react";
import ThemedView from "@/components/presentation/ThemedView";
import { router, Stack } from "expo-router";

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: "Titulo 1",
    desc: "Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.",
    img: require("../../assets/images/slides/slide-1.png"),
  },
  {
    title: "Titulo 2",
    desc: "Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ",
    img: require("../../assets/images/slides/slide-2.png"),
  },
  {
    title: "Titulo 3",
    desc: "Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.",
    img: require("../../assets/images/slides/slide-3.png"),
  },
];

const SlidesScreen = () => {
  const { width: widthScreen } = useWindowDimensions();
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleNext = () => {
    if (currentIndex < items.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true });
    }
  };

  const handleMomentumScrollEnd = (
    event: NativeSyntheticEvent<NativeScrollEvent>
  ) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffset / widthScreen);
    setCurrentIndex(index);
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.desc}
        renderItem={({ item }) => (
          <View
            style={{
              width: widthScreen,
              justifyContent: "center",
              alignItems: "center",
              gap: 10,
              padding: 5,
            }}
          >
            <Image source={item.img} style={{ width: 300, height: 300 }} />
            <ThemedText
              style={{
                textAlign: "center",
                fontSize: 16,
              }}
            >
              {item.desc}
            </ThemedText>
          </View>
        )}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      />
      {currentIndex > 0 && (
        <TouchableOpacity
          onPress={handlePrevious}
          style={{
            position: "absolute",
            bottom: 30,
            left: 30,
            backgroundColor: "rgb(135, 109, 197)",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            Previous
          </Text>
        </TouchableOpacity>
      )}
      {currentIndex < items.length - 1 && (
        <TouchableOpacity
          onPress={handleNext}
          style={{
            position: "absolute",
            bottom: 30,
            right: 30,
            backgroundColor: "rgb(135, 109, 197)",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            Next
          </Text>
        </TouchableOpacity>
      )}
      {currentIndex === items.length - 1 && (
        <TouchableOpacity
          onPress={() => {
            router.back();
          }}
          style={{
            position: "absolute",
            bottom: 30,
            right: 30,
            backgroundColor: "rgb(135, 109, 197)",
            paddingHorizontal: 10,
            paddingVertical: 5,
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            Finish
          </Text>
        </TouchableOpacity>
      )}
    </ThemedView>
  );
};
export default SlidesScreen;
