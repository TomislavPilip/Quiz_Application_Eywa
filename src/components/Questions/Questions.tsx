import "./Questions.css";

interface QuestionsProps {
  currentQuestion: Question;
  currentQuestionIndex: number;
  handleAnswerOnTimeout: () => void;
}
import QuestionTimer from "../QuestionTimer/QuestionTimer";

const Questions: React.FC<QuestionsProps> = ({
  currentQuestion,
  currentQuestionIndex,
  handleAnswerOnTimeout,
}) => {
  return (
    <div className="quiz-question">
      <QuestionTimer
        // Using KEY PROP with activeQuestionIndex, everytime activeQuestionIndex
        key={currentQuestionIndex}
        timeout={20000}
        handleAnswerOnTimeout={handleAnswerOnTimeout}
      />
      <h4>{currentQuestion?.question_text}</h4>
    </div>
  );
};

export default Questions;
