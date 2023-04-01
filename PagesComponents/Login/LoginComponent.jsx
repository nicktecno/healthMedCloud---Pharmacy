import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import * as S from "./style";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import notification from "../../services/notification";

import { LogIn } from "@styled-icons/boxicons-regular/LogIn";
import { AccountCircle } from "@styled-icons/material-rounded/AccountCircle";
import { ArrowGoBack } from "@styled-icons/remix-line/ArrowGoBack";
import { EyeSlashFill } from "@styled-icons/bootstrap/EyeSlashFill";

import Lottie from "react-lottie";
import ManipulationPharmacyAnimation from "../../public/images/medicineManipulation.json";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

function LoginComponent() {
  const router = useRouter();
  const { slug } = router.query;
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [forgotActive, setForgotActive] = useState(false);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: ManipulationPharmacyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const schema = yup.object().shape(
    forgotActive
      ? {
          resetPassEmail: yup
            .string()
            .required("Digite seu email")
            .email("Digite um Email valido"),
        }
      : {
          email: yup
            .string()
            .required("Digite seu email")
            .email("Digite um Email valido"),
          password: yup.string().required("Digite sua senha"),
        }
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleLogin() {}
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
        <form onSubmit={handleSubmit(handleLogin)}>
          <S.ContainerInput
            style={{
              border: errors.email?.message && "2px solid #ce171f",
            }}
          >
            <S.Input
              className="user"
              placeholder="Login do usuário"
              {...register("email")}
            />
          </S.ContainerInput>
          <S.ContainerInput
            style={{
              border: errors.password?.message && "2px solid #ce171f",
            }}
          >
            <S.Input
              placeholder="Senha"
              type={passwordVisible ? "text" : "password"}
              {...register("password")}
            />
            <EyeSlashFill onClick={() => setPasswordVisible((prev) => !prev)} />
          </S.ContainerInput>
          <S.ForgotPassword>Esqueci minha senha</S.ForgotPassword>
          <S.ButtonRedirect type="submit" className="login">
            <LogIn style={{ width: 30 }} /> Login
          </S.ButtonRedirect>
        </form>
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
