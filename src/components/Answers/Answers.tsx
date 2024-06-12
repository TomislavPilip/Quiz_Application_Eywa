import "./answers.css";

interface AnswersProps {
  currentAnswers: Answer[];
  userAnswers: Answer[];
  answerState: string | undefined;
  handleSelectAnswer: (selectedAnswer: Answer) => void;
}

const Answers: React.FC<AnswersProps> = ({
  currentAnswers,
  userAnswers,
  answerState,
  handleSelectAnswer,
}) => {
  return (
    <div className="quiz-answers">
      <ul>
        {currentAnswers.map((answer) => {
          const isSelected =
            userAnswers[userAnswers.length - 1]?.euuid === answer.euuid;
          let buttonClass = "";
          if (answerState === "answered" && isSelected) {
            buttonClass = "selected";
          } else if (
            (answerState === "correct" || answerState === "wrong") &&
            isSelected
          ) {
            buttonClass = answerState;
          }

          return (
            <li key={answer.euuid}>
              <button
                onClick={() => handleSelectAnswer(answer)}
                className={buttonClass}
                disabled={isSelected}
              >
                {answer.answer_text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Answers;
