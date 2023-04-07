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
import { useRouter } from "next/router";

function HomeComponent() {
  const history = useRouter();

  return (
    <S.GeneralContainer>
      <title>HealthMedCloud - Sua saúde é nossa prioridade!</title>
      <S.LeftContainer>
        <S.TitleName>HEALTHMEDCLOUD</S.TitleName>
        <S.TitleSlogan>Sua saúde</S.TitleSlogan>
        <S.TitleSlogan className="strong">É nossa prioridade</S.TitleSlogan>
        <S.ImageCover src="/images/Home-001.png" />
      </S.LeftContainer>
      <S.RightContainer>
        <S.ButtonRedirect onClick={() => history.push("/login/clinic")}>
          <Medical style={{ width: 30 }} />
          Clínica
        </S.ButtonRedirect>

        <S.ButtonRedirect onClick={() => history.push("/login/pharmacy")}>
          <Medication style={{ width: 30 }} />
          Farmácia
        </S.ButtonRedirect>
        <S.ButtonRedirect
          onClick={() => history.push("/login/manipulationPharmacy")}
        >
          <PrescriptionBottleMedical />
          Farmácia de Manipulação
        </S.ButtonRedirect>
        <S.ButtonRedirect onClick={() => history.push("/login/petPharmacy")}>
          <Pets style={{ width: 30 }} /> Farmácia Pet
        </S.ButtonRedirect>
      </S.RightContainer>
    </S.GeneralContainer>
  );
}

export default HomeComponent;
