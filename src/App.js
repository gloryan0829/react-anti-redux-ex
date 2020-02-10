import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from "./components/TodoTemplate";
import reset from 'styled-reset';
import TodoHead from "./components/TodoHead";
import TodoList from "./components/TodoList";
import TodoCreate from "./components/TodoCreate";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
      </TodoTemplate>
    </>
  );
}

export default App;
