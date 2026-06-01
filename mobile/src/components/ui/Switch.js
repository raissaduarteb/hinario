import React, { useEffect, useState } from "react";
import { Animated, Text, TouchableOpacity, View } from "react-native";
export default function Switch({
  options = [],
  selectedOption,
  onChange,
  onSwitch,
}) {
  const [selected, setSelected] = useState(selectedOption);
  const slideAnim = React.useRef(new Animated.Value(0)).current;
  useEffect(() => {
    setSelected(selectedOption);
    const index = options.indexOf(selectedOption);
    Animated.timing(slideAnim, {
      toValue: index * 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [selectedOption]);
  const index = options.indexOf(selected);
  function handleSelect(option) {
    setSelected(option);
    onChange?.(option);
    onSwitch?.();
    const newIndex = options.indexOf(option);
    Animated.timing(slideAnim, {
      toValue: newIndex * 100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }
  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.slider,
          {
            transform: [
              {
                translateX: slideAnim.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, (100 / options.length) * 100],
                }),
              },
            ],
          },
        ]}
      />
      {options.map((option, idx) => (
        <TouchableOpacity
          key={option}
          style={[
            styles.option,
            {
              flex: 1,
            },
          ]}
          onPress={() => handleSelect(option)}
        >
          <Text
            style={[
              styles.optionText,
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
const styles = ({
  container: {
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    padding: 4,
    marginVertical: 12,
    position: "relative",
    overflow: "hidden",
  },
  slider: {
    position: "absolute",
    top: 4,
    left: 4,
    right: 4,
    height: 40,
    backgroundColor: "#E94E1A",
    borderRadius: 6,
  },
  option: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  optionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
    zIndex: 1,
  },
  optionTextSelected: {
    color: "#fff",
  },
});
