import styled from "styled-components";

import { generateMedia } from "styled-media-query";

const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
});

export const GeneralContainer = styled.div`
  background: var(--default-color);
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;
`;

export const LeftContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TitleName = styled.div`
  background: var(--default-contrast-color);
  color: var(--font-color);
  font-weight: bold;
  padding: 4px;
  font-size: 20px;
  text-transform: uppercase;
  width: max-content;
  padding-left: 50px;
`;

export const TitleSlogan = styled.div`
  font-size: 35px;
  color: var(--font-color);
  text-transform: uppercase;
  font-weight: 200;
  margin-top: 7px;
  line-height: 35px;
  padding-left: 50px;

  &.strong {
    font-weight: bold;
  }
`;

export const ImageCover = styled.img`
  width: 300px;
`;
