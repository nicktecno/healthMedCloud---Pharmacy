import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import * as S from "./style";
import "react-toastify/dist/ReactToastify.css";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputMask from "react-input-mask";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import notification from "../../services/notification";

import Lottie from "lottie-react";
import medicineManipulation from "../../public/images/medicineManipulation.json";

import { User } from "@styled-icons/fa-solid/User";
import { UserDoctor } from "@styled-icons/fa-solid/UserDoctor";
import { LogOut } from "@styled-icons/boxicons-regular/LogOut";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";

function UpdateRegisterComponent() {
  const history = useRouter();
  const [step, setStep] = useState(1);
  const [typeSelected, setTypeSelected] = useState("none");
  const [filter, setFilter] = useState("name");

  const styleAnimation = {
    width: "100%",
  };

  const schema = yup.object().shape({
    job: yup.string().required("Função obrigatória"),
    name: yup.string().required("Nome obrigatório"),
    lastName: yup.string().required("Sobrenome obrigatório"),
    email: yup.string().email("Digite um e-mail valido"),
    registerCode: yup.string().required("Registro obrigatório"),
    document: yup
      .string()
      .required("Documento obrigatório")
      .min(11, "Digite a quantidade certa de caracteres do documento")
      .transform((value) => value.split(/[-._/]/).join("")),
    birth: yup
      .string()
      .required("Data de nascimento obrigatória")
      .min(8, "Digite uma data válida")
      .transform((value) => value.split(/[-._/]/).join("")),

    workPhone: yup
      .string()
      .required("Telefone de trabalho obrigatório")
      .transform((value) =>
        value
          .replace("(", "")
          .replace(")", "")
          .replace("-", "")
          .replace(" ", "")
      ),
  });
  const schemaAddress = yup.object().shape({
    country: yup
      .string()
      .required("País obrigatório")
      .min(2, "Digite 2 caracteres da sigla")
      .transform((value) => value.split(/[-._/]/).join("")),
    addressType: yup.string().required("Selecione o tipo de endereço"),
    postalCode: yup
      .string()
      .required("Cep Obrigatório")
      .min(8, "Digite a quantidade certa de caracteres do Cep")
      .transform((value) => value.split(/[-._/]/).join("")),
    state: yup.string().required("Estado obrigatório"),
    city: yup.string().required("Cidade obrigatória"),
    street: yup.string().required("Rua obrigatória"),
    addressNumber: yup.string().required("Número obrigatório"),
    neighborhood: yup.string().required("Bairro obrigatório"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register: registerAddress,
    handleSubmit: handleSubmitAddress,
    setValue: setValueAddress,
    formState: { errors: addressErrors },
  } = useForm({
    resolver: yupResolver(schemaAddress),
  });

  async function handleRegister(e) {
    console.log(e);
    setValueAddress("country", "");
    setStep((prev) => prev + 1);
  }

  async function handleRegisterAddress(e) {
    console.log(e);
    setStep((prev) => prev + 1);
  }

  async function getAddress(cep) {
    await axios
      .get(`https://viacep.com.br/ws/${cep.replaceAll("_", "")}/json`)
      .then(function (response) {
        setValueAddress("country", "BR", { shouldDirty: true });
        setValueAddress("city", response.data.localidade);
        setValueAddress("street", response.data.logradouro);
        setValueAddress("neighborhood", response.data.bairro);
        setValueAddress("state", response.data.uf);
      })
      .catch(function (error) {
        console.log(error);
        notification("Cep inválido", "error");
      });
  }

  return (
    <S.GeneralContainer>
      <title>HealthMedCloud - Farmácia de Manipulação</title>

      <S.GeneralContent>
        <S.LeftContainer>
          <S.TitleName>HEALTHMEDCLOUD</S.TitleName>
          {typeSelected === "none" ? (
            <>
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
            </>
          ) : (
            <S.ContainerInputMessage>
              <S.Label>
                Procurando por{" "}
                {filter === "name"
                  ? "nome"
                  : filter === "cpf"
                  ? "CPF"
                  : filter === "cnpj"
                  ? "CNPJ"
                  : "registro"}
              </S.Label>
              <S.ContainerInput
                style={{
                  border: errors.homePhone?.message && "2px solid #ce171f",
                }}
              >
                <InputMask
                  mask={"(99)99999-9999"}
                  placeholder={"Pesquisar"}
                  {...register("homePhone")}
                />
                <span>
                  <SearchAlt />
                </span>
              </S.ContainerInput>
            </S.ContainerInputMessage>
          )}
        </S.LeftContainer>
        <S.RightContainer>
          <S.ContainerFunctions>
            <S.TitleWelcome>
              {typeSelected === "none"
                ? "Atualização de cadastro"
                : typeSelected === "client"
                ? "Procurar cliente por:"
                : "Procurar prescritor por:"}
            </S.TitleWelcome>

            {typeSelected === "none" ? (
              <>
                <S.ButtonRedirect onClick={() => setTypeSelected("client")}>
                  <User style={{ width: 26 }} />
                  Atualizar Cliente
                </S.ButtonRedirect>
                <S.ButtonRedirect onClick={() => setTypeSelected("prescriber")}>
                  <UserDoctor style={{ width: 26 }} />
                  Atualizar Prescritor
                </S.ButtonRedirect>
              </>
            ) : (
              <>
                <S.ButtonRedirect
                  className={filter === "name" && "active"}
                  onClick={() => setFilter("name")}
                >
                  Nome
                </S.ButtonRedirect>
                <S.ButtonRedirect
                  className={filter === "cpf" && "active"}
                  onClick={() => setFilter("cpf")}
                >
                  CPF
                </S.ButtonRedirect>
                {typeSelected === "client" && (
                  <S.ButtonRedirect
                    className={filter === "cnpj" && "active"}
                    onClick={() => setFilter("cnpj")}
                  >
                    CNPJ
                  </S.ButtonRedirect>
                )}
                {typeSelected === "prescriber" && (
                  <S.ButtonRedirect
                    className={filter === "register" && "active"}
                    onClick={() => setFilter("register")}
                  >
                    Registro
                  </S.ButtonRedirect>
                )}
              </>
            )}

            <S.ButtonRedirect
              className="logout"
              onClick={
                typeSelected === "none"
                  ? () => history.push("/manipulationPharmacy")
                  : () => setTypeSelected("none")
              }
            >
              <LogOut style={{ width: 30 }} /> Voltar
            </S.ButtonRedirect>
          </S.ContainerFunctions>
        </S.RightContainer>
      </S.GeneralContent>

      <ToastContainer />
    </S.GeneralContainer>
  );
}

export default UpdateRegisterComponent;
