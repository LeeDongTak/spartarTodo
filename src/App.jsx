import { useState } from "react";
import "./App.css";
import TodoList from "./component/TodoList";
import Modal from "./component/Modal";
import Button from "./component/Button";

function App() {
  const [todoList, setTodoList] = useState([]); // todo리스트 데이터
  const [titleInput, setTitleInput] = useState(""); // 타이틀 인풋
  const [contentInput, setContentInput] = useState(""); // 컨탠츠 인풋
  const [modalTitleInput, setModalTitleInput] = useState(""); // 타이틀 인풋
  const [modalContentInput, setModalContentInput] = useState(""); // 컨탠츠 인풋
  const [modalRead, setModalRead] = useState(false); // 모달을 보여줄지 말지 결정하는 블리언 값
  const [modalId, setModalId] = useState(""); // 모달에 출력되는 리스트의 아이디
  const [modalTitle, setModalTitle] = useState(""); // 모달에 출력될 타이틀 텍스트
  const [modalContent, setModalContent] = useState(""); // 모달에 출력될 컨텐츠 텍스트
  const [modalContentUpd, setModalContentUpd] = useState(false);
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
      id:
        todoList.length === 0
          ? todoList.length
          : todoList[todoList.length - 1].id + 1,
      title: titleInput,
      content: contentInput,
      status: false,
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
    // let listcopy = [...todoList]
    let listMap = todoList.map((x) => {
      return x.id === id ? { ...x, status: true } : x;
    });
    setTodoList([...listMap]);
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

  /**
   * 모달 타이틀 인풋 핸들러
   */
  const modalTitleInputHaedler = (event) => {
    setModalTitleInput(event.target.value);
  };
  /**
   * 모달 컨탠츠 인풋 핸들러
   */
  const modlaContentInputHaedler = (event) => {
    setModalContentInput(event.target.value);
  };

  /**
   * 리스트컨탠츠를 모달로 보여주는 함수
   */
  const modalListRead = (id) => {
    setModalRead(true);
    let listFil = todoList.filter((item) => {
      return item.id === id;
    });
    setModalId(listFil[0].id);
    setModalTitle(listFil[0].title);
    setModalContent(listFil[0].content);
  };
  /**
   * 모달창 닫기 버튼
   */
  const modalClosetBtnEvent = () => {
    setModalRead(false);
  };
  /**
   * 모달창에서 수정input을 활성화하는 버튼
   */
  const updateBtnEvent = () => {
    setModalContentUpd(true);
  };
  /**
   * 모달창에서 수정input을 비활성화하고 수정을 완료하는 버튼
   */
  const updateCommitBtnEvent = () => {
    setModalContentUpd(false);

    let listMap = todoList.map((item) => {
      return item.id === modalId
        ? { ...item, title: modalTitleInput, content: modalContentInput }
        : item;
    });
    let listFil = listMap.filter((item) => {
      return item.id === modalId;
    });

    setModalTitle(listFil[0].title);
    setModalContent(listFil[0].content);
    setTodoList([...listMap]);
    setModalTitleInput("");
    setModalContentInput("");
    console.log(listMap);
  };
  //  console.log(todoList)

  return (
    <div className="App">
      {modalRead === true ? (
        <Modal
          modalContentUpd={modalContentUpd}
          modalTitle={modalTitle}
          modalContent={modalContent}
          modalTitleInputHaedler={modalTitleInputHaedler}
          modlaContentInputHaedler={modlaContentInputHaedler}
          updateBtnEvent={updateBtnEvent}
          updateCommitBtnEvent={updateCommitBtnEvent}
          modalClosetBtnEvent={modalClosetBtnEvent}
        />
      ) : null}
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
            <Button todoAddHaedler={todoAddHaedler}>추가하기</Button>
          </div>
        </div>
        <div className="content_wrap">
          <div className="working_box">
            <div>Working</div>

            <ul>
              {todoList
                .filter((item) => {
                  return item.status === false;
                })
                .map((item) => {
                  return (
                    <TodoList
                      key={item.id}
                      item={item}
                      doneEvent={doneEvent}
                      deleteList={deleteList}
                      modalListRead={modalListRead}
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
                  return item.status === true;
                })
                .map((item) => {
                  return (
                    <TodoList
                      key={item.id}
                      item={item}
                      doneEvent={doneEvent}
                      deleteList={deleteList}
                      modalListRead={modalListRead}
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
