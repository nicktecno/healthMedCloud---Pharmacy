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

  async function handleRegister(e) {
    console.log(e);
    setStep((prev) => prev + 1);
  }

  async function getAddress(cep) {
    await axios
      .get(`https://viacep.com.br/ws/${cep.replaceAll("_", "")}/json`)
      .then(function (response) {
        console.log(response.data);
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
        <S.ContainerRegister>
          <S.GeneralTitle>Cadastro do Cliente</S.GeneralTitle>
          <S.Tabs>
            <S.ButtonTab className={step === 1 && "active"}>Básico</S.ButtonTab>
            <S.ButtonTab className={step === 2 && "active"}>
              Endereço
            </S.ButtonTab>
          </S.Tabs>
          <S.BoxInputs>
            {step === 1 ? (
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
                  <S.Input
                    maxLength={"25"}
                    placeholder="Nome*"
                    {...register("name")}
                  />
                </S.ContainerInput>
                <S.ContainerInput
                  style={{
                    border: errors.lastName?.message && "2px solid #ce171f",
                  }}
                >
                  <S.Input
                    maxLength={"35"}
                    placeholder="Sobrenome*"
                    {...register("lastName")}
                  />
                </S.ContainerInput>
                <S.ContainerInput
                  style={{
                    border: errors.nickName?.message && "2px solid #ce171f",
                  }}
                >
                  <S.Input
                    maxLength={"25"}
                    placeholder="Apelido"
                    {...register("nickName")}
                  />
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
                    maxLength={"25"}
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
                    maxLength={"45"}
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
            ) : step === 2 ? (
              <form onSubmit={handleSubmit(handleRegister)}>
                <S.ContainerInput
                  style={{
                    border: errors.addressType?.message && "2px solid #ce171f",
                  }}
                >
                  <select {...register("addressType")}>
                    <option value="">Tipo de Endereço</option>
                    <option value="Cobrança">Cobrança</option>
                    <option value="Entrega">Entrega</option>
                  </select>
                </S.ContainerInput>
                <S.ContainerInput
                  style={{
                    border: errors.postalCode?.message && "2px solid #ce171f",
                  }}
                >
                  <InputMask
                    mask={"99999-999"}
                    placeholder={"Cep"}
                    {...register("postalCode")}
                    onBlur={(e) => getAddress(e.target.value)}
                  />
                </S.ContainerInput>

                <S.ContainerInput
                  style={{
                    border: errors.country?.message && "2px solid #ce171f",
                  }}
                >
                  <InputMask
                    mask={"aa"}
                    placeholder={"País"}
                    {...register("Country")}
                  />
                </S.ContainerInput>
                <S.ContainerInput
                  className="doubleFieldMinor"
                  style={{
                    border: errors.state?.message && "2px solid #ce171f",
                  }}
                >
                  <InputMask
                    mask={"aa"}
                    placeholder={"Estado"}
                    {...register("state")}
                    onBlur={(e) => getAddress(e.target.value)}
                  />
                </S.ContainerInput>
                <S.ContainerInput
                  className="doubleFieldMajor"
                  style={{
                    border: errors.street?.message && "2px solid #ce171f",
                  }}
                >
                  <S.Input
                    maxLength={"60"}
                    placeholder="Rua"
                    {...register("street")}
                  />
                </S.ContainerInput>
                <S.ContainerInput
                  style={{
                    border:
                      errors.addressNumber?.message && "2px solid #ce171f",
                  }}
                >
                  <S.Input
                    maxLength={"5"}
                    placeholder="Número"
                    {...register("addressNumber")}
                  />
                </S.ContainerInput>
                <S.ContainerInput
                  style={{
                    border:
                      errors.addressComplement?.message && "2px solid #ce171f",
                  }}
                >
                  <S.Input
                    maxLength={"25"}
                    placeholder="Complemento"
                    {...register("addressComplement")}
                  />
                </S.ContainerInput>
                <S.ContainerInput
                  style={{
                    border: errors.neighborhood?.message && "2px solid #ce171f",
                  }}
                >
                  <S.Input
                    maxLength={"25"}
                    placeholder="Bairro"
                    {...register("neighborhood")}
                  />
                </S.ContainerInput>

                <S.ContainerButtons>
                  <S.Button
                    type="button"
                    className="negative"
                    onClick={() => {
                      if (step > 1) {
                        setStep((prev) => prev + 1);
                      } else {
                        history.push("/manipulationPharmacy");
                      }
                    }}
                  >
                    {step > 1 ? "Pular Etapa" : "Voltar"}
                  </S.Button>
                  <S.Button type="submit">Avançar</S.Button>
                </S.ContainerButtons>
              </form>
            ) : (
              <></>
            )}
          </S.BoxInputs>
        </S.ContainerRegister>
      </S.GeneralContent>
      <ToastContainer />
    </S.GeneralContainer>
  );
}

export default CreateClientComponent;
