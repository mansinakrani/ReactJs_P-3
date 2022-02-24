import React, { useEffect, useState } from 'react';

import { TodoForm } from './Todo-form';
import { TodoItem } from './Todo-item';
import DateTime from './Date';

interface Todo_ {
  text: string;
  isComplete: boolean;
  id: number;
}

function TodoList() {  
    let intTodo: Todo_[];
    if (localStorage.getItem("todos") === null) {
      intTodo = [];
    } else {
      intTodo = JSON.parse(localStorage.getItem("todos") || "{}");
    }
  
    const [todos, setTodos] = useState<Todo_[]>(intTodo);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
    const addTodo = (todo: Todo_) => {
      const newTodos = [...todos, todo];
      setTodos(newTodos);
      localStorage.setItem("todos", JSON.stringify(todos));
    };

    const completeTodo = (id: number) => {
      const updatedTodos = todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
      setTodos(updatedTodos);
    };

    const removeTodo = (id: number) => {
      const removed = [...todos].filter((todo) => todo.id !== id);
      setTodos(removed);
    };

    return (
      <>
      <div className="todo-app">
      <header>
        <h3>
          <DateTime />
        </h3>
      </header>
      <TodoItem todo={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
      <TodoForm onSubmit={addTodo} />
    </div>
    </>
    );
  }

export default TodoList;
