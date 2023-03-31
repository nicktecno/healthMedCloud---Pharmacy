import React, { useState, useEffect } from "react";

import Link from "next/link";
import notification from "../../services/notification";

import * as S from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function HomeComponent() {
  return (
    <S.GeneralContainer>
      <S.LeftContainer>
        <S.TitleName>HEALTHMEDCLOUD</S.TitleName>
        <S.TitleSlogan>Sua saúde</S.TitleSlogan>
        <S.TitleSlogan className="strong">É nossa prioridade</S.TitleSlogan>
        <S.ImageCover src="/images/Home-001.png" />
      </S.LeftContainer>
    </S.GeneralContainer>
  );
}

export default HomeComponent;
