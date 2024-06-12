import client from "@/utils/gql"; // Adjust the import based on your project structure
import {
  GET_ALL_ANSWERS,
  GET_ALL_CATEGORIES,
  GET_ALL_LEVELS,
} from "@/assets/Queries/queries";
import { GET_ALL_QUESTIONS, SEARCH_QUESTIONS } from "@/assets/Queries/queries";

export async function fetchAllQuestions(): Promise<Question[]> {
  try {
    const { searchQuestions } = await client.request<{
      searchQuestions: Question[];
    }>(GET_ALL_QUESTIONS);
    return searchQuestions;
  } catch (error) {
    console.error("Error fetching questions:", error);
    throw new Error("Error fetching questions");
  }
}

export async function fetchAllAnswers(): Promise<Answer[]> {
  try {
    const { searchAnswers } = await client.request<{ searchAnswers: Answer[] }>(
      GET_ALL_ANSWERS
    );
    return searchAnswers;
  } catch (error) {
    console.error("Error fetching answers:", error);
    throw new Error("Error fetching answers");
  }
}

export async function fetchAllCategories(): Promise<Category[]> {
  try {
    const { searchCategories } = await client.request<{
      searchCategories: Category[];
    }>(GET_ALL_CATEGORIES);
    return searchCategories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw new Error("Error fetching categories");
  }
}
export async function fetchAllLevels(): Promise<Level[]> {
  try {
    const { searchLevels } = await client.request<{ searchLevels: Level[] }>(
      GET_ALL_LEVELS
    );
    return searchLevels;
  } catch (error) {
    console.error("Error fetching levels:", error);
    throw new Error("Error fetching levels");
  }
}

export async function fetchAllData(): Promise<Question[]> {
  try {
    const response = await client.request<{
      searchQuestions: Question[];
    }>(SEARCH_QUESTIONS);
    console.log("GraphQL response:", response);
    return response.searchQuestions;
  } catch (error) {
    console.error("Error fetching all data:", error);
    throw new Error("Error fetching all data");
  }
}
