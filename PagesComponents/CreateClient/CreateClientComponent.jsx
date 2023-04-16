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

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";

import Lottie from "lottie-react";
import medicineManipulation from "../../public/images/medicineManipulation.json";

function CreateClientComponent() {
  const history = useRouter();
  const [documentSelected, setDocumentSelected] = useState("CPF");

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Digite seu email")
      .email("Digite um Email valido"),
    password: yup.string().required("Digite sua senha"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const styleAnimation = {
    width: "100%",
  };

  async function handleLogout() {
    history.push("/");
  }

  async function handleRegister() {}

  return (
    <S.GeneralContainer>
      <title>HealthMedCloud - Farmácia de Manipulação</title>
      <S.GeneralContent>
        <S.ContainerRegister>
          <S.GeneralTitle>Cadastro do Cliente</S.GeneralTitle>
          <S.Tabs>
            <S.ButtonTab className="active">Básico</S.ButtonTab>
            <S.ButtonTab>Endereço</S.ButtonTab>
          </S.Tabs>
          <S.BoxInputs>
            <form onSubmit={handleSubmit(handleRegister)}>
              <S.ContainerInput
                style={{
                  border: errors.name?.message && "2px solid #ce171f",
                }}
              >
                <S.Input placeholder="Nome*" {...register("name")} />
              </S.ContainerInput>
              <S.ContainerInput
                style={{
                  border: errors.lastName?.message && "2px solid #ce171f",
                }}
              >
                <S.Input placeholder="Sobrenome*" {...register("lastName")} />
              </S.ContainerInput>
              <S.ContainerInput
                style={{
                  border: errors.nickName?.message && "2px solid #ce171f",
                }}
              >
                <S.Input placeholder="Apelido" {...register("nickName")} />
              </S.ContainerInput>
              <S.ContainerChecks>
                <S.ContainerCheck>
                  <S.Checks
                    className={documentSelected === "CPF" && "selected"}
                    onClick={() => setDocumentSelected("CPF")}
                  />
                  CPF
                </S.ContainerCheck>
                <S.ContainerCheck>
                  <S.Checks
                    className={documentSelected === "CNPJ" && "selected"}
                    onClick={() => setDocumentSelected("CNPJ")}
                  />
                  CNPJ
                </S.ContainerCheck>
              </S.ContainerChecks>
              <S.ContainerInput
                className={"doubleField"}
                style={{
                  border: errors.cpf?.message && "2px solid #ce171f",
                }}
              >
                <InputMask
                  mask={
                    documentSelected === "CPF"
                      ? "999.999.999-99"
                      : "99.999.999/9999-99"
                  }
                  placeholder={documentSelected === "CPF" ? "CPF*" : "CNPJ*"}
                  {...register("cpf")}
                />
              </S.ContainerInput>
              <S.ContainerInput
                className={"doubleField"}
                style={{
                  border: errors.documentNumber?.message && "2px solid #ce171f",
                }}
              >
                <S.Input
                  placeholder={
                    documentSelected === "CPF" ? "RG" : "Inscrição estadual*"
                  }
                  {...register("documentNumber")}
                />
              </S.ContainerInput>
              <S.ContainerInput
                style={{
                  border: errors.birth?.message && "2px solid #ce171f",
                }}
              >
                <InputMask
                  mask={"99/99/9999"}
                  placeholder={"Data de nascimento"}
                  {...register("birth")}
                />
              </S.ContainerInput>
            </form>
          </S.BoxInputs>
        </S.ContainerRegister>
      </S.GeneralContent>
    </S.GeneralContainer>
  );
}

export default CreateClientComponent;
