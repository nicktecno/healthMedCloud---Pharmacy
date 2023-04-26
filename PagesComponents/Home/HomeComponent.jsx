import React, { useState, useEffect } from "react";

import Link from "next/link";
import notification from "../../services/notification";

import * as S from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BagFill } from "@styled-icons/bootstrap/BagFill";
import { BagPlusFill } from "@styled-icons/bootstrap/BagPlusFill";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { UserDoctor } from "@styled-icons/fa-solid/UserDoctor";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";
import { PrescriptionBottleMedical } from "@styled-icons/fa-solid/PrescriptionBottleMedical";

import { useRouter } from "next/router";

import Lottie from "lottie-react";
import medicineManipulation from "../../public/images/medicineManipulation.json";

function HomeComponent() {
  const history = useRouter();

  const styleAnimation = {
    width: "100%",
  };

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
          <S.AnimationContainer>
            <Lottie
              animationData={medicineManipulation}
              loop={false}
              style={styleAnimation}
            />
          </S.AnimationContainer>
        </S.LeftContainer>
        <S.RightContainer>
          <S.ContainerFunctions>
            <S.TitleWelcome>Seja bem vindo</S.TitleWelcome>
            <S.TitleWelcome className="strong">Juvenal!</S.TitleWelcome>
            <S.ButtonRedirect
              onClick={() => history.push("/manipulationPharmacy/createClient")}
            >
              <UserPlus style={{ width: 40 }} />
              Cadastrar Cliente
            </S.ButtonRedirect>
            <S.ButtonRedirect
              onClick={() =>
                history.push("/manipulationPharmacy/createPrescriber")
              }
            >
              <UserDoctor style={{ width: 28 }} />
              Cadastrar Prescritor
            </S.ButtonRedirect>
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
