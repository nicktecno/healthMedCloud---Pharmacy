import styled from "styled-components";
import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  netbook: "830px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

export const Modal = styled.div`
  @supports (backdrop-filter: opacity(1)) {
    &.no-support {
      margin-top: 90px;
      width: 100%;
      height: 1000vh;
      z-index: 0;
      background: #0000004e;
    }
  }
  width: 100%;
  height: 100%;

  backdrop-filter: blur(6px) contrast(0.8) !important ;
  @-moz-document url-prefix() {
    background-color: #0000004e;
  }

  position: fixed;

  left: 0;
  top: 0;
  z-index: 99;
  display: none;

  &.active {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const closeButton = styled.span`
  font-size: 25px;
  display: flex;
  color: var(--title-color);
  font-weight: 700;
  position: absolute;
  top: 13px;
  right: 25px;
  cursor: pointer;
  transition: 0.3s;

  ${customMedia.lessThan("400px")`
        top: 12px;
        right:5px;
        padding:0 10px;
        
    `}

  :hover {
  }
`;

export const centerModal = styled.div`
  display: flex;
  width: 500px;
  height: 450px;
  background: white;
  text-align: center;
  color: var(--title-color);
  flex-direction: column;
  position: absolute;

  ${customMedia.lessThan("mobile")`
     width: 95%;
    `}

  .modalTitle {
    width: 100%;
    position: relative;
    color: var(--title-color);
    background: var(--default-color);
    font-size: 1.125rem;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 50px;
    text-align: center;

    .title {
      font-weight: bold;
      font-size: 16px;
    }
    ${customMedia.lessThan("tablet")`
        margin-bottom: 0px;
    `}
  }

  .modalFooter {
    justify-content: center;
    gap: 20px;
    display: flex;
    bottom: 0px;
    margin-top: 40px;

    .loading {
      width: 50px;
    }

    button {
      width: 100px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0px;
      &.adicionar {
        transition: 0.3s;
        width: 70%;
        font-weight: bold;
      }
    }
  }
`;

export const Transparente = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
`;

export const ContainerInputs = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 15px;

  input {
    height: 30px;
    width: 70%;
    padding-left: 10px;
    font-size: 14px;
    margin-bottom: 10px;
    border: none;
    background-color: #f4f3f4;
    border-bottom: 1px solid var(--input-border-color);
    -webkit-transition: 0.3s;
    transition: 0.3s;
    :hover {
      border-bottom: 1px solid var(--input-border-color-hover);
    }
  }

  textarea {
    width: 70%;
    padding-left: 10px;
    background-color: #efefef;
    border: 0px;
    height: 100px;
    border-bottom: 1px solid var(--input-border-color);
    resize: none;
    :hover {
      border-bottom: 1px solid var(--input-border-color-hover);
    }
  }
`;
