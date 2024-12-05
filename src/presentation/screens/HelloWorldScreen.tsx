import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface HelloWorldScreenProps {
  name?: string;
}

const HelloWorldScreen: React.FC<HelloWorldScreenProps> = ({ name = 'World' }) => {
  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={styles.title}>
        Hello, {name}!!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    padding: 20,
  },
});

export default HelloWorldScreen;
