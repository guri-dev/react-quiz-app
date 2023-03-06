import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const quiz = ({navigation}) => {
    const [questions, setQuestions] = useState();
    const [ques, setQues] = useState(0);
    const [options, setOptions] = useState([]);
    const getQuiz=async()=>{
        const url = 'https://opentdb.com/api.php?amount=10&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();
        setQuestions(data.results);
        generateOptionsAndShuffle(data.results[0]);

    };
    useEffect(() =>{
        getQuiz();
    }, []);

    const shuffleArray=(array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    const generateOptionsAndShuffle=(_question)=> {
        const option = [..._question.incorrect_answers];
        option.push(_question.correct_answer);
        console.log(option);
        shuffleArray(option);
        console.log(option);
    }

    const handleNext=()=> {
        setQues(ques + 1);
    }
    const handleResult=()=> {
        setQues(ques + 1);
    }
    return (
    <View style={styles.container}>
        {questions && (
            <View style={styles.parent}>
                <View style={styles.top}>
                    <Text style={styles.questions}>Q.  { decodeURIComponent(questions[ques].question) }</Text>
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
                    {ques !== 9 && (
                        <TouchableOpacity style={styles.button} onPress={handleNext}>
                            <Text style={styles.buttonText}>NEXT</Text>
                        </TouchableOpacity>
                    )}
                    {ques === 9 && (
                        <TouchableOpacity style={styles.button} onPress={handleResult}>
                            <Text style={styles.buttonText}>Show Result</Text>
                        </TouchableOpacity>
                    )}
                    
                </View>
            </View>
        )}
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
        color: 'white',
    },
    optionButton: {
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: '#34A0A4',
        paddingHorizontal: 12,
        borderRadius: 12,
    },
    parent: {
        height: '100%',
    },
    questions: {
        fontSize: 28,
    },
    top: {
        marginVertical: 16
    },
})