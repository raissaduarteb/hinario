import { useEffect, useRef, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "../../contexts/ThemeContext";

export default function Switch({ options = [], selectedOption, onChange, onSwitch }) {
  const { isDark } = useTheme();
  const [selected, setSelected] = useState(selectedOption);
  const [containerWidth, setContainerWidth] = useState(0);
  const slideAnim = useRef(new Animated.Value(options.indexOf(selectedOption) || 0)).current;

  const sliderWidth = containerWidth > 0 ? (containerWidth - 8) / options.length : 0;

  useEffect(() => {
    setSelected(selectedOption);
    const index = options.indexOf(selectedOption);
    if (containerWidth > 0) {
      Animated.timing(slideAnim, {
        toValue: index,
        duration: 250,
        useNativeDriver: false,
      }).start();
    }
  }, [selectedOption, containerWidth]);

  const handleSelect = (option) => {
    setSelected(option);
    onChange?.(option);
    onSwitch?.();
    const newIndex = options.indexOf(option);
    Animated.timing(slideAnim, {
      toValue: newIndex,
      duration: 250,
      useNativeDriver: false,
    }).start();
  };

  const translateX = sliderWidth > 0
    ? slideAnim.interpolate({
        inputRange: options.map((_, i) => i),
        outputRange: options.map((_, i) => i * sliderWidth),
      })
    : 0;

  return (
    <View
      style={[styles.container, isDark && styles.containerDark]}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      {sliderWidth > 0 && (
        <Animated.View
          style={[
            styles.slider,
            isDark && styles.sliderDark,
            { width: sliderWidth, transform: [{ translateX }] },
          ]}
        />
      )}
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.option}
          onPress={() => handleSelect(option)}
        >
          <Text
            style={[
              styles.optionText,
              isDark && styles.optionTextDark,
              selected === option && styles.optionTextSelected,
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = {
  container: {
    flexDirection: "row",
    backgroundColor: "#e8e8e8",
    borderRadius: 30,
    padding: 4,
    marginVertical: 8,
    position: "relative",
    overflow: "hidden",
    height: 44,
  },
  containerDark: {
    backgroundColor: "#1e1e1e",
  },
  slider: {
    position: "absolute",
    top: 4,
    left: 4,
    bottom: 4,
    backgroundColor: "#fff",
    borderRadius: 26,
    zIndex: 0,
  },
  sliderDark: {
    backgroundColor: "#3a3a3a",
  },
  option: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#666",
  },
  optionTextDark: {
    color: "#aaa",
  },
  optionTextSelected: {
    color: "#E94E1A",
    fontWeight: "600",
  },
};
