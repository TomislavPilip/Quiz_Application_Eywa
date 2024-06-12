export const SEARCH_USERS = `
{
  searchUser {
    active
    avatar
    euuid
    modified_on
    name
    priority
    settings
    type
    roles {
      active
      avatar
      description
      euuid
      modified_on
      name
    }
    groups {
      active
      avatar
      description
      euuid
      modified_on
      name
    }
  }
  }
`;

export const GET_USER_BY_EUUID = `
query getSpecificUser($euuid: UUID!){
  getUser(euuid: $euuid) {
    active
    avatar
    euuid
    modified_on
    name
    priority
    settings
    type
    roles {
      active
      avatar
      description
      euuid
      modified_on
      name
    }
    groups {
      active
      avatar
      description
      euuid
      modified_on
      name
    }
  }
}
`;

export const COUNT_USERS = `
{
  aggregateUser {
    count
  }
}
`;

export const COUNT_PERSON_USERS = `
{
  aggregateUser(_where:{type:{_eq:PERSON}}) {
    count
  }
}
`;

export const CREATE_USER = `
mutation createUser($user: UserInput!) {
  syncUser(user: $user) {
    euuid
  }
}
`;

export const DELETE_USER = `
mutation deleteUser($euuid: UUID!) {
  deleteUser(euuid: $euuid)
}
`;

// We'll use stackUserGroup mutation to add users in a group and preserve previous users in the group.
// If you want to replace the users in the group, you can use the syncUserGroup mutation.
export const STACK_USER_GROUP = `
mutation stackUserGroup($userGroup: UserGroupInput!) {
  stackUserGroup(userGroup: $userGroup) {
    euuid
  }
}
`;

export const STACK_QUESTIONS_AND_ANSWERS = `
  mutation StackQuestionsAndAnswers($questions: [QuestionInput!]!, $answers: [AnswerInput!]!) {
    stackQuestions(questions: $questions) {
      question_text
      category {
        category_name
      }
      levels {
        level_description
        level_number
      }
    }
    stackAnswers(answers: $answers) {
      answer_text
      is_correct
      question {
        question_text
      }
    }
  }
`;

//Quiz
export const GET_ALL_QUESTIONS = `
query {
  searchQuestions {
    euuid
    question_text
    question_category
    question_level
  }
}
`;

export const GET_ALL_CATEGORIES = `
query {
  searchCategories {
    euuid
    category_name
    category_image
    is_available
  }
}
`;

export const GET_ALL_LEVELS = `
query {
  searchLevels {
    euuid
    level_number
    level_description
  }
}
`;

export const GET_ALL_ANSWERS = `
query {
  searchAnswers {
    euuid
    answer_text
    is_correct
  }
}
`;

export const SEARCH_QUESTIONS = `
  query {
    searchQuestions {
      euuid
      question_text
      question_level
      question_category
      answers {
        euuid
        answer_text
        is_correct
      }
      category {
        euuid
        category_name
        category_image
      }
      levels {
        euuid
        level_number
        level_image
        level_description
      }
    }
  }
`;
