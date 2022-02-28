import React, { useState, ChangeEvent} from 'react';
import "./Todo-form.css";


interface TodoFormProps {
  //addTodo: AddTodo;
  onSubmit: (addTodo: { isComplete: boolean; id: number; text: string }) => void;
}

export const TodoForm = (props: TodoFormProps):JSX.Element => {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    document.addEventListener("keydown", function (event: KeyboardEventInit) {
      if (event.key === "Escape") {
        (document.getElementById("btn2") as HTMLFormElement).style.display =
          "inline-block";
        (document.getElementById("input1") as HTMLFormElement).style.display =
          "none";
      }
    });
    setNewTodo((e.target as HTMLInputElement).value);
  };
  const onSubmitbtn = () => {
    (document.getElementById("btn") as HTMLFormElement).style.display = "none";
    (document.getElementById("input1") as HTMLFormElement).style.display =
      "block";
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newTodo.length === 0) {
      alert("enter something");
    } else {
      props.onSubmit({
        isComplete: false,
        id: Math.floor(Math.random() * 10000),
        text: newTodo,
      });
      setNewTodo('');
    }
  };
 return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          id='input1'
          type="text"
          placeholder='Enter task'
          value={newTodo}
          name="text"
          onChange={handleChange}
          className="todo-input"
        />
        <button id='btn2' type='submit' className="todo-add-button">
          <strong>Add Task</strong>
        </button>
      </form>
      <button id="btn" onClick={onSubmitbtn} className="todo-button">
        +
      </button>
    </>
  );
};
