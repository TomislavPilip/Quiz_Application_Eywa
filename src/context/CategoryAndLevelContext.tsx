import { ReactNode, createContext, useContext, useState } from "react";

interface CategoryAndLevelContextType {
  selectedCategory: Category | null;
  setSelectedCategory: (category: Category | null) => void;
  availableCategories: Category[];
  setAvailableCategories: (categories: Category[]) => void;
  currentLevel: number;
  setCurrentLevel: React.Dispatch<React.SetStateAction<number>>;
  completedCategories: number;
  setCompletedCategories: React.Dispatch<React.SetStateAction<number>>;
  resetCategories: () => void;
}

export const CategoryAndLevelContext = createContext<
  CategoryAndLevelContextType | undefined
>(undefined);

export const CategoryAndLevelProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [availableCategories, setAvailableCategories] = useState<Category[]>(
    []
  );
  const [completedCategories, setCompletedCategories] = useState<number>(0);
  const [currentLevel, setCurrentLevel] = useState<number>(1);

  const resetCategories = () => {
    setCompletedCategories(0),
      setAvailableCategories((prevCategories) =>
        prevCategories.map((cat) => ({
          ...cat,
          is_available: true,
        }))
      );
  };

  return (
    <CategoryAndLevelContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        availableCategories,
        setAvailableCategories,
        currentLevel,
        setCurrentLevel,
        completedCategories,
        setCompletedCategories,
        resetCategories,
      }}
    >
      {children}
    </CategoryAndLevelContext.Provider>
  );
};

export const useCategoryAndLevelContext = () => {
  const context = useContext(CategoryAndLevelContext);
  if (context === undefined) {
    throw new Error(
      "useCategoryContext must be used within a CategoryProvider"
    );
  }
  return context;
};
