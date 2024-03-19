import { memo } from "react";

const Task = memo(() => {
  console.count("Rendering Task");
  return <div>Task:</div>;
});

export { Task };
