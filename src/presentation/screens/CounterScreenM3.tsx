import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../theme/global.styles';
import { FAB } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

interface CounterScreenProps {
  initialCounter?: number;
}

const CounterScreenM3: React.FC<CounterScreenProps> = ({ initialCounter = 0 }) => {

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
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>
        {counter}
      </Text>
      {/* <Icon name="accessibility-outline" size={50} /> */}
      <FAB
        style={ globalStyles.FABRightBottom }
        icon="add-outline"
        onPress={handleIncrease}
        onLongPress={() => setCounter(0)}
      />
    </View>
  );
};

export default CounterScreenM3;

