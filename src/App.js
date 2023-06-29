import { useRef, useState } from "react";
import "./App.css";
import { Place } from "@material-ui/icons";

function App() {
  const nextId = useRef(3);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "테스트 텍스트 🐰",
    },
    {
      id: 2,
      text: "테스트 입니다 👻",
    },
  ]);
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setTodos((prev) =>
      prev.concat({
        id: nextId.current++,
        text: text,
      }),
    );
    setText("");
  };

  console.log(todos);

  return (
    <div className="App">
      <form className="form" onSubmit={onSubmit}>
        <input
          className="input"
          type="text"
          value={text}
          placeholder="할 일을 추가해주세요."
          onChange={(e) => onChange(e)}
        />
        <button className="btn" type="submit">
          추가하기!
        </button>
      </form>
      <h2>TODO LIST</h2>
      <div className="cards">
        {todos.map((todo) => {
          return <div className="card">{todo.text}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
