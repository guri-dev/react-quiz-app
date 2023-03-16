import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params;
  return (
    <View style={styles.container}>
      <Title titleText="Result" />
      <Text>{score}</Text>
      <View style={styles.bannerContainer}>
        <Image
            source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/men-celebrating-victory-4587301-3856211.png'}}
            style={styles.banner}
            resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Quiz')} style={styles.button}>
        <Text style={styles.buttonText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
    
  )
}

export default Result

const styles = StyleSheet.create({
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
      flex: 1,
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