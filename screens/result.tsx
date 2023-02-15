import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const result = () => {
  return (
    <View>
      <Text>Result</Text>
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