import styled from "styled-components";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const ContainerModal = styled.div`
  display: none;
  position: fixed;
  @supports (backdrop-filter: opacity(1)) {
    &.no-support {
      display: none;
    }
  }
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 9999;
  backdrop-filter: blur(6px) contrast(0.8) !important;
  justify-content: center;
  align-items: center;

  @-moz-document url-prefix() {
    background-color: #0000006c;
  }

  &.active {
    display: flex;
  }
`;

export const ContentModal = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 320px;
  box-shadow: var(--box-shadow);
  background-color: var(--modal-color);
  .title {
    display: flex;
    height: 50px;
    width: 100%;
    background-color: var(--header-color);
    color: var(--title-modal-color);
    .titleName {
      width: 285px;
      display: flex;
      justify-content: center;
      text-align: center;
      align-items: center;
      flex-wrap: wrap;
      padding: 2px 5px;
      font-weight: bold;
    }
    .close {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      cursor: pointer;
      svg {
        width: 30px;
        color: var(--font-color);
        transition: 0.3s;
        :hover {
          color: var(--default-color-hover);
        }
      }
    }
  }
  .body {
    padding: 10px;
    .dataBody {
      display: flex;
      margin-top: 10px;
      justify-content: center;
      align-items: center;
      font-weight: bold;
      text-align: center;
      height: 150px;
    }
    .containerButtons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1;
      gap: 10px;

      button {
        border: 0px;
        padding: 5px;
        width: 100px;
        box-shadow: var(--box-shadow);
        cursor: pointer;
        transition: 0.3s;

        &.positive {
          background-color: var(--bt-positive-color);
          color: var(--bt-positive-text-color);
          :hover {
            background-color: var(--default-color-hover);
          }
        }
        &.negative {
          background-color: var(--bt-negative-color);
          color: var(--bt-positive-text-color);
          :hover {
            background-color: var(--default-color-hover);
          }
        }
      }
    }
  }
`;
