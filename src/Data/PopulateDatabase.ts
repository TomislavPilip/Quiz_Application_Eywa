import client from "@/utils/gql";
import { STACK_QUESTIONS_AND_ANSWERS } from "@/assets/Queries/queries";
import { formattedAnswers, formattedQuestions } from "./quiz";

async function stackQuestionsAndAnswers() {
  try {
    const response = await client.request(STACK_QUESTIONS_AND_ANSWERS, {
      questions: formattedQuestions,
      answers: formattedAnswers,
    });
    console.log(
      "Stacked questions and answers successfully:",
      JSON.stringify(response, null, 2)
    );
  } catch (error) {
    console.error("Error stacking questions and answers:", error);
  }
}

stackQuestionsAndAnswers();
