import { useRef } from "react";
import { Animated, Easing, useAnimatedValue } from "react-native";

export default function useAnimation() {
  const animatedOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useAnimatedValue(-100);

  const fadeIn = () => {
    Animated.timing(animatedOpacity, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => animatedTop.resetAnimation());
  };

  const startToDrop = () => {
    Animated.timing(animatedTop, {
      toValue: 0,
      duration: 700,
      useNativeDriver: true,
      easing: Easing.elastic(2),
    }).start();
  };

  return {
    fadeIn,
    fadeOut,
    startToDrop,
    animatedOpacity,
    animatedTop,
  };
}
