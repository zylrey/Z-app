import React from 'react';
import { TouchableOpacity, StyleSheet, Text, TouchableOpacityProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedButtonProps = TouchableOpacityProps & {
  lightTextColor?: string;
  darkTextColor?: string;
};

export function ThemedButton({ style, lightTextColor, darkTextColor, children, ...otherProps }: ThemedButtonProps) {
  const textColor = useThemeColor(
    { light: lightTextColor, dark: darkTextColor },
    'text' // Adjust the theme color key as per your theme structure
  );

  return (
    <TouchableOpacity
      style={[buttonStyles.button, { backgroundColor: textColor }, style]}
      {...otherProps}
    >
      <Text style={buttonStyles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const buttonStyles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 16,
    color: 'white', // Text color will be overridden by the theme color
  },
});
