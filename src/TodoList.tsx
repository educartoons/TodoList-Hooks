import { ChangeEvent, useState } from "react";
import { Task } from "./Task";
import React from "react";

type Task = {
  id: string;
  value: string;
};

function TodoList() {
  const [list, setList] = useState<Task[]>([]);
  const [task, setTask] = useState("");
  console.count("Rendering TodoList");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
  };

  const handleClick = () => {
    setList([...list, { id: crypto.randomUUID(), value: task }]);
  };

  const handleRemoveTask = (idx: number) => {
    const newList = list.filter((_, index) => index !== idx);
    setList(newList);
  };

  return (
    // JSX CODE
    <>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={handleClick}>Add Task</button>
      <div>
        {list.map((item, index) => (
          <div key={item.id}>
            {item.value}
            <input type="text" defaultValue={item.value} />{" "}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div>{}</div>
      <Task />
    </>
  );
}

// Reconciliation Algorithm

export { TodoList };
