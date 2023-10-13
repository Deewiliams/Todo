/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAddTodoList = /* GraphQL */ `
  mutation CreateAddTodoList(
    $input: CreateAddTodoListInput!
    $condition: ModelAddTodoListConditionInput
  ) {
    createAddTodoList(input: $input, condition: $condition) {
      id
      todoID
      title
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAddTodoList = /* GraphQL */ `
  mutation UpdateAddTodoList(
    $input: UpdateAddTodoListInput!
    $condition: ModelAddTodoListConditionInput
  ) {
    updateAddTodoList(input: $input, condition: $condition) {
      id
      todoID
      title
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAddTodoList = /* GraphQL */ `
  mutation DeleteAddTodoList(
    $input: DeleteAddTodoListInput!
    $condition: ModelAddTodoListConditionInput
  ) {
    deleteAddTodoList(input: $input, condition: $condition) {
      id
      todoID
      title
      description
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      AddTodoLists {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      AddTodoLists {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      AddTodoLists {
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
