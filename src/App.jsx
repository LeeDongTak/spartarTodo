import { useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList";

function App() {
  const [todoList, setTodoList] = useState([]); // todo리스트 데이터
  const [titleInput, setTitleInput] = useState(""); // 타이틀 인풋
  const [contentInput, setContentInput] = useState(""); // 컨탠츠 인풋
  /**
   * 제목 인풋 핸들러
   */
  const titleInputHaedler = (event) => {
    setTitleInput(event.target.value);
  };
  /**
   * 컨탠츠 인풋 핸들러
   */
  const contentInputHaedler = (event) => {
    setContentInput(event.target.value);
  };
  /**
   * 리스트 추가 이벤트
   */
  const todoAddHaedler = () => {
    let addtodo = {
      id: todoList.length + 1,
      title: titleInput,
      content: contentInput,
      status: "working",
    };
    if (titleInput === "") {
      alert("제목을 입력해 주세요");
    } else if (contentInput === "") {
      alert("내용을 입력해 주세요");
    } else {
      setTodoList([...todoList, addtodo]);
      setTitleInput("");
      setContentInput("");
    }
  };
  /**
   * 완료버튼을 누르면 상태를 done으로 바꿔주는 함수
   */
  const doneEvent = (id) => {
    let listFil = todoList.filter((x) => {
      return x.id === id;
    });
    let copy = [...listFil];
    copy[0].status = "done";
    setTodoList(copy);
  };
  /**
   * 리스트를 삭제하는 함수
   */
  const deleteList = (id) => {
    let listFil = todoList.filter((x) => {
      return x.id != id;
    });
    setTodoList(listFil);
  };

  return (
    <div className="App">
      <div className="todo_wrap">
        <div className="input_wrap">
          <div>
            <p>제목 : </p>
            <input
              value={titleInput}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  todoAddHaedler();
                }
              }}
              onChange={titleInputHaedler}
              type="text"
            />
          </div>
          <div>
            <p>내용 : </p>
            <input
              value={contentInput}
              onKeyUp={(e) => {
                if (e.key === "Enter") {
                  todoAddHaedler();
                }
              }}
              onChange={contentInputHaedler}
              type="text"
            />
          </div>
          <div>
            <button value={contentInput} onClick={todoAddHaedler}>
              추가하기
            </button>
          </div>
        </div>
        <div className="content_wrap">
          <div className="working_box">
            <div>Working</div>

            <ul>
              {todoList
                .filter((item) => {
                  return item.status === "working";
                })
                .map((item) => {
                  return (
                    <TodoList
                      key={item.id}
                      item={item}
                      doneEvent={doneEvent}
                      deleteList={deleteList}
                    />
                  );
                })}
            </ul>
          </div>
          <div className="done_box">
            <div>Done</div>
            <ul>
              {todoList
                .filter((item) => {
                  return item.status === "done";
                })
                .map((item) => {
                  return (
                    <TodoList
                      key={item.id}
                      item={item}
                      doneEvent={doneEvent}
                      deleteList={deleteList}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

// const TodoListWrap = ()=>{
//   return()
// }

export default App;
