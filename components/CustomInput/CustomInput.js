import { View, TextInput, StyleSheet } from 'react-native'
import React from 'react'

const CustomInput = () => {
  return (
    <View>
      <TextInput placeholder='placeholder' style={styles.input}/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {},
  input: {},
});

export default CustomInput