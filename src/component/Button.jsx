import React from "react";

function Button({ todoAddHaedler, doneEvent, deleteList, updateBtnEvent, updateCommitBtnEvent, modalClosetBtnEvent, id, children }) {
  let props = "";
  switch (children) {
    case "추가하기":
      props = todoAddHaedler;
      break;
    case "완료":
      props = doneEvent;
      break;
    case "삭제":
      props = deleteList;
      break;
    case "삭제":
      props = deleteList;
      break;
      case "수정":
      props = updateBtnEvent;
      break;
      case "수정완료":
      props = updateCommitBtnEvent;
      break;
      case "닫기":
      props = modalClosetBtnEvent;
      break;
    default:
      break;
  }

  return (
    <button
      onClick={() => {
        props(id);
      }}
    >
      {children}
    </button>
  );
}

export default Button;
