import React, { useState, useEffect } from "react";

import Link from "next/link";
import notification from "../../services/notification";

import * as S from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PrescriptionBottleMedical } from "@styled-icons/fa-solid/PrescriptionBottleMedical";
import { Medication } from "@styled-icons/material/Medication";
import { Pets } from "@styled-icons/material/Pets";
import { Medical } from "@styled-icons/ionicons-solid/Medical";

function HomeComponent() {
  return (
    <S.GeneralContainer>
      <S.LeftContainer>
        <S.TitleName>HEALTHMEDCLOUD</S.TitleName>
        <S.TitleSlogan>Sua saúde</S.TitleSlogan>
        <S.TitleSlogan className="strong">É nossa prioridade</S.TitleSlogan>
        <S.ImageCover src="/images/Home-001.png" />
      </S.LeftContainer>
      <S.RightContainer>
        <S.ButtonRedirect>
          <Medical style={{ width: 30 }} />
          Clínica
        </S.ButtonRedirect>
        <S.ButtonRedirect>
          <Medication style={{ width: 30 }} />
          Farmácia
        </S.ButtonRedirect>
        <S.ButtonRedirect>
          <PrescriptionBottleMedical />
          Farmácia de Manipulação
        </S.ButtonRedirect>
        <S.ButtonRedirect>
          <Pets style={{ width: 30 }} /> Farmácia Pet
        </S.ButtonRedirect>
      </S.RightContainer>
    </S.GeneralContainer>
  );
}

export default HomeComponent;
