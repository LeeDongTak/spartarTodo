import React from "react";
import Button from "./Button";

function Modal({modalContentUpd,modalTitle,modalContent,modalTitleInputHaedler,modlaContentInputHaedler,updateBtnEvent,updateCommitBtnEvent,modalClosetBtnEvent}) {
  return (
    <div className="list_content_modal">
      <div className="bg"></div>
      <div className="modal_wrap">
        {modalContentUpd === false ? (
          <div className="modal_text_box">
            <p className="modal_title">{modalTitle}</p>
            <p className="modal_content">{modalContent}</p>
          </div>
        ) : (
          <div className="modal_text_box">
            <input
              className="modal_title"
              placeholder={modalTitle}
              type="text"
              onChange={modalTitleInputHaedler}
            />
            <textarea
              className="modal_content"
              placeholder={modalContent}
              cols="41"
              rows="20"
              onChange={modlaContentInputHaedler}
            ></textarea>
          </div>
        )}

        <div className="modal_btn_box">
          {modalContentUpd === false ? (
            <Button  updateBtnEvent={updateBtnEvent}>
              수정
            </Button>
          ) : (
            <Button updateCommitBtnEvent={updateCommitBtnEvent}>수정완료</Button>
          )}

          <Button modalClosetBtnEvent={modalClosetBtnEvent}>닫기</Button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
