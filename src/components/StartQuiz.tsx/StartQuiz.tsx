import { Link, useNavigate } from "react-router-dom";
const StartQuiz: React.FC = () => {
  return (
    <>
      <h1>Welcome to Quiz</h1>
      <Link to={"/app/init/categories"}>
        <button>Start Quiz</button>
      </Link>
    </>
  );
};

export default StartQuiz;
