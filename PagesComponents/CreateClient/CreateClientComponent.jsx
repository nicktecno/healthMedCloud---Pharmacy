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
  const [step, setStep] = useState(1);

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    lastName: yup.string().required("Sobrenome obrigatório"),
    email: yup.string().email("Digite um e-mail valido"),
    sex: yup.string().required("Selecione o sexo"),
    document: yup
      .string()
      .required(
        documentSelected === "CPF" ? "Digite seu CPF" : "Digite seu CNPJ"
      )
      .min(
        documentSelected === "CPF" ? 11 : 14,
        "Digite a quantidade certa de caracteres do documento"
      )
      .transform((value) => value.split(/[-._/]/).join("")),
    documentNumber: yup.string(),
    phone: yup
      .string()
      .transform((value) =>
        value
          .replace("(", "")
          .replace(")", "")
          .replace("-", "")
          .replace(" ", "")
      ),
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

  async function handleRegister(e) {
    console.log(e);
    setStep((prev) => prev + 1);
  }

  return (
    <S.GeneralContainer>
      <title>HealthMedCloud - Farmácia de Manipulação</title>
      <S.GeneralContent>
        <S.ContainerRegister>
          <S.GeneralTitle>Cadastro do Cliente</S.GeneralTitle>
          <S.Tabs>
            <S.ButtonTab className={step === 1 && "active"}>Básico</S.ButtonTab>
            <S.ButtonTab className={step === 2 && "active"}>
              Endereço
            </S.ButtonTab>
          </S.Tabs>
          <S.BoxInputs>
            <form onSubmit={handleSubmit(handleRegister)}>
              <S.ContainerInput
                style={{
                  border:
                    errors.treatmentPronoun?.message && "2px solid #ce171f",
                }}
              >
                <select {...register("treatmentPronoun")}>
                  <option value="">Tratamento</option>
                  <option value="Senhor">Srº.</option>
                  <option value="Senhora">Srª</option>
                  <option value="Doutor">Drº</option>
                  <option value="Doutora">Drª</option>
                </select>
              </S.ContainerInput>
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
              <S.ContainerInput
                style={{
                  border: errors.sex?.message && "2px solid #ce171f",
                }}
              >
                <select {...register("sex")}>
                  <option value="">Sexo</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Não Definido">Não definido</option>
                </select>
              </S.ContainerInput>
              <S.ContainerInput>
                <select>
                  <option value="">Etnia</option>
                  <option value="Asiático">Asiático</option>
                  <option value="Branco">Branco</option>
                  <option value="Indígena">Indígena</option>
                  <option value="Negro">Negro</option>
                  <option value="Pardo">Pardo</option>
                </select>
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
                  border: errors.document?.message && "2px solid #ce171f",
                }}
              >
                <InputMask
                  mask={
                    documentSelected === "CPF"
                      ? "999.999.999-99"
                      : "99.999.999/9999-99"
                  }
                  placeholder={documentSelected === "CPF" ? "CPF*" : "CNPJ*"}
                  {...register("document")}
                />
              </S.ContainerInput>
              <S.ContainerInput
                className={"doubleField"}
                style={{
                  border:
                    errors.registerDocument?.message && "2px solid #ce171f",
                }}
              >
                <S.Input
                  placeholder={
                    documentSelected === "CPF" ? "RG" : "Inscrição estadual*"
                  }
                  {...register("registerDocument")}
                />
              </S.ContainerInput>
              <S.ContainerInput
                style={{
                  border: errors.birth?.message && "2px solid #ce171f",
                }}
              >
                <InputMask
                  mask={"99/99/9999"}
                  placeholder={
                    documentSelected === "CPF"
                      ? "Data de nascimento"
                      : "Data de fundação"
                  }
                  {...register("birth")}
                />
              </S.ContainerInput>

              <S.ContainerInput
                style={{
                  border: errors.civilStatus?.message && "2px solid #ce171f",
                }}
              >
                <select {...register("civilStatus")}>
                  <option value="">Estado civil</option>
                  <option value="Masculino">Casado</option>
                  <option value="Feminino">Solteiro</option>
                  <option value="Não Definido">Divorciado</option>
                </select>
              </S.ContainerInput>
              <S.ContainerInput
                style={{
                  border: errors.restrictions?.message && "2px solid #ce171f",
                }}
              >
                <S.Input
                  placeholder="Restrições de venda"
                  {...register("restrictions")}
                />
              </S.ContainerInput>
              <S.ContainerInput
                className={"doubleField"}
                style={{
                  border: errors.phone?.message && "2px solid #ce171f",
                }}
              >
                <InputMask
                  mask={"(99)99999-9999"}
                  placeholder={"Telefone"}
                  {...register("phone")}
                />
              </S.ContainerInput>
              <S.ContainerInput
                className={"doubleField"}
                style={{
                  border: errors.email?.message && "2px solid #ce171f",
                }}
              >
                <S.Input placeholder={"Email"} {...register("email")} />
              </S.ContainerInput>
              <S.ContainerButtons>
                <S.Button
                  type="button"
                  className="negative"
                  onClick={() => {
                    if (step > 1) {
                      setStep((prev) => prev - 1);
                    } else {
                      history.push("/manipulationPharmacy");
                    }
                  }}
                >
                  Voltar
                </S.Button>
                <S.Button type="submit">Avançar</S.Button>
              </S.ContainerButtons>
            </form>
          </S.BoxInputs>
        </S.ContainerRegister>
      </S.GeneralContent>
    </S.GeneralContainer>
  );
}

export default CreateClientComponent;
