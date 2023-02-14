import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/home';
import Quiz from './screens/quiz';

export default function App() {
  return (
    <View>
      <Home />
      <Quiz />
    </View>     
    );
  };  

const styles = StyleSheet.create({});
