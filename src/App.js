import React from 'react';
import './index.scss';

const questions = [
  {
    title: 'What is the boiling point temperature (water)?',
    variants: ['100 °C', '150 °C', '200 °C'],
    correct: 0,
  },
  {
    title: 'Which fruit is associated with Isaac Newton?',
    variants: ['Pear', 'Apple', 'Pineapple'],
    correct: 1,
  },
  {
    title: 'Which one of the following scientists is known for his contributions to the science of evolution?',
    variants: [
      'Marie Curie',
      'Thomas Edison',
      'Charles Darwin',
    ],
    correct: 2,
  },
  {
    title: 'Which animal is not part of the Chinese zodiac?',
    variants: [
      'Horse',
      'Dog',
      'Cat',
    ],
    correct: 2,
  },
  {
    title: 'How can you add a comment in a JavaScript?',
    variants: [
      '<!--This is a comment-->  ',
      '//This is a comment',
      'This is a comment',
    ],
    correct: 1,
  },
];

function Result({correct}) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" alt='Congratulations img' />
      <h2>Your result: {correct} of {questions.length}</h2>
      <a href='/'>
        <button>Try again</button>
      </a> 
    </div>
  );
}

function Game({step, question, onClickVariant}) {
  const percentage = Math.round(step / questions.length*100);
  return (
    <>
      <div className="progress">
        <div style={{ width:`${percentage}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
       {
          question.variants.map((text, index)=> (
            <li onClick={() => onClickVariant(index)} key={text}>{text}</li>
          ))
       }
      </ul>
    </>
  );
}

function App() {
  const [step,setStep] = React.useState(0);
  const [correct,setCorrect] = React.useState(0);
  const question = questions[step];

  const onClickVariant = (index) => {
    console.log(step,index);
    setStep(step+1);

    if (index === question.correct) {
      setCorrect(correct+1);
    }
  };


  return (
    <div className="App">
      {
        step !== questions.length 
        ? (<Game step={step} question={question} onClickVariant={onClickVariant} />)
        : (<Result correct={correct}/> )
      }
    </div>
  );
}

export default App;