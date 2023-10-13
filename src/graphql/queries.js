/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAddTodoList = /* GraphQL */ `
  query GetAddTodoList($id: ID!) {
    getAddTodoList(id: $id) {
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
export const listAddTodoLists = /* GraphQL */ `
  query ListAddTodoLists(
    $filter: ModelAddTodoListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddTodoLists(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        todoID
        title
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const addTodoListsByTodoID = /* GraphQL */ `
  query AddTodoListsByTodoID(
    $todoID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAddTodoListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    addTodoListsByTodoID(
      todoID: $todoID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        todoID
        title
        description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
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
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
