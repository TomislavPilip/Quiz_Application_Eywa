import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAllCategories } from "../FetchData/FetchData";
import "./categories.css";
import { useCategoryAndLevelContext } from "@/context/CategoryAndLevelContext";

const Categories: React.FC = () => {
  const {
    availableCategories,
    setAvailableCategories,
    selectedCategory,
    setSelectedCategory,
    completedCategories,
    setCompletedCategories,
    currentLevel,
    setCurrentLevel,
    resetCategories,
  } = useCategoryAndLevelContext();
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      try {
        const fetchedCategories: Category[] = await fetchAllCategories();
        setAvailableCategories(fetchedCategories);
        console.log(selectedCategory);
      } catch (error) {
        console.error("Failed to fetch categories", error);
      }
    };
    //Only if availableCategories === 0 we are fetching Categories
    if (availableCategories.length === 0) {
      getCategories();
    }
  }, [availableCategories, setAvailableCategories]);

  useEffect(() => {
    console.log("Available Categories", availableCategories);
  });

  const handleCategorySelect = (category: Category) => {
    if (category.is_available) {
      setSelectedCategory(category);
      navigate("/app/init/quiz");
      console.log("you have click on", category);
      console.log(selectedCategory);
    } else {
      console.log("Category is not available", category);
    }
  };

  useEffect(() => {
    if (completedCategories >= 3) {
      setCurrentLevel(currentLevel + 1);
      setCompletedCategories(0);
      resetCategories();
    }
  }, [
    completedCategories,
    currentLevel,
    setCompletedCategories,
    setCurrentLevel,
    resetCategories,
  ]);

  return (
    <>
      <div className="categories-main-container">
        <div className="categories-container">
          <h3>Odaberite kategoriju:</h3>
          <div className="categories">
            {availableCategories &&
              availableCategories.map((category) => {
                return (
                  <div
                    onClick={() => handleCategorySelect(category)}
                    key={category.euuid}
                    className={`category-card ${
                      !category.is_available ? "disabled" : ""
                    }`}
                  >
                    <div className="category-card-image">
                      <img
                        src={category.category_image}
                        alt={category.category_name}
                      />
                      <h5>{category.category_name}</h5>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
