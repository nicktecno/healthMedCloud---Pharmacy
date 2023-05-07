import React from "react";
import * as S from "./style";
import "react-toastify/dist/ReactToastify.css";

import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

function ModalGeneralDelete({ openModal, setOpenModal, data, handleFunction }) {
  function handleCloseModal() {
    document.body.style.overflow = "auto";
    setOpenModal(false);
  }

  return (
    <S.ContainerModal className={openModal ? "active" : "inactive"}>
      <S.ContentModal>
        <div className="title">
          <div className="titleName">{data.title}</div>
          <div className="close" onClick={handleCloseModal}>
            <CloseOutline />
          </div>
        </div>
        <div className="body">
          <div className="dataBody">{data.body}</div>
          <div className="containerButtons">
            <button className="negative" onClick={() => handleCloseModal()}>
              {data.buttonNegative}
            </button>
            <button className="positive" onClick={() => handleFunction()}>
              {data.buttonPositive}
            </button>
          </div>
        </div>
      </S.ContentModal>
    </S.ContainerModal>
  );
}

export default ModalGeneralDelete;
