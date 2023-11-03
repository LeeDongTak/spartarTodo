import React from 'react'

const TodoList = ({ item, doneEvent, deleteList }) => {
    return (
      <li key={item.id}>
        <div className="todo_content">
          <p className="title">{item.title}</p>
          <p className="content_text">{item.content}</p>
        </div>
        <div className="btn_box">
          <p
            onClick={() => {
              doneEvent(item.id);
            }}
          >
            완료
          </p>
          <p
            onClick={() => {
              deleteList(item.id);
            }}
          >
            삭제
          </p>
        </div>
      </li>
    );
  };

export default TodoList