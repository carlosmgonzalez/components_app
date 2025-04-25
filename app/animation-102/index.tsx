import { useRef } from "react";
import { View, Animated, PanResponder } from "react-native";

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      {
        useNativeDriver: false,
      }
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View className="flex-1 justify-center items-center">
      <Animated.View
        className="bg-light-tertiary dark:bg-dark-tertiary w-[140px] h-[140px] rounded-xl"
        {...panResponder.panHandlers}
        style={pan.getLayout()}
      />
    </View>
  );
};
export default Animation102Screen;
