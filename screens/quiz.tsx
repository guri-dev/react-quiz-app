import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const quiz = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.top}>
            <Text style={styles.questions}>Q. Imagine this is a really cool question</Text>
        </View>
        <View style={styles.options}>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.optionButton}>
                <Text style={styles.option}>Cool option 4</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>NEXT</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

export default quiz

const styles = StyleSheet.create({
    bottom: {
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    button: {
        backgroundColor: '#184E77',
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
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
    options: {
        marginVertical: 16,
        flex: 1,
    },
    option: {
        fontSize: 18,
        fontWeight: '500',
        color: 'while',
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    questions: {
        fontSize: 28,
    },
    top: {
        marginVertical: 16
    },
})