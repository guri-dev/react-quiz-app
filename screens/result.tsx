import { TouchableOpacity, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const result = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
        <Image
            source={{uri: 'https://cdni.iconscout.com/illustration/premium/thumb/q-and-a-service-3678714-3098907.png'}}
            style={styles.banner}
            resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=> navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
    
  )
}

export default result

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
      justifyContent: 'center',
      alignItems: 'center',
  }
})