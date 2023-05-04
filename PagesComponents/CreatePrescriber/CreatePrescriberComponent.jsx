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
import loadingAnimation from "../../public/images/loading.json";

function CreatePrescriberComponent() {
  const history = useRouter();
  const { slug } = history.query;
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);

  const styleAnimation = {
    minWidth: "250px",
    width: "30%",
  };

  const filterPathname = history.pathname.includes("/updatePrescriber");
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
    setValueAddress("city", "");

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

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <S.GeneralContainer>
      <title>HealthMedCloud - Farmácia de Manipulação</title>
      <S.GeneralContent>
        {loading ? (
          <S.ContainerLoading>
            <Lottie
              animationData={loadingAnimation}
              loop={true}
              style={styleAnimation}
            />
          </S.ContainerLoading>
        ) : (
          <S.ContainerRegister>
            <S.GeneralTitle>
              {filterPathname && slug !== undefined && slug.length > 0
                ? "Atualizar Prescritor"
                : "Cadastro do Prescritor"}
            </S.GeneralTitle>
            <S.Tabs>
              <S.ButtonTab className={step === 1 && "active"}>
                Básico
              </S.ButtonTab>
              <S.ButtonTab className={step !== 2 && step !== 3 ? "" : "active"}>
                Endereço
              </S.ButtonTab>
            </S.Tabs>
            <S.BoxInputs>
              {step === 1 ? (
                <form onSubmit={handleSubmit(handleRegister)}>
                  <S.ContainerInputMessage>
                    <S.Label>Função</S.Label>
                    <S.ContainerInput
                      style={{
                        border: errors.job?.message && "2px solid #ce171f",
                      }}
                    >
                      <select {...register("job")}>
                        <option value="Dentista">Dentista</option>
                        <option value="Farmaceutico">Farmacêutico</option>
                        <option value="Medico">Médico</option>
                        <option value="Veterinario">Veterinário</option>
                      </select>
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.job !== undefined && errors.job.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Nome</S.Label>
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
                    <S.ContainerErrorMessage>
                      {errors.name?.message && errors.name.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Sobrenome</S.Label>
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
                    <S.ContainerErrorMessage>
                      {errors.lastName?.message && errors.lastName.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>CPF</S.Label>
                    <S.ContainerInput
                      style={{
                        border: errors.document?.message && "2px solid #ce171f",
                      }}
                    >
                      <InputMask
                        mask={"999.999.999-99"}
                        placeholder={"CPF*"}
                        {...register("document")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.document?.message && errors.document.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Registro</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          errors.registerCode?.message && "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"11"}
                        placeholder="Registro*"
                        {...register("registerCode")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.registerCode?.message &&
                        errors.registerCode.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Livre para consultas</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          errors.ethnicity?.message && "2px solid #ce171f",
                      }}
                    >
                      <select {...register("available")}>
                        <option value="Sim">Sim</option>
                        <option value="Nao">Não</option>
                      </select>
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.ethnicity?.message && errors.ethnicity.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Data de nascimento</S.Label>
                    <S.ContainerInput
                      style={{
                        border: errors.birth?.message && "2px solid #ce171f",
                      }}
                    >
                      <InputMask
                        mask={"99/99/9999"}
                        placeholder={"Data de nascimento*"}
                        {...register("birth")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.birth?.message && errors.birth.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Telefone trabalho</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          errors.workPhone?.message && "2px solid #ce171f",
                      }}
                    >
                      <InputMask
                        mask={"(99)99999-9999"}
                        placeholder={"Telefone trabalho*"}
                        {...register("workPhone")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.workPhone?.message && errors.workPhone.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Celular</S.Label>
                    <S.ContainerInput
                      style={{
                        border: errors.celPhone?.message && "2px solid #ce171f",
                      }}
                    >
                      <InputMask
                        mask={"(99)99999-9999"}
                        placeholder={"Celular"}
                        {...register("celPhone")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.celhone?.message && errors.celPhone.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>

                  <S.ContainerInputMessage className="doubleField">
                    <S.Label>Telefone residencial</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          errors.homePhone?.message && "2px solid #ce171f",
                      }}
                    >
                      <InputMask
                        mask={"(99)99999-9999"}
                        placeholder={"Telefone residencial"}
                        {...register("homePhone")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.homePhone?.message && errors.homePhone.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>

                  <S.ContainerInputMessage className="doubleField">
                    <S.Label>Email</S.Label>
                    <S.ContainerInput
                      style={{
                        border: errors.email?.message && "2px solid #ce171f",
                      }}
                    >
                      <S.Input placeholder={"Email*"} {...register("email")} />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.email?.message && errors.email.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage className={"doubleField"}>
                    <S.Label>Nome da secretária</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          errors.assistantName?.message && "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"100"}
                        placeholder="Nome da secretária"
                        {...register("assistantName")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.assistantName?.message &&
                        errors.assistantName.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>

                  <S.ContainerInputMessage className={"doubleField"}>
                    <S.Label>Telefone da secretária</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          errors.assistantPhone?.message && "2px solid #ce171f",
                      }}
                    >
                      <InputMask
                        mask={"(99)99999-9999"}
                        placeholder={"Telefone da secretária"}
                        {...register("assistantPhone")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.assistantPhone?.message &&
                        errors.assistantPhone.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>

                  <S.ContainerButtons>
                    <S.Button
                      type="button"
                      className="negative"
                      onClick={() => {
                        history.push("/manipulationPharmacy");
                      }}
                    >
                      Voltar
                    </S.Button>
                    <S.Button type="submit">Avançar</S.Button>
                  </S.ContainerButtons>
                </form>
              ) : step === 2 ? (
                <form onSubmit={handleSubmitAddress(handleRegisterAddress)}>
                  <S.ContainerInputMessage>
                    <S.Label>Tipo de endereço</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          addressErrors.addressType?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <select {...registerAddress("addressType")}>
                        <option value="">Tipo de endereço</option>
                        <option value="Cobrança">Cobrança</option>
                        <option value="Entrega">Entrega</option>
                      </select>
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {addressErrors.addressType?.message &&
                        addressErrors.addressType.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Cep</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          addressErrors.postalCode?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <InputMask
                        mask={"99999-999"}
                        placeholder={"Cep"}
                        {...registerAddress("postalCode")}
                        onBlur={(e) => getAddress(e.target.value)}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {addressErrors.postalCode?.message &&
                        addressErrors.postalCode.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>País</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          addressErrors.country?.message && "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"2"}
                        placeholder={"País"}
                        {...registerAddress("country")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {addressErrors.country?.message &&
                        addressErrors.country.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage className="doubleField">
                    <S.Label>Estado</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          addressErrors.state?.message && "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"2"}
                        placeholder={"Estado"}
                        {...registerAddress("state")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {addressErrors.state?.message &&
                        addressErrors.state.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage className="doubleField">
                    <S.Label>Cidade</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          addressErrors.city?.message && "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"100"}
                        placeholder={"Cidade"}
                        {...registerAddress("city")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {addressErrors.city?.message &&
                        addressErrors.city.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage className="fullField">
                    <S.Label>Rua</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          addressErrors.street?.message && "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"60"}
                        placeholder="Rua"
                        {...registerAddress("street")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {addressErrors.street?.message &&
                        addressErrors.street.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Número</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          addressErrors.addressNumber?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"5"}
                        placeholder="Número"
                        {...registerAddress("addressNumber")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {addressErrors.addressNumber?.message &&
                        addressErrors.addressNumber.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Bairro</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          addressErrors.neighborhood?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"25"}
                        placeholder="Bairro"
                        {...registerAddress("neighborhood")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {addressErrors.neighborhood?.message &&
                        addressErrors.neighborhood.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Complemento</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          addressErrors.addressComplement?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"25"}
                        placeholder="Complemento"
                        {...registerAddress("addressComplement")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {addressErrors.addressComplement?.message &&
                        addressErrors.addressComplement.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>

                  <S.ContainerButtons>
                    <S.Button
                      type="button"
                      className="negative"
                      onClick={() => {
                        if (
                          filterPathname &&
                          slug !== undefined &&
                          slug.length > 0
                        ) {
                          setStep((prev) => prev - 1);
                        } else {
                          history.push("/manipulationPharmacy");
                        }
                      }}
                    >
                      {filterPathname && slug !== undefined && slug.length > 0
                        ? "Voltar"
                        : "Pular Etapa"}
                    </S.Button>
                    <S.Button type="submit">Salvar</S.Button>
                  </S.ContainerButtons>
                </form>
              ) : (
                <></>
              )}
            </S.BoxInputs>
          </S.ContainerRegister>
        )}
      </S.GeneralContent>
      <ToastContainer />
    </S.GeneralContainer>
  );
}

export default CreatePrescriberComponent;
