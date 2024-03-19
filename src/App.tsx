import { TodoList } from "./TodoList";

// Suggar Syntax
// Fragment

function Child() {
  return <div>Child</div>;
}

function App() {
  return (
    <>
      <TodoList />
      <Child />
    </>
  );
}

export { App };
