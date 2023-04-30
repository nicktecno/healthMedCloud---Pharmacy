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
import { ArrowRightSquareFill } from "@styled-icons/bootstrap/ArrowRightSquareFill";

function UpdateRegisterComponent() {
  const history = useRouter();
  const [typeSelected, setTypeSelected] = useState("none");
  const [filter, setFilter] = useState("name");
  const [peopleData, setPeopleData] = useState(false);

  const styleAnimation = {
    width: "100%",
  };

  const schema = yup.object().shape({
    search: yup.string().required("Preenchimento obrigatório"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSearch(e) {
    console.log(e);
    setPeopleData(e);
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
              <form onSubmit={handleSubmit(handleSearch)}>
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
                    border: errors.search?.message && "2px solid #ce171f",
                  }}
                >
                  {filter === "name" || filter === "register" ? (
                    <input
                      type="text"
                      placeholder={"Pesquisar"}
                      {...register("search")}
                    />
                  ) : (
                    <InputMask
                      mask={
                        filter === "cpf"
                          ? "999.999.999-99"
                          : filter === "cnpj"
                          ? "99.999.999/9999-99"
                          : false
                      }
                      placeholder={"Pesquisar"}
                      {...register("search")}
                    />
                  )}

                  <button type="submit">
                    <SearchAlt />
                  </button>
                </S.ContainerInput>
              </form>
              <S.ContainerErrorMessage>
                {errors.search?.message && errors.search.message}
              </S.ContainerErrorMessage>
            </S.ContainerInputMessage>
          )}
          {peopleData !== false && (
            <S.ContainerPeople>
              <S.ContainerPerson
                onClick={() =>
                  history.push(
                    `/manipulationPharmacy/${
                      typeSelected === "client"
                        ? "updateClient"
                        : "updatePrescriber"
                    }/1`
                  )
                }
              >
                <span>Juninho Castanharo Silva</span>
                <ArrowRightSquareFill />
              </S.ContainerPerson>
              <S.ContainerPerson
                onClick={() =>
                  history.push("/manipulationPharmacy/updateClient/1")
                }
              >
                <span>Juninho Castanharo Silva</span>
                <ArrowRightSquareFill />
              </S.ContainerPerson>
              <S.ContainerPerson
                onClick={() =>
                  history.push("/manipulationPharmacy/updateClient/1")
                }
              >
                <span>Juninho Castanharo Silva</span>
                <ArrowRightSquareFill />
              </S.ContainerPerson>
              <S.ContainerPerson
                onClick={() =>
                  history.push("/manipulationPharmacy/updateClient/1")
                }
              >
                <span>Juninho Castanharo Silva</span>
                <ArrowRightSquareFill />
              </S.ContainerPerson>
            </S.ContainerPeople>
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
                  onClick={() => {
                    setValue("search", "");
                    setFilter("name");
                  }}
                >
                  Nome
                </S.ButtonRedirect>
                <S.ButtonRedirect
                  className={filter === "cpf" && "active"}
                  onClick={() => {
                    setValue("search", "");
                    setFilter("cpf");
                  }}
                >
                  CPF
                </S.ButtonRedirect>
                {typeSelected === "client" && (
                  <S.ButtonRedirect
                    className={filter === "cnpj" && "active"}
                    onClick={() => {
                      setValue("search", "");
                      setFilter("cnpj");
                    }}
                  >
                    CNPJ
                  </S.ButtonRedirect>
                )}
                {typeSelected === "prescriber" && (
                  <S.ButtonRedirect
                    className={filter === "register" && "active"}
                    onClick={() => {
                      setValue("search", "");
                      setFilter("register");
                    }}
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
