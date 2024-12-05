import { StyleSheet } from 'react-native';


export const globalStyles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
  FABRightBottom: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
