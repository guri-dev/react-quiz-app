import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Title from '../components/title';

const result = ({navigation, route}) => {
  const params = route.params;
  console.log(params);
  return (
    <View style={styles.container}>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
            source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/giving-different-feedback-and-review-in-websites-2112230-1779230.png'}}
            style={styles.banner}
            resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
    
  )
}

export default result

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#184E77',
    padding: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
    maxWidth: '25%',
    alignSelf: 'center'
  },
  buttonText: {
      fontSize: 18,
      fontWeight: '600',
      color: 'white',
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%'
  },
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
  }
})