import { useState, useCallback, useEffect } from "react";
import "./quiz.css";
import { fetchAllData } from "../FetchData/FetchData";
import { useCategoryAndLevelContext } from "@/context/CategoryAndLevelContext";
import { useNavigate } from "react-router-dom";
import Questions from "../Questions/Questions";
import Answers from "../Answers/Answers";
import QuizHeader from "../QuizHeader/QuizHeader";
import StartQuiz from "../StartQuiz.tsx/StartQuiz";
import CompletedCategory from "../Categories/CompletedCategory";

const Quiz: React.FC = () => {
  //Use state hooks
  const navigate = useNavigate();
  const {
    selectedCategory,
    currentLevel,
    availableCategories,
    setAvailableCategories,
    completedCategories,
    setCompletedCategories,
    setCurrentLevel,
  } = useCategoryAndLevelContext();
  const [userAnswers, setUserAnswers] = useState<Answer[]>([]);
  const [answerState, setAnswerState] = useState<string>();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showCompletedCategory, setShowCompletedCategory] =
    useState<boolean>(false);

  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  //Fetching allData and saving it into questions
  useEffect(() => {
    const getQuestionsAndAnswers = async () => {
      try {
        const fetchedAllData = await fetchAllData();
        fetchedAllData;
        const allQuizData = fetchedAllData.filter((question) => {
          return (
            selectedCategory &&
            currentLevel &&
            question.question_category === selectedCategory.category_name &&
            question.levels.level_number === currentLevel
          );
        });
        const shuffledQuestions = shuffleArray(allQuizData).map((question) => ({
          ...question,
          answers: shuffleArray(question.answers),
        }));

        setQuestions(shuffledQuestions);
      } catch (error) {
        console.error("Failed to fetch questions", error);
      }
    };

    getQuestionsAndAnswers();
  }, []);

  //// CALLBACK FUNCTION: Clicking on a button we are storing that answer in userAnswers array
  //// Setting answerState
  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer: Answer) {
      setUserAnswers((prevUserAnswer) => {
        return [...prevUserAnswer, selectedAnswer];
      });
      setAnswerState("answered");
      setTimeout(() => {
        if (selectedAnswer.is_correct === true) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
          if (selectedAnswer.is_correct === false) {
            setTimeout(() => {
              setTimeout(() => {
                navigate("/app/init");
              }, 2500);
              setAnswerState("failed");
              console.log(answerState);
            }, 2000);
          }
        }
        setTimeout(() => {
          setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        }, 2000);
      }, 1000);
    },
    [currentQuestionIndex]
  );

  //// CALLBACK FUNCTION: If time runs out we are setting dummy wrong answer
  const handleAnswerOnTimeout = useCallback(() => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion) {
      const wrongAnswer: Answer = {
        ...currentQuestion.answers[0],
        is_correct: false,
      };
      setUserAnswers((prevUserAnswers) => [...prevUserAnswers, wrongAnswer]);
      setAnswerState("wrong");
      setTimeout(() => {
        setAnswerState("failed");
        setTimeout(() => {
          navigate("/app/init");
        }, 1500);
      }, 1500);
    }
  }, [questions, currentQuestionIndex, setAnswerState]);

  // useEffect(() => {
  //   if (currentQuestionIndex >= 2) {
  //     setShowCompletedCategory(true);
  //     setTimeout(() => {
  //       setShowCompletedCategory(false);
  //       navigate("/app/init/categories");
  //     }, 3000);
  //   }
  // }, [currentQuestionIndex]);

  useEffect(() => {
    console.log("Answer state:", answerState);
    console.log(questions);
    console.log("These are available categories", availableCategories);
    console.log("These are completed categories", completedCategories);
  }, [answerState, questions, availableCategories]);

  useEffect(() => {
    if (
      selectedCategory &&
      currentQuestionIndex > 0 &&
      currentQuestionIndex % 2 === 0
    ) {
      setShowCompletedCategory(true);
      setTimeout(() => {
        const updatedAvailableCategories = availableCategories.map(
          (category) => {
            if (category.category_name === selectedCategory.category_name) {
              return { ...category, is_available: false };
            }
            return category;
          }
        );
        setAvailableCategories(updatedAvailableCategories);
        setCompletedCategories((prev) => prev + 1);

        if (completedCategories >= 3) {
          setCurrentLevel((prev) => prev + 1);
          setCompletedCategories(0);
        }
        navigate("/app/init/categories");
      }, 3000);
    }
  }, [
    selectedCategory,
    currentQuestionIndex,
    availableCategories,
    setAvailableCategories,
    setCompletedCategories,
    completedCategories,
    setCurrentLevel,
    navigate,
  ]);

  // if (currentQuestionIndex >= questions.length) {
  //   return (
  //     <div className="quiz-complete-container">
  //       <h1>You finished!!!</h1>
  //     </div>
  //   );
  // }

  const currentQuestion = questions[currentQuestionIndex];
  const currentAnswers = currentQuestion?.answers || [];
  const levelImage = currentQuestion?.levels.level_image;

  return (
    <>
      {answerState === "failed" && (
        <div className="message-failed-container">Sorry you failed</div>
      )}
      {showCompletedCategory && (
        <div className="completed-category-container">
          <CompletedCategory />
        </div>
      )}
      <QuizHeader levelImage={levelImage} />
      <div className="main-quiz-container">
        <div className="quiz-container">
          <Questions
            currentQuestion={currentQuestion}
            handleAnswerOnTimeout={handleAnswerOnTimeout}
            currentQuestionIndex={currentQuestionIndex}
          />

          <Answers
            currentAnswers={currentAnswers}
            userAnswers={userAnswers}
            answerState={answerState}
            handleSelectAnswer={handleSelectAnswer}
          />
        </div>
      </div>
    </>
  );
};

export default Quiz;
