import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  background: gray; 
`;

const TodoList = props => {
    return (
        <TodoListBlock>
            <TodoItem text="프로젝트 생성하기" done={true} />
            <TodoItem text="교회가기" done={false} />
            <TodoItem text="교육하기..." done={false} />
        </TodoListBlock>
    );
};

TodoList.propTypes = {
    
};

export default TodoList;