interface Answer {
  euuid: string;
  answer_text: string;
  is_correct: boolean;
}

interface Category {
  category_name: string;
  category_image: string;
  is_available: boolean;
  euuid: string;
}

interface Level {
  level_number: number;
  level_image: string;
  level_description: string;
  euuid: string;
}

interface Question {
  question_text: string;
  question_level: string;
  question_category: string;
  euuid: string;
  answers: Answer[];
  category: Category;
  levels: Level;
}
