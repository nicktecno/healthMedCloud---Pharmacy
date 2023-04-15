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
  border-bottom: 2px solid var(--default-contrast-color);
`;

export const ButtonTab = styled.div`
  border: 0px;
  background: transparent;
  color: var(--font-color);

  font-size: 18px;
  padding: 10px;

  &.active {
    background: var(--default-contrast-color);
  }
`;

export const BoxInputs = styled.div``;
