import "./App.css";
import TodoHeader from "./components/todos/TodoHeader";
import DefaultLayout from "./layouts/DefaultLayout";
function App() {
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
        <TodoHeader />
      </DefaultLayout>
    </>
  );
}
export default App;
