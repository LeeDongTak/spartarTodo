import React from "react";
import Button from "./Button";

const TodoList = ({ item, doneEvent, deleteList, modalListRead }) => {
  return (
    <li key={item.id}>
      <div className="todo_content">
        <p className="title">{item.title}</p>
        <p
          className="content_text"
          onClick={() => {
            modalListRead(item.id);
          }}
        >
          {item.content}
        </p>
      </div>
      <div className="btn_box">
        {item.status === false
        ?<Button doneEvent={doneEvent} id={item.id}>
        완료
      </Button>
        :<Button doneEvent={doneEvent} id={item.id}>
        취소
      </Button>
        }
        <Button deleteList={deleteList} id={item.id}>삭제</Button>
      </div>
    </li>
  );
};

export default TodoList;
