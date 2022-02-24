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
        (document.getElementById("bt") as HTMLFormElement).style.display =
          "inline-block";
        (document.getElementById("input1") as HTMLFormElement).style.display =
          "none";
      }
    });
    setNewTodo((e.target as HTMLInputElement).value);
  };
  const onSubmitbtn = () => {
    (document.getElementById("bt") as HTMLFormElement).style.display = "none";
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
      setNewTodo("");
    }
  };
 return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          id="input1"
          value={newTodo}
          onChange={handleChange}
          name="text"
          className="todo-input"
        />
      </form>
      <button id="bt" onClick={onSubmitbtn} className="todo-button">
        +
      </button>
    </>
  );
};
