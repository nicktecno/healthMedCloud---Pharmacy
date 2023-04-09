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
  justify-content: center;
  width: 100%;
  padding: 0px 12%;
  height: 70px;
  box-shadow: var(--box-shadow);

  ${customMedia.lessThan("1920px")`
    padding: 0px;
  `}
`;

export const GeneralContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1920px;
  justify-content: space-between;
`;

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 100%;
  margin-left: 50px;
  gap: 5px;

  ${customMedia.lessThan("mobile")`
    margin-left:10px;
  `}

  span {
    text-transform: uppercase;
    font-weight: bold;
    color: var(--font-color);
  }
  img {
    width: 50px;
    border-radius: 8px;
  }
`;

export const ContainerFunctions = styled.div`
  display: flex;
  margin-right: 50px;
  gap: 10px;

  ${customMedia.lessThan("mobile")`
    margin-right:10px;
  `}
`;

export const ContainerFunction = styled.nav`
  display: flex;
  gap: 5px;
  cursor: pointer;
  align-items: center;
  color: var(--font-color);

  svg {
    width: 35px;
    color: var(--font-color);
  }

  ${customMedia.lessThan("tablet")`
    span{
      display:none;
    }
  `}
`;
