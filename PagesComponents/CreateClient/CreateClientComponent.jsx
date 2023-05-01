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

import { Edit } from "@styled-icons/boxicons-solid/Edit";
import { Delete } from "@styled-icons/fluentui-system-filled/Delete";
import { SearchAlt } from "@styled-icons/boxicons-regular/SearchAlt";

function CreateClientComponent() {
  const history = useRouter();
  const { slug } = history.query;
  const [documentSelected, setDocumentSelected] = useState("CPF");
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);

  const styleAnimation = {
    minWidth: "250px",
    width: "30%",
  };

  const filterPathname = history.pathname.includes("/updateClient");

  const schema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    lastName: yup.string().required("Sobrenome obrigatório"),
    email: yup.string().email("Digite um e-mail valido"),
    sex: yup.string().required("Selecione o sexo"),
    document: yup
      .string()
      .required("Documento obrigatório")
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

  const schemaMedicalHistory = yup.object().shape({
    religionSchool: yup.string().required("Campo obrigatório"),
    work: yup.string().required("Campo obrigatório"),
    location: yup.string().required("Campo obrigatório"),
    religionSchool: yup.string().required("Campo obrigatório"),
    complaint: yup.string().required("Campo obrigatório"),
    reason: yup.string().required("Campo obrigatório"),
    notes: yup.string().required("Campo obrigatório"),
    description: yup.string().required("Campo obrigatório"),
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
    register: registerMedicalHistory,
    handleSubmit: handleSubmitMedicalHistory,
    setValue: setValueMedicalHistory,
    formState: { errors: medicalHistoryErrors },
  } = useForm({
    resolver: yupResolver(schemaMedicalHistory),
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
    if (filterPathname && slug !== undefined && slug.length > 0) {
      setStep((prev) => prev + 2);
    } else {
      setStep((prev) => prev + 1);
    }
  }

  async function handleRegisterAddress(e) {
    console.log(e);
    setStep((prev) => prev + 1);
  }

  async function handleRegisterMedicalHistory(e) {
    console.log(e);
    history.push("/manipulationPharmacy");
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
                ? "Atualizar Cliente"
                : "Cadastro do Cliente"}
            </S.GeneralTitle>
            <S.Tabs>
              <S.ButtonTab className={step === 1 && "active"}>
                Básico
              </S.ButtonTab>
              <S.ButtonTab className={step === 2 || step === 3 ? "active" : ""}>
                Endereço
              </S.ButtonTab>
              <S.ButtonTab className={step === 4 || step === 5 ? "active" : ""}>
                Histórico Médico
              </S.ButtonTab>
            </S.Tabs>
            <S.BoxInputs>
              {step === 1 ? (
                <form onSubmit={handleSubmit(handleRegister)}>
                  <S.ContainerInputMessage>
                    <S.Label>Tratamento</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          errors.treatmentPronoun?.message &&
                          "2px solid #ce171f",
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
                    <S.ContainerErrorMessage>
                      {errors.treatmentPronoun?.message &&
                        errors.treatmentPronoun.message}
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
                    <S.Label>Apelido</S.Label>
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
                    <S.ContainerErrorMessage>
                      {errors.nickName?.message && errors.nickName.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Sexo</S.Label>
                    <S.ContainerInput
                      style={{
                        border: errors.sex?.message && "2px solid #ce171f",
                      }}
                    >
                      <select {...register("sex")}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Não Definido">Não definido</option>
                      </select>
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.sex?.message && errors.sex.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Etnia</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          errors.ethnicity?.message && "2px solid #ce171f",
                      }}
                    >
                      <select {...register("ethnicity")}>
                        <option value="Asiático">Asiático</option>
                        <option value="Branco">Branco</option>
                        <option value="Indígena">Indígena</option>
                        <option value="Negro">Negro</option>
                        <option value="Pardo">Pardo</option>
                      </select>
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.ethnicity?.message && errors.ethnicity.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
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
                  <S.ContainerInputMessage className={"doubleField"}>
                    <S.Label>
                      {documentSelected === "CPF" ? "CPF" : "CNPJ"}
                    </S.Label>
                    <S.ContainerInput
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
                        placeholder={
                          documentSelected === "CPF" ? "CPF*" : "CNPJ*"
                        }
                        {...register("document")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.document?.message && errors.document.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage className={"doubleField"}>
                    <S.Label>
                      {documentSelected === "CPF" ? "RG" : "Inscrição Estadual"}
                    </S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          errors.registerDocument?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"25"}
                        placeholder={
                          documentSelected === "CPF"
                            ? "RG"
                            : "Inscrição estadual*"
                        }
                        {...register("registerDocument")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.registerDocument?.message &&
                        errors.registerDocument.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>
                      {documentSelected === "CPF"
                        ? "Data de nascimento"
                        : "Data de fundação"}
                    </S.Label>
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
                    <S.ContainerErrorMessage>
                      {errors.birth?.message && errors.birth.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>

                  <S.ContainerInputMessage>
                    <S.Label>Estado civil</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          errors.civilStatus?.message && "2px solid #ce171f",
                      }}
                    >
                      <select {...register("civilStatus")}>
                        <option value="Masculino">Casado</option>
                        <option value="Feminino">Solteiro</option>
                        <option value="Não Definido">Divorciado</option>
                      </select>
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.civilStatus?.message &&
                        errors.civilStatus.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Restrições de venda</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          errors.restrictions?.message && "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"45"}
                        placeholder="Restrições de venda"
                        {...register("restrictions")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.restrictions?.message &&
                        errors.restrictions.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage className={"doubleField"}>
                    <S.Label>Telefone</S.Label>
                    <S.ContainerInput
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
                    <S.ContainerErrorMessage>
                      {errors.phone?.message && errors.phone.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage className={"doubleField"}>
                    <S.Label>Email</S.Label>
                    <S.ContainerInput
                      style={{
                        border: errors.email?.message && "2px solid #ce171f",
                      }}
                    >
                      <S.Input placeholder={"Email"} {...register("email")} />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {errors.email?.message && errors.email.message}
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
                        setStep((prev) => prev + 2);
                      }}
                    >
                      Pular Etapa
                    </S.Button>
                    <S.Button type="submit">
                      {filterPathname && slug !== undefined && slug.length > 0
                        ? "Avançar"
                        : "Salvar"}
                    </S.Button>
                  </S.ContainerButtons>
                </form>
              ) : step === 3 ? (
                <S.ContainerButtons>
                  <S.Button
                    type="button"
                    className="negative"
                    onClick={() => {
                      setStep((prev) => prev - 1);
                    }}
                  >
                    Adicionar novo endereço
                  </S.Button>
                  <S.Button
                    onClick={() => {
                      setStep((prev) => prev + 1);
                    }}
                  >
                    Avançar
                  </S.Button>
                </S.ContainerButtons>
              ) : step === 4 ? (
                <S.ContainerGeneralFunctions>
                  <S.ContainerCards>
                    <S.Card>
                      <div className="data">
                        <strong>Dr. Gamaliel</strong>
                        <span>01/05/21</span>
                      </div>
                      <div className="functions">
                        <SearchAlt />
                        <Edit />
                        <Delete />
                      </div>
                    </S.Card>
                    <S.Card>
                      <div className="data">
                        <strong>Dr. Gamaliel</strong>
                        <span>01/05/21</span>
                      </div>
                      <div className="functions">
                        <SearchAlt />
                        <Edit />
                        <Delete />
                      </div>
                    </S.Card>
                    <S.Card>
                      <div className="data">
                        <strong>Dr. Gamaliel</strong>
                        <span>01/05/21</span>
                      </div>
                      <div className="functions">
                        <SearchAlt />
                        <Edit />
                        <Delete />
                      </div>
                    </S.Card>
                  </S.ContainerCards>
                  <S.ContainerButtons>
                    <S.Button
                      type="button"
                      className="negative"
                      onClick={() => {
                        setStep((prev) => prev + 1);
                      }}
                    >
                      Adicionar histórico médico
                    </S.Button>
                    <S.Button
                      onClick={() => {
                        history.push("/manipulationPharmacy");
                      }}
                    >
                      {filterPathname && slug !== undefined && slug.length > 0
                        ? "Finalizar atualização"
                        : "Finalizar cadastro"}
                    </S.Button>
                  </S.ContainerButtons>
                </S.ContainerGeneralFunctions>
              ) : (
                <form
                  onSubmit={handleSubmitMedicalHistory(
                    handleRegisterMedicalHistory
                  )}
                >
                  <S.ContainerInputMessage>
                    <S.Label>Religião e escolaridade</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          medicalHistoryErrors.religionSchool?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"150"}
                        placeholder="Religião e escolaridade"
                        {...registerMedicalHistory("religionSchool")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {medicalHistoryErrors.religionSchool?.message &&
                        medicalHistoryErrors.religionSchool.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage>
                    <S.Label>Profissão</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          medicalHistoryErrors.work?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"100"}
                        placeholder="Profissão"
                        {...registerMedicalHistory("work")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {medicalHistoryErrors.work?.message &&
                        medicalHistoryErrors.work.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>

                  <S.ContainerInputMessage>
                    <S.Label>Onde Nasceu e mora</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          medicalHistoryErrors.location?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"150"}
                        placeholder="Onde nasceu e mora"
                        {...registerMedicalHistory("location")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {medicalHistoryErrors.location?.message &&
                        medicalHistoryErrors.location.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage className="doubleField">
                    <S.Label>Queixa principal</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          medicalHistoryErrors.complaint?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"200"}
                        placeholder="Queixa principal"
                        {...registerMedicalHistory("complaint")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {medicalHistoryErrors.complaint?.message &&
                        medicalHistoryErrors.complaint.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage className="doubleField">
                    <S.Label>Motivo da consulta</S.Label>
                    <S.ContainerInput
                      style={{
                        border:
                          medicalHistoryErrors.reason?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <S.Input
                        maxLength={"200"}
                        placeholder="Motivo da consulta"
                        {...registerMedicalHistory("reason")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {medicalHistoryErrors.reason?.message &&
                        medicalHistoryErrors.reason.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage className="doubleField">
                    <S.Label>Anotações</S.Label>
                    <S.ContainerInput
                      className="textArea"
                      style={{
                        border:
                          medicalHistoryErrors.notes?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <S.TextArea
                        maxLength={"2500"}
                        placeholder="Anotações"
                        {...registerMedicalHistory("notes")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {medicalHistoryErrors.notes?.message &&
                        medicalHistoryErrors.notes.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>
                  <S.ContainerInputMessage className="doubleField">
                    <S.Label>Descrição da doença atual</S.Label>
                    <S.ContainerInput
                      className="textArea"
                      style={{
                        border:
                          medicalHistoryErrors.description?.message &&
                          "2px solid #ce171f",
                      }}
                    >
                      <S.TextArea
                        maxLength={"2500"}
                        placeholder="Descrição da doença atual"
                        {...registerMedicalHistory("description")}
                      />
                    </S.ContainerInput>
                    <S.ContainerErrorMessage>
                      {medicalHistoryErrors.description?.message &&
                        medicalHistoryErrors.description.message}
                    </S.ContainerErrorMessage>
                  </S.ContainerInputMessage>

                  <S.ContainerButtons>
                    <S.Button
                      type="button"
                      className="negative"
                      onClick={() => {
                        setStep((prev) => prev - 1);
                      }}
                    >
                      Cancelar
                    </S.Button>
                    <S.Button type="submit">Salvar</S.Button>
                  </S.ContainerButtons>
                </form>
              )}
            </S.BoxInputs>
          </S.ContainerRegister>
        )}
      </S.GeneralContent>
      <ToastContainer />
    </S.GeneralContainer>
  );
}

export default CreateClientComponent;
