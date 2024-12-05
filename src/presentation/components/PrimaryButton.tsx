/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Platform, Pressable, StyleSheet, Text } from 'react-native';


interface Props {
  label: string;
  onPress?: () => void;
  onLongPress?: () => void;
}

export const PrimaryButton = ({ label, onPress, onLongPress }: Props) => {
  return (
    <Pressable
      onPress={() => onPress && onPress()}
      onLongPress={() => onLongPress && onLongPress()}
      style={ ({ pressed }) => [
        pressed && styles.buttonPressed,
        pressed && styles.buttonPressed,
      ]}>
        <Text style={{ color: Platform.OS === 'ios' ? 'white' : 'black' }}>
          {label}
        </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonPressed: {
    backgroundColor: 'lightblue',
  },
});
