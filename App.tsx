import { StyleSheet, View } from 'react-native';
import { Ticker } from './src/components/ticker';

export default function App() {
  return (
    <View style={styles.container}>
      <Ticker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
