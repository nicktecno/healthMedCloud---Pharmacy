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
  z-index: 991;
  display: none;

  &.active {
    display: flex;
  }
`;

export const closeButton = styled.span`
  font-size: 20px;
  display: flex;
  color: var(--title-color);
  font-weight: 700;
  position: absolute;
  top: 13px;
  right: 25px;
  cursor: pointer;
  transition: 0.3s;
`;

export const centerModal = styled.div`
  margin-top: 90px;
  display: flex;
  width: 320px;
  height: 100%;
  gap: 10px;
  background: var(--menu-sandwich-body);
  text-align: center;
  color: var(--title-color);
  flex-direction: column;
  position: relative;

  ${customMedia.lessThan("mobile")`
     width: 95%;
    `}

  .modalTitle {
    width: 100%;
    position: relative;
    color: var(--title-color);
    background: var(--menu-sandwich-header);
    font-size: 1.125rem;
    line-height: 22px;
    display: flex;
    align-items: center;
    justify-content: center;

    height: 30px;
    text-align: center;

    .title {
      font-weight: bold;
      font-size: 16px;
    }
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

export const ContainerBox = styled.div`
  display: flex;
  position: relative;
  height: calc(100% - (140px));
  ${customMedia.lessThan("netbook")`
    height: calc(100% - (220px));
    `};
`;
