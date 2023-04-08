import styled from "styled-components";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const GeneralContainer = styled.header`
  background: var(--header-color);
  position: fixed;
  display: flex;
  top: 0px;

  width: 100%;
  padding: 0px 12%;
  height: 70px;
  box-shadow: var(--box-shadow);
  justify-content: space-between;
  ${customMedia.lessThan("1920px")`
    padding: 0px;
  `}
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  margin-left: 50px;
  img {
    width: 200px;
    border-radius: 8px;
  }
`;

export const ContainerFunctions = styled.div`
  display: flex;
  margin-right: 50px;
`;

export const ContainerFunction = styled.nav`
  display: flex;
  gap: 5px;
  align-items: center;
  color: var(--font-color);

  svg {
    color: var(--font-color);
  }
`;
