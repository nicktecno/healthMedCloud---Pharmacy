import styled from "styled-components";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

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
  border-bottom: 2px solid var(--default-contrast-color);
`;

export const ButtonTab = styled.div`
  border: 0px;
  background: transparent;
  color: var(--font-color);

  font-size: 18px;
  padding: 10px 20px;

  &.active {
    background: var(--default-contrast-color);
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
  }
`;

export const ContainerInput = styled.div`
  position: relative;
  padding-left: 10px;
  display: flex;
  font-size: 16px;
  width: 32%;
  height: 40px;
  margin-bottom: 10px;
  background-color: var(--card-background);
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  box-shadow: var(--box-shadow);
  transition: 0.3s;
  color: var(--font-color-opposite);

  :hover {
    border-bottom: 2px solid var(--bt-positive-color-hover);
  }
`;

export const Input = styled.input`
  width: 90%;
  border: 0px;
`;

export const ContainerChecks = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
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
`;
