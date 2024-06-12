interface QuizHeaderProps {
  levelImage: string;
}

const QuizHeader: React.FC<QuizHeaderProps> = ({ levelImage }) => {
  return (
    <div style={{ backgroundColor: "blue" }}>
      <div>
        <img src={levelImage} width={"100px"} height={"150px"} alt="" />
      </div>
    </div>
  );
};

export default QuizHeader;
