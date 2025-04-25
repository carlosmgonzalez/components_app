import MenuItem from "@/components/menu/MenuItem";
import ThemedView from "@/components/presentation/ThemedView";
import {
  animationMenuRoutes,
  menuRoutes,
  uiMenuRoutes,
} from "@/constants/Routes";
import { View } from "react-native";

const ComponentsApp = () => {
  return (
    <ThemedView margin>
      {animationMenuRoutes.map((route, i) => (
        <MenuItem
          key={route.name}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isFirst={i === 0}
          isLast={i === animationMenuRoutes.length - 1}
        />
      ))}
      <View className="my-3" />
      {uiMenuRoutes.map((route, i) => (
        <MenuItem
          key={route.name}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isFirst={i === 0}
          isLast={i === animationMenuRoutes.length - 1}
        />
      ))}
      <View className="my-3" />
      {menuRoutes.map((route, i) => (
        <MenuItem
          key={route.name}
          title={route.title}
          name={route.name}
          icon={route.icon}
          isFirst={i === 0}
          isLast={i === animationMenuRoutes.length - 1}
        />
      ))}
    </ThemedView>
  );
};
export default ComponentsApp;
