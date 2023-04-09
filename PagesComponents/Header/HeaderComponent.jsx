import React, { useState, useEffect } from "react";

import Link from "next/link";
import notification from "../../services/notification";

import * as S from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/router";
import Image from "next/image";

import { AccountCircle } from "@styled-icons/material-rounded/AccountCircle";
import { BagFill } from "@styled-icons/bootstrap/BagFill";

function HeaderComponent() {
  const history = useRouter();

  return (
    <S.GeneralContainer>
      <S.GeneralContent>
        <S.ContainerImage>
          <img src={"/images/HeaderLogo.png"} />
          <span>Healthmedcloud</span>
        </S.ContainerImage>
        <S.ContainerFunctions>
          <S.ContainerFunction
            onClick={() => history.push("/manipulationPharmacy/orders")}
          >
            <BagFill />
            <span>Orçamentos</span>
          </S.ContainerFunction>
          <S.ContainerFunction
            onClick={() => history.push("/manipulationPharmacy")}
          >
            <AccountCircle style={{ marginTop: 5, width: 40 }} />
            <span>Juvenal</span>
          </S.ContainerFunction>
        </S.ContainerFunctions>
      </S.GeneralContent>
    </S.GeneralContainer>
  );
}

export default HeaderComponent;
