import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text>Imagine this is a really cool question</Text>
        </View>
        <View style={styles.options}>
            <TouchableOpacity>
                <Text>Cool option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Cool option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Cool option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>Cool option 4</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity>
                <Text>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text>NEXT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> navigation.navigate('Result')}>
                <Text>END</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}

export default quiz

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingHorizontal: 20,
        height: '100%'
    },
    top: {
        marginVertical: 16
    },
    options: {
        marginVertical: 16,
        flex: 1,
    },
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})