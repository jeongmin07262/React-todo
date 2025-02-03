import { useState } from "react";
import "./App.css";
import TodoBody from "./components/todos/TodoBody";
import TodoHeader from "./components/todos/TodoHeader";
import DefaultLayout from "./layouts/DefaultLayout";

const dummyTodos = [
  {
    id: 1,
    title: "React 공부",
    summary: "React를 공부한다.",
    category: "TODO",
  },
  {
    id: 2,
    title: "점심 먹기",
    summary: "점심을 먹는다.",
    category: "PROGRESS",
  },
  {
    id: 3,
    title: "커피 마시기",
    summary: "커피를 마신다.",
    category: "DONE",
  },
];

function App() {
  const [todos, setTodos] = useState(dummyTodos);

  // addTodoHandler: 할 일 추가 기능
  const addTodoHandler = (title, summary, category) => {
    const newTodo = {
      id: self.crypto.randomUUID,
      title,
      summary,
      category,
    };

    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
  };

  //  updateTodoHandler: 할 일 수정 기능
  const updateTodoHandler = (updateTodo) => {
    const updatedTodos = todos.map(todo => todo.id === updateTodo.id ? { ...updateTodo } : todo);
    setTodos(updatedTodos);
  }

  // deleteTodoHandler: 할 일 삭제 기능
  const deleteTodoHandler = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <>
      <DefaultLayout>
        {/* Header */}
        <header>
          <h1 className="pt-8 mx-auto text-red-200 max-w-max text-7xl">
            <img
              className="ml-4"
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thought%20Balloon.png"
              alt="Thought Balloon"
              width="75"
              height="75"
            />
            <img
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Seal.png"
              alt="Seal"
              width="75"
              height="75"
            />
          </h1>
        </header>

        {/* Todo-List */}
        <TodoHeader onAdd={addTodoHandler} />
        <TodoBody todos={todos} onUpdate={updateTodoHandler} onDelete={deleteTodoHandler}/>
      </DefaultLayout>
    </>
  );
}
export default App;
