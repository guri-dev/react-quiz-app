import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/title';
import CustomInput from '../components/CustomInput/CustomInput';

const Signin = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText="Home"/>
      <View style={styles.loginContainer}>
        <CustomInput />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}>Sign in here</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Signin

const styles = StyleSheet.create({
    container: {
        paddingTop: 2,
        paddingHorizontal: 2,
        height: '100%',
        alignItems: 'center',
    },
    loginContainer: {
      width: '100%',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
    },
    banner: {
      width: 80,
      height: 80,
    },
    button: {
      width: '100%',
      backgroundColor: '#184E77',
      padding: 20,
      borderRadius: 16,
      alignItems: 'center',
      marginBottom: 30,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: '600',
      color: 'white',
    }
})