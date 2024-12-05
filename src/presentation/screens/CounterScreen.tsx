import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';

interface CounterScreenProps {
  initialCounter?: number;
}

const CounterScreen: React.FC<CounterScreenProps> = ({ initialCounter = 0 }) => {

  const [counter, setCounter] = useState(initialCounter);

  const handleIncrease = () => {
    setCounter(counter + 1);
  };

  const handleDecrease = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {counter}
      </Text>
      <Button
        mode="contained"
        onPress={handleIncrease}
        onLongPress={() => setCounter(0)}
      >
        Increase
      </Button>
      <Pressable onPress={handleIncrease}>
        <Text>
          +
        </Text>
      </Pressable>
      <Pressable onPress={handleDecrease}>
        <Text>
          -
        </Text>
      </Pressable>
    </View>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
