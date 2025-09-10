import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Import the LoginScreen component
import Loginscreen from './screens/Loginscreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Loginscreen />
      <StatusBar style="auto" />
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