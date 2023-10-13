/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAddTodoList = /* GraphQL */ `
  subscription OnCreateAddTodoList(
    $filter: ModelSubscriptionAddTodoListFilterInput
  ) {
    onCreateAddTodoList(filter: $filter) {
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
export const onUpdateAddTodoList = /* GraphQL */ `
  subscription OnUpdateAddTodoList(
    $filter: ModelSubscriptionAddTodoListFilterInput
  ) {
    onUpdateAddTodoList(filter: $filter) {
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
export const onDeleteAddTodoList = /* GraphQL */ `
  subscription OnDeleteAddTodoList(
    $filter: ModelSubscriptionAddTodoListFilterInput
  ) {
    onDeleteAddTodoList(filter: $filter) {
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
export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onCreateTodo(filter: $filter) {
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
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($filter: ModelSubscriptionTodoFilterInput) {
    onUpdateTodo(filter: $filter) {
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
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($filter: ModelSubscriptionTodoFilterInput) {
    onDeleteTodo(filter: $filter) {
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
