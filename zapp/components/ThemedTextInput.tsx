import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextInputProps = TextInputProps & {
  lightPlaceholderTextColor?: string;
  darkPlaceholderTextColor?: string;
};

export function ThemedTextInput({ style, lightPlaceholderTextColor, darkPlaceholderTextColor, ...otherProps }: ThemedTextInputProps) {
  const placeholderTextColor = useThemeColor(
    { light: lightPlaceholderTextColor, dark: darkPlaceholderTextColor },
    'textPlaceholder'
  );

  return (
    <TextInput
      style={[inputStyles.input, { color: placeholderTextColor }, style]}
      placeholderTextColor={placeholderTextColor}
      {...otherProps}
    />
  );
}

const inputStyles = StyleSheet.create({
  input: {
    fontSize: 16,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});
