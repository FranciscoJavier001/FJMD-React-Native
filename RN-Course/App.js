
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() { //** Esto es un FC */
  return (
    <View style={styles.appContainer}>
      <View>
        <View>
          <TextInput placeholder='Your course goal!' />
          <Button title="Add Goal" />
        </View>
        <Text>List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }
});
