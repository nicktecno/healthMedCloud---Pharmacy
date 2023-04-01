import React, { useState, useEffect } from "react";

import Link from "next/link";
import notification from "../../services/notification";

import * as S from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { LogIn } from "@styled-icons/boxicons-regular/LogIn";
import { AccountCircle } from "@styled-icons/material-rounded/AccountCircle";
import { ArrowGoBack } from "@styled-icons/remix-line/ArrowGoBack";

import { useRouter } from "next/router";

import Lottie from "react-lottie";
import ManipulationPharmacyAnimation from "../../public/images/medicineManipulation.json";
import { EyeSlashFill } from "@styled-icons/bootstrap/EyeSlashFill";

function LoginComponent() {
  const router = useRouter();
  const { slug } = router.query;

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: ManipulationPharmacyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <S.GeneralContainer>
      <S.LeftContainer>
        <S.TitleName>HEALTHMEDCLOUD</S.TitleName>

        <S.TitleSlogan className="strong">
          {slug !== undefined &&
            slug[0] === "manipulationPharmacy" &&
            "Farmácia de Manipulação"}
          {slug !== undefined && slug[0] === "pharmacy" && "Farmácia"}
          {slug !== undefined && slug[0] === "clinic" && "Clínica"}
          {slug !== undefined && slug[0] === "petPharmacy" && "Farmácia Pet"}
        </S.TitleSlogan>
        <S.ImageCover src="/images/Home-001.png" />
      </S.LeftContainer>
      <S.RightContainer>
        <S.ContainerInput>
          <S.Input className="user" placeholder="Login do usuário" />
        </S.ContainerInput>
        <S.ContainerInput>
          <S.Input placeholder="Senha" />
          <EyeSlashFill />
        </S.ContainerInput>

        <S.ButtonRedirect>
          <LogIn style={{ width: 30 }} /> Login
        </S.ButtonRedirect>
        <S.ButtonRedirect>
          <AccountCircle style={{ width: 30 }} /> Registrar
        </S.ButtonRedirect>
        <S.ButtonRedirect onClick={() => router.push("/")}>
          <ArrowGoBack style={{ width: 30 }} /> Voltar
        </S.ButtonRedirect>
      </S.RightContainer>
    </S.GeneralContainer>
  );
}

export default LoginComponent;
