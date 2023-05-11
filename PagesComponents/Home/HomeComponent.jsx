import React, { useState, useEffect } from "react";

import * as S from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BagFill } from "@styled-icons/bootstrap/BagFill";
import { BagPlusFill } from "@styled-icons/bootstrap/BagPlusFill";
import { User } from "@styled-icons/fa-solid/User";
import { UserDoctor } from "@styled-icons/fa-solid/UserDoctor";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";
import { PrescriptionBottleMedical } from "@styled-icons/fa-solid/PrescriptionBottleMedical";
import { PersonEdit } from "@styled-icons/fluentui-system-filled/PersonEdit";

import { useRouter } from "next/router";

import Lottie from "lottie-react";
import pharmacyAnimation from "../../public/images/pharmacyAnimation.json";

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
          <S.TitleSlogan className="strong">Farmácia</S.TitleSlogan>
          <S.AnimationContainer>
            <Lottie
              animationData={pharmacyAnimation}
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
              onClick={() => history.push("/pharmacy/createClient")}
            >
              <User style={{ width: 25 }} />
              Cadastrar Cliente
            </S.ButtonRedirect>
            <S.ButtonRedirect
              onClick={() => history.push("/pharmacy/createPrescriber")}
            >
              <UserDoctor style={{ width: 26 }} />
              Cadastrar Prescritor
            </S.ButtonRedirect>
            <S.ButtonRedirect
              onClick={() => history.push("/pharmacy/updateRegister")}
            >
              <PersonEdit style={{ width: 30 }} />
              Atualizar cadastro
            </S.ButtonRedirect>
            <S.ButtonRedirect
              onClick={() => history.push("/pharmacy/createOrder")}
            >
              <BagPlusFill style={{ width: 30 }} />
              Criar Orçamento
            </S.ButtonRedirect>

            <S.ButtonRedirect onClick={() => history.push("/pharmacy/orders")}>
              <BagFill style={{ width: 30 }} />
              Consultar Orçamentos
            </S.ButtonRedirect>

            <S.ButtonRedirect
              onClick={() => history.push("/pharmacy/createFormula")}
            >
              <PrescriptionBottleMedical /> Cadastrar Remédio
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
