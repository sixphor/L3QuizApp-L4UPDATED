import React, { useState } from 'react';
import {View, Text, Image, ScrollView, Button, Alert, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const styles = StyleSheet.create({
    mainContent: {
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#ffe349',
        flex: 1,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#2c3e50',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
        borderColor: '#fff200'
    },
    questionContainer: {
        marginBottom: 30,
        padding: 20,
        backgroundColor: '#ffe89f',
    },
    questionText: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 15,
        color: '#34495e',
        textAlign: 'center',
        borderWidth: 2,
        backgroundColor: '#ffffff',
        borderColor: '#fff400',
    },
    questionImage: {
        width: '100%',
        height: 250,
        borderRadius: 10,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#fffb00',
    },

});



// QUESTION
const Question = ({ questionText, imageSource, options, onAnswerSelect }) => {
  return (
      <View style={styles.questionContainer}>
        <Image source={imageSource} style={styles.questionImage} />
          <Text style={styles.questionText}>{questionText}</Text>
        <RNPickerSelect
            onValueChange={(value) => onAnswerSelect(value)}
            items={options.map((option) => ({
              label: option,
              value: option,
            }))}
        />
      </View>
  );
};

const MyApp = () => {

  const [answerQ1, setAnswerQ1] = useState('');
  const [answerQ2, setAnswerQ2] = useState('');
  const [answerQ3, setAnswerQ3] = useState('');

  // ANSWERS
  const correctAnswers = {
    question1: 'Football',
    question2: 'FIFA World Cup',
    question3: 'Racket',
  };

  const handleSubmit = () => {
    let points = 0;

    // CHECK ANSWER
    if (answerQ1 === correctAnswers.question1) points += 1;
    if (answerQ2 === correctAnswers.question2) points += 1;
    if (answerQ3 === correctAnswers.question3) points += 1;

    // SCORE MESSAGE
    let myMessage = 'Try Again! You scored 0 out of 3!';
    if (points === 1) {
      myMessage = 'Not Bad! You Scored 1 out of 3!';
    } else if (points === 2) {
      myMessage = 'Good Job! You Scored 2 out of 3!';
    } else if (points === 3) {
      myMessage = 'Well Done! You Scored 3 out of 3!';
    }

    // RESULT
    Alert.alert(myMessage);
  };

  return (
      <View style={styles.mainContent}>
        <ScrollView>
          <Text style={styles.title}>SPORTS QUIZ!</Text>

          <Question
              questionText="What sport is this?"
              imageSource={require('./img/football.jpg')}
              options={['Football', 'Baseball', 'Handball', 'Golf']}
              onAnswerSelect={setAnswerQ1}
          />

          <Question
              questionText="What competition awards this trophy?"
              imageSource={require('./img/trophy.jpg')}
              options={['Euros', 'FA Cup', 'FIFA World Cup', 'Oscar']}
              onAnswerSelect={setAnswerQ2}
          />

          <Question
              questionText="What equipment needs to be used while playing tennis?"
              imageSource={require('./img/racket.jpg')}
              options={['Club', 'Racket', 'Helmet', 'Gloves']}
              onAnswerSelect={setAnswerQ3}
          />

          <Button title="SUBMIT" onPress={handleSubmit} />
        </ScrollView>
      </View>
  );
};

export default MyApp;
