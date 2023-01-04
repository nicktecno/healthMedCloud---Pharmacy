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

export const BoxGeral = styled.div`
  display: flex;
  padding: 10px 7px;
  justify-content: center;
  flex-basis: 16.66%;

  ${customMedia.lessThan("1860px")`
	flex-basis: 20%;
`}

  ${customMedia.lessThan("1420px")`
	flex-basis: 25%;
`}

${customMedia.lessThan("1134px")`
	flex-basis: 33%;
`}


  ${customMedia.lessThan("946px")`
flex-basis: 50%;

`}
`;

export const Texto = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  padding: 10px;

  .productLine {
    font-size: 14px;
    margin: 10px 0px 5px 10px;
    ${customMedia.lessThan("mobile")`
      font-size: 12px;
      margin-top: 5px;

    `}
  }

  .stamp2 {
    font-weight: bold;

    position: relative;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    margin-left: 10px;
    padding: 2px 10px;
    width: max-content;

    border-radius: 3px;
    &.noOffer {
      background: transparent;
      margin-bottom: 20px;
    }
    ${customMedia.lessThan("mobile")`
    padding: 0px 10px;
    font-size:13px;
     font-weight: 550;
     text-align:center;
     justify-self:center;
     justify-content:center;

    `}
    ${customMedia.lessThan("365px")`
     margin-left: 5px;
    `}
  }

  .stamp3 {
    font-weight: bold;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    margin-left: 10px;
    width: max-content;
    padding: 2px 10px;
    border-radius: 3px;
    ${customMedia.lessThan("mobile")`
       padding: 0px 10px;
        font-size:13px;
         font-weight: 550;
         text-align:center;
         justify-content:center;

    `}
    ${customMedia.lessThan("365px")`
     margin-left: 5px;
    padding: 0px 2px;
    `}
  }

  ${customMedia.lessThan("450px")`
 padding-left:0px;
`}
`;

export const ProdutoImg = styled.div`
  background-color: #fff;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 55%;
  position: relative;
  img {
    width: auto;
    max-width: 100%;
    height: auto;
    max-height: 100%;
  }

  .stamp1 {
    position: absolute;
    top: 0px;
    border-radius: 1px 1px 5px 5px;
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    width: max-content;
    padding: 2px 5px;
    font-weight: bold;
    left: 0px;
    ${customMedia.lessThan("mobile")`
       font-weight: 550;
    font-size: 13px;
    overflow: hidden;
    display: -webkit-box;
    line-height: 13px;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    `}
  }

  ${customMedia.lessThan("mobile")`
	height: 50%;
`}

  ${customMedia.lessThan("450px")`
	margin-bottom: 5px;
`}
`;

export const CaixaProduto = styled.a`
  width: 280px;
  height: 450px;
  display: block;
  background-color: var(--card-background);
  transition: 0.5s;
  box-shadow: rgb(231 231 231) 1px 2px 16px;
  color: var(--card-color-details) !important;

  :hover {
    p {
      color: var(--card-color-price-hover);
    }

    background-color: var(--card-background-hover);

    color: var(--card-color-details-hover) !important;
  }

  ${customMedia.lessThan("2169px")`
	width: 270px;
 
`}

  ${customMedia.lessThan("946px")`
width: 82%;

`}
${customMedia.lessThan("605px")`
height: 380px;
`}
${customMedia.lessThan("mobile")`
width: 93%;
`}
${customMedia.lessThan("450px")`
width: 99%;
    height: 332px;
`}

	@keyframes fade-out {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  h4 {
    display: flex;
    animation: fade-in 1s;
  }

  .sacola {
    width: 14px;
    height: 14px;
    float: right;
    margin-right: 10px;
  }

  h3 {
    font-size: 16px;
    margin-left: 10px;
    font-weight: bold;
    overflow: hidden;
    display: -webkit-box;
    line-height: 16px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    height: 32px;
    ${customMedia.lessThan("tablet")`
    font-size: 15px;
      height: 30px;
  `}
    ${customMedia.lessThan("mobile")`
      font-size: 13px;
        height: 32px;
    `}
		${customMedia.lessThan("ipobre")`
      height: 27px;
    line-height: 13px;
  `}
  }
  h4 {
    min-height: 24px;
    line-height: 12px;
    display: block;
    font-size: 12px;
    color: black;
    margin-left: 10px;
  }
  p {
    font-size: 10px;
    margin-bottom: 0;
    margin-left: 10px;
    margin-top: 10px;
    height: 25px;
    color: var(--card-color-price);

    .unavailable {
      color: var(--card-color-details);
      :hover {
        color: var(--card-color-details-hover);
      }
    }
    ${customMedia.lessThan("mobile")`
        margin-top: 5px;
     
      `}
    ${customMedia.lessThan("ipobre")`

      height: 20px;
    `}
		.bold {
      font-weight: 600 !important;
      font-size: 20px !important;

      ${customMedia.lessThan("mobile")`
			font-size: 14px !important;
		`}
      ${customMedia.lessThan("375px")`
		margin-left: 0px;

`}
    }
    span {
      font-size: 14px;
      ${customMedia.lessThan("mobile")`
        font-size: 13px !important;
      `}
      ${customMedia.lessThan("ipobre")`

			  margin-left: 0;
    `}
    }
  }
  .SKU {
    align-self: flex-end;
    margin: 17px 20px 0px 20px;
    ${customMedia.lessThan("450px")`
    margin: 13px 20px 0px 20px;
`}
  }
`;
