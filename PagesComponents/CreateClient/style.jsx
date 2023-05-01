import styled from "styled-components";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const ContainerLoading = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 50px;
`;

export const GeneralContainer = styled.div`
  display: flex;
  background: var(--default-color);
  padding: 0px 12%;
  justify-content: center;

  ${customMedia.lessThan("1920px")`
    padding: 0px;
  `}
`;

export const GeneralContent = styled.div`
  display: flex;
  min-height: calc(100vh - 70px);
  height: auto;
  width: 100%;
  height: 100%;
  display: flex;
  margin-top: 70px;
  max-width: 1920px;
  ${customMedia.lessThan("notebook")`
    flex-direction:column;
  
  
  `}
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 50px;
  width: 100%;

  ${customMedia.lessThan("mobile")`
    padding:30px 10px;
    align-items:center;
   
  `}
`;

export const GeneralTitle = styled.div`
  display: flex;
  font-size: 2rem;
  color: var(--font-color);
  font-weight: bold;
`;

export const Tabs = styled.div`
  display: flex;
  margin-top: 30px;
  width: 100%;
  border-bottom: 2px solid var(--bt-positive-color);
`;

export const ButtonTab = styled.div`
  border: 0px;
  background: transparent;
  color: var(--font-color);

  font-size: 18px;
  padding: 10px 20px;

  ${customMedia.lessThan("mobile")`
    font-size:14px;
    padding:10px;
  `}

  &.active {
    background: var(--bt-positive-color);
  }
`;

export const BoxInputs = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;

  form {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    gap: 2%;

    ${customMedia.lessThan("625px")`
    flex-direction:column;
  `}
  }
`;

export const ContainerInputMessage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  font-size: 12px;
  width: 32%;

  margin-bottom: 10px;

  ${customMedia.lessThan("625px")`
    width:100%;
  `}

  &.fullField {
    width: 100%;
  }

  &.doubleField {
    width: 49%;

    ${customMedia.lessThan("625px")`
    width:100%;
  `}
  }

  &.doubleFieldMajor {
    width: 70%;

    ${customMedia.lessThan("625px")`
    width:100%;
  `}
  }
  &.doubleFieldMinor {
    width: 28%;

    ${customMedia.lessThan("625px")`
    width:100%;
  `}
  }
`;

export const ContainerInput = styled.div`
  position: relative;

  display: flex;
  font-size: 16px;
  width: 100%;
  height: 40px;
  background-color: #ffff;
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  box-shadow: var(--box-shadow);
  transition: 0.3s;
  color: var(--font-color-opposite);

  &.textArea {
    height: 155px;
  }

  input {
    padding: 0px 10px;
    width: 100%;
    border: 0px;

    ::placeholder {
      color: var(--font-color-opposite);
    }
  }

  select {
    -webkit-appearance: none;
    border: 0px;
    padding: 0 10px;
    -moz-appearance: none;
    appearance: none;
    width: 100%;
    cursor: pointer !important;
    background: url("/images/icon-arrow-down.png") 98% center no-repeat !important;
    cursor: pointer;
    background-color: #ffff;
  }

  :hover {
    border-bottom: 2px solid var(--bt-positive-color-hover);
  }
`;

export const Input = styled.input`
  width: 95%;
  border: 0px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  border: 0px;
  height: 148px;
  ::placeholder {
    color: var(--font-color-opposite);
  }

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #f4f4f5;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--font-color);
    border-radius: 5px;
    transition: 0.3s;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--bt-positive-color);
  }
`;

export const ContainerChecks = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  padding: 5px;
  border-radius: 10px;
`;

export const ContainerCheck = styled.div`
  display: flex;
  gap: 10px;
  color: var(--font-color);
  align-items: center;
`;

export const Checks = styled.div`
  border-radius: 60px;
  width: 30px;
  height: 30px;
  border: 2px solid var(--font-color);
  cursor: pointer;

  &.selected {
    background-color: var(--bt-positive-color);
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 10px;
  margin-top: 10px;

  ${customMedia.lessThan("625px")`
  justify-content:center;
  `}

  button {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    width: 25%;
    max-width: 200px;
    height: 50px;
    background-color: var(--bt-positive-color);
    border: 0px;
    text-transform: uppercase;
    border-radius: 5px;
    box-shadow: var(--box-shadow);
    transition: 0.3s;
    color: var(--bt-positive-text-color);

    &.negative {
      background-color: var(--bt-negative-color);
      color: var(--bt-negative-text-color);
    }

    ${customMedia.lessThan("625px")`
  width:90%;
  font-size:13px;

  `}

    svg {
      width: 20px;
      margin-right: 10px;
    }

    :hover {
      background-color: var(--bt-positive-color-hover);
      color: var(--bt-positive-text-color-hover);
    }
  }
`;

export const Button = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  width: 25%;
  max-width: 200px;
  height: 50px;
  background-color: var(--bt-positive-color);
  border: 0px;
  text-transform: uppercase;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  transition: 0.3s;
  color: var(--bt-positive-text-color);

  &.negative {
    background-color: var(--bt-negative-color);
    color: var(--bt-negative-text-color);
  }

  /* ${customMedia.lessThan("tablet")`
  width:60%;
  `} */

  ${customMedia.lessThan("625px")`
  width:90%;

  `}

  svg {
    width: 20px;
    margin-right: 10px;
  }

  :hover {
    background-color: var(--bt-positive-color-hover);
    color: var(--bt-positive-text-color-hover);
  }
`;

export const ContainerErrorMessage = styled.div`
  display: flex;
  font-size: 13px;
  color: var(--error-color);
  padding: 3px;
  font-weight: bold;
`;

export const Label = styled.div`
  display: flex;

  color: var(--bt-positive-text-color);
  font-size: 15px;
  margin-bottom: 2px;
`;

export const ContainerGeneralFunctions = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100px;
  max-height: 200px;
  overflow: auto;
  gap: 10px;

  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px #f4f4f5;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--font-color);
    border-radius: 5px;
    transition: 0.3s;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--bt-positive-color);
  }
`;

export const Card = styled.div`
  display: flex;
  width: 100%;
  padding: 15px;
  justify-content: space-between;
  background-color: var(--card-background);
  border-radius: 10px;

  .data {
    display: flex;
    width: 80%;
    color: var(--font-color);
    font-size: 20px;
    align-items: center;
    justify-content: space-between;
  }

  .functions {
    display: flex;
    width: 20%;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;

    svg {
      width: 40px;
      cursor: pointer;
      color: var(--font-color);
      transition: 0.3s;

      :hover {
        color: var(--default-color-hover);
      }
    }
  }
`;
