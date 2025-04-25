import { View, Text, TextProps } from "react-native";

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "link";

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

const ThemedText = ({ className, type = "normal", ...rest }: Props) => {
  const textType = {
    normal: "font-normal",
    link: "text-sm font-light",
    h1: "text-2xl font-bold",
    h2: "text-xl",
    "semi-bold": "font-semibold",
  }[type];

  return (
    <Text
      className={`text-light-text dark:text-dark-text ${textType} ${className}`}
      {...rest}
    />
  );
};

export default ThemedText;
