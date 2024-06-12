import { useCategoryAndLevelContext } from "@/context/CategoryAndLevelContext";
import "./completedCategoy.css";

const CompletedCategory: React.FC = () => {
  const { selectedCategory } = useCategoryAndLevelContext();
  return (
    <>
      <div className="completed-category">
        <div className="completed-category-image">
          <img src={selectedCategory?.category_image} alt="" />
          <h5>
            Uspješno ste savladali kategoriju {selectedCategory?.category_name}{" "}
            <br />
            <span>Čestitamo!</span>
          </h5>
        </div>
      </div>
    </>
  );
};

export default CompletedCategory;
