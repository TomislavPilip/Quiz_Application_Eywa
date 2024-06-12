import { useState, useEffect } from "react";
import "./questionTimer.css";
import { Progress } from "antd";

interface QuestionTimerProps {
  timeout: number;
  handleAnswerOnTimeout: () => void;
}

const QuestionTimer: React.FC<QuestionTimerProps> = ({
  timeout,
  handleAnswerOnTimeout,
}) => {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting timeout");
    const timer = setTimeout(handleAnswerOnTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, handleAnswerOnTimeout]);

  //Timeout is
  useEffect(() => {
    console.log("Setting interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [timeout]);

  const percent = (remainingTime / timeout) * 100;

  return (
    <>
      {/* <progress
        className="question-timer"
        max={timeout}
        value={remainingTime}
      ></progress> */}
      <Progress
        type="circle"
        percent={percent}
        format={() => `${Math.ceil(remainingTime / 1000)}`}
        trailColor="red"
      />
      {/* <div className="question-timer-numeric">
        {Math.ceil(remainingTime / 1000)}
      </div> */}
    </>
  );
};

export default QuestionTimer;
