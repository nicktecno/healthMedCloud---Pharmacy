import styled from "styled-components";

import { generateMedia } from "styled-media-query";
const customMedia = generateMedia({
  desktop: "1200px",
  notebook: "991px",
  tablet: "768px",
  mobile: "576px",
  irico: "414px",
  ipobre: "375px",
  pobre: "330px",
});

export const ProductsContainer = styled.div`
  max-width: 100%;
  display: flex;
  justify-content: start;
  align-self: center;
  flex-wrap: wrap;

  #NoProductsDiv {
    font-size: 27px;
    color: var(--default-color-hover);
    min-height: 200px;
    margin-top: 30px;
  }

  ${customMedia.lessThan("1370px")`
//  justify-content: space-evenly;

    `}
`;

export const SearchButton = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  button {
    margin-top: 20px;
    width: 200px;
    height: 40px;
    font-weight: 600;
    border: none;
  }
`;
