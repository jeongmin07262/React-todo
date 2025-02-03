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
  }, //,를 붙여서 새롭게 추가된 할 일 데이터를 넣기
];

function App() {
  // 할 일 데이터를 하나의 상태로 관리
  const [todos, setTodos] = useState(dummyTodos);

  // TodoForm으로부터 전달받은 사용자의 입력값
  const addTodoHandler = (title, summary, category) => {
    // 새롭게 등록할 할 일 객체
    const newTodo = {
      // ID 식별용 값
      id: self.crypto.randomUUID,
      title,
      summary,
      category,
    };

    // 새롭게 업데이트할 할 일 목록 데이터 생성
    // [{밥먹기}, {음료수}, {물}, {새로운 할일}];
    const updatedTodos = [...todos, newTodo];

    // 할 일 상태값 갱신
    setTodos(updatedTodos);
  };

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
        <TodoBody todos={todos} />
      </DefaultLayout>
    </>
  );
}
export default App;
