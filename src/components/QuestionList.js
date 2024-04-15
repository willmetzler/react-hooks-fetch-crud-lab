import React, {useEffect} from "react";
import QuestionItem from "./QuestionItem"

function QuestionList({questions, setQuestions}) {


useEffect(() => {
  fetch("http://localhost:4000/questions")
  .then(response => response.json())
  .then(questionArray => setQuestions(questionArray))
}, [])

function handleDeleteQuestion(deletedQuestion){
  const updatedQuestions = questions.filter((question) => question.id !== deletedQuestion.id);
  setQuestions(updatedQuestions)
}

const mappedQuestions = questions.map(question =>{
  return <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestion} />
})


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{mappedQuestions}</ul>
    </section>
  );
}

export default QuestionList;