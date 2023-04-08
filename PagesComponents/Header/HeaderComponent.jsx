import React, { useState, useEffect } from "react";

import Link from "next/link";
import notification from "../../services/notification";

import * as S from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import Image from "next/image";

import { AccountCircle } from "@styled-icons/material-rounded/AccountCircle";

function HeaderComponent() {
  const history = useRouter();

  return (
    <S.GeneralContainer>
      <S.ContainerImage>
        <img src={"/images/HeaderLogo.png"} />
      </S.ContainerImage>
      <S.ContainerFunctions>
        <S.ContainerFunction>
          <AccountCircle style={{ width: 40 }} />
          <span>Juvenal</span>
        </S.ContainerFunction>
      </S.ContainerFunctions>
    </S.GeneralContainer>
  );
}

export default HeaderComponent;
