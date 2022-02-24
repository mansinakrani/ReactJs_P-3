import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
//import { TiEdit } from 'react-icons/ti';
import "./Todo-item.css";
//import { TodoForm } from "./Todo-form";


interface Todo {
  text: string;
  isComplete: boolean;
  id: number;
}

type completeTodo = (id: number) => void;
type removeTodo = (id: number) => void;

interface TodoItemProps {
  todo: Todo[];
  completeTodo: completeTodo;
  removeTodo: removeTodo;
}


export const TodoItem: React.FC<TodoItemProps> = ({ todo, completeTodo, removeTodo }) => {
  const myList: JSX.Element[] = todo.map(
    (todo: Todo, index: number | null | undefined) => (
      <div
        className={todo.isComplete ? "todo-row complete" : "todo-row"}
        key={index}
      >
        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}
        </div>
        <div className="icons">
          <RiCloseCircleLine
            onClick={() => removeTodo(todo.id)}
            className="delete-icon"
          />
        </div>
      </div>
    )
  );
  return <ol className="TodoList">{myList}</ol>;
};

