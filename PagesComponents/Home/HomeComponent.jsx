import React, { useState, useEffect } from "react";

import Link from "next/link";
import notification from "../../services/notification";

import * as S from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { PrescriptionBottleMedical } from "@styled-icons/fa-solid/PrescriptionBottleMedical";

import { Pets } from "@styled-icons/material/Pets";

import { BagFill } from "@styled-icons/bootstrap/BagFill";
import { BagPlusFill } from "@styled-icons/bootstrap/BagPlusFill";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";

import { useRouter } from "next/router";

function HomeComponent() {
  const history = useRouter();

  async function handleLogout() {
    history.push("/");
  }

  return (
    <S.GeneralContainer>
      <title>HealthMedCloud - Farmácia de Manipulação</title>
      <S.GeneralContent>
        <S.LeftContainer>
          <S.TitleName>HEALTHMEDCLOUD</S.TitleName>
          <S.TitleSlogan className="strong">
            Farmácia de Manipulação
          </S.TitleSlogan>
          <S.ImageCover src="/images/Home-001.png" />
        </S.LeftContainer>
        <S.RightContainer>
          <S.ContainerFunctions>
            <S.TitleWelcome>Seja bem vindo</S.TitleWelcome>
            <S.TitleWelcome className="strong">Juvenal!</S.TitleWelcome>

            <S.ButtonRedirect
              onClick={() => history.push("/manipulationPharmacy/createOrder")}
            >
              <BagPlusFill style={{ width: 30 }} />
              Criar Orçamento
            </S.ButtonRedirect>

            <S.ButtonRedirect
              onClick={() => history.push("/manipulationPharmacy/orders")}
            >
              <BagFill style={{ width: 30 }} />
              Consultar Orçamentos
            </S.ButtonRedirect>
            <S.ButtonRedirect
              onClick={() => history.push("/manipulationPharmacy/createClient")}
            >
              <UserPlus style={{ width: 40 }} />
              Cadastrar Cliente
            </S.ButtonRedirect>
            <S.ButtonRedirect
              onClick={() =>
                history.push("/manipulationPharmacy/createFormula")
              }
            >
              <PrescriptionBottleMedical /> Cadastrar Princípio Ativo
            </S.ButtonRedirect>
            <S.ButtonRedirect className="logout" onClick={() => handleLogout()}>
              <LogOut style={{ width: 30 }} /> Sair
            </S.ButtonRedirect>
          </S.ContainerFunctions>
        </S.RightContainer>
      </S.GeneralContent>
    </S.GeneralContainer>
  );
}

export default HomeComponent;
