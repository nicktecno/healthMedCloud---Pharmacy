import React, { useState, useEffect } from "react";

import Link from "next/link";
import notification from "../../services/notification";

import * as S from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BagFill } from "@styled-icons/bootstrap/BagFill";
import { BagPlusFill } from "@styled-icons/bootstrap/BagPlusFill";
import { UserPlus } from "@styled-icons/boxicons-regular/UserPlus";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";
import { PrescriptionBottleMedical } from "@styled-icons/fa-solid/PrescriptionBottleMedical";

import { useRouter } from "next/router";

import Lottie from "lottie-react";
import medicineManipulation from "../../public/images/medicineManipulation.json";

function CreateOrderComponent() {
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
      <S.GeneralContent></S.GeneralContent>
    </S.GeneralContainer>
  );
}

export default CreateOrderComponent;
