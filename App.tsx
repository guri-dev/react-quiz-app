import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation/index';
import Home from './screens/home';
import Quiz from './screens/quiz';
import Result from './screens/result';

export default function App() {
  return (
    <View>
      {/* <Home /> */}
      {/* <Quiz /> */}
      <NavigationContainer><MyStack /></NavigationContainer>
      <Result />
    </View>     
    );
  };  

const styles = StyleSheet.create({});
