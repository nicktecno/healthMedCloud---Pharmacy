import notification from "../../services/notification";
import * as S from "./styles";

import { useState } from "react";
import ReactInputMask from "react-input-mask";
import api from "../../services/api";

export function ModalFooterTalkToUs({ modalTalkActive, setModalTalkActive }) {
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  async function getEmailValid(email) {
    var pattern = new RegExp(
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    );

    if (!pattern.test(email)) {
      notification("Email inválido", "error");
      return false;
    } else {
      return true;
    }
  }

  async function sendForm() {
    setLoading(true);
    const phoneAdjust = phone
      .replaceAll("_", "")
      .replaceAll("-", "")
      .replaceAll("(", "")
      .replaceAll(")", "")
      .replaceAll(" ", "");
    const validation = getEmailValid(email);

    const dataRequest = {
      email: email,
      phone: phoneAdjust,
      name: name,
      comment: comment,
    };

    if (
      phone !== "" &&
      name !== "" &&
      email !== "" &&
      comment !== "" &&
      validation !== false &&
      phoneAdjust.length === 11
    ) {
      try {
        const { data: response } = await api.post(
          "/customer/contact-us",
          dataRequest
        );
        notification("Formulário enviado com sucesso", "success");
        setPhone("");
        setName("");
        setEmail("");
        setComment("");
        setModalTalkActive("inactive");
        document.body.style.overflow = "auto";
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    } else {
      notification(
        "Verifique se todos os campos estão preenchidos corretamente",
        "error"
      );
      setLoading(false);
    }
  }

  return (
    <S.Modal className={modalTalkActive}>
      <S.Transparente
        onClick={() => {
          document.body.style.overflow = "auto";

          setModalTalkActive("inactive");
        }}
      />

      <S.centerModal>
        <div className="modalTitle">
          <span className="title">Fale conosco</span>
          <S.closeButton
            onClick={() => {
              document.body.style.overflow = "auto";

              setModalTalkActive("inactive");
            }}
          >
            x
          </S.closeButton>
        </div>
        <S.ContainerInputs>
          <input
            type="text"
            value={name}
            placeholder="Digite seu nome"
            onChange={(e) => setName(e.target.value)}
          />
          <ReactInputMask
            mask="(99) 99999-9999"
            placeholder="Digite seu telefone"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            value={email}
            placeholder="Digite seu e-mail"
            onBlur={(e) => getEmailValid(e.target.value)}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            onChange={(e) => setComment(e.target.value)}
            placeholder="Digite sua mensagem"
            value={comment}
          />
        </S.ContainerInputs>
        <div className="modalFooter">
          {loading ? (
            <img
              className="loading"
              src="/images/loadingIcon.gif"
              alt="Carregando"
            />
          ) : (
            <button
              onClick={() => sendForm()}
              className="adicionar positiveButton"
            >
              ENVIAR
            </button>
          )}
        </div>
      </S.centerModal>
    </S.Modal>
  );
}
