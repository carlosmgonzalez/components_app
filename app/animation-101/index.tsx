import ThemedButton from "@/components/presentation/ThemedButton";
import ThemedView from "@/components/presentation/ThemedView";
import useAnimation from "@/hooks/useAnimation";
import { useRef } from "react";
import { View, Text, Animated, useAnimatedValue, Easing } from "react-native";

const Animation101Screen = () => {
  const { animatedOpacity, animatedTop, fadeIn, fadeOut, startToDrop } =
    useAnimation();

  return (
    <ThemedView margin className="justify-center items-center">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl w-[150px] h-[150px]"
        style={{
          opacity: animatedOpacity,
          transform: [
            {
              translateY: animatedTop,
            },
          ],
        }}
      />
      <View className="gap-4 absolute bottom-0 w-full mb-3">
        <ThemedButton
          onPress={() => {
            fadeIn();
            startToDrop();
          }}
        >
          FadeIn
        </ThemedButton>
        <ThemedButton onPress={fadeOut}>FadeOut</ThemedButton>
      </View>
    </ThemedView>
  );
};
export default Animation101Screen;
