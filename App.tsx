import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
// import HelloWorldScreen from './src/presentation/screens/HelloWorldScreen';
// import CounterScreen from './src/presentation/screens/CounterScreen';
import { PaperProvider } from 'react-native-paper';
import CounterScreenM3 from './src/presentation/screens/CounterScreenM3';

import IonIcon from 'react-native-vector-icons/Ionicons';

export const App = () => {
  return (
    <PaperProvider
      settings={{
        // eslint-disable-next-line react/no-unstable-nested-components
        icon: (props) => <IonIcon {...props} />,
      }}>
    <SafeAreaView style={styles.container}>
      {/* <HelloWorldScreen name="Guido Reale" /> */}
      {/* <CounterScreen /> */}
      <CounterScreenM3 />
    </SafeAreaView >
    </PaperProvider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
