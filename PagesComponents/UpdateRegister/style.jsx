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

export const LeftContainer = styled.aside`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  align-items: flex-start;
  justify-content: flex-start;
  width: 65%;
  padding-right: 70px;

  ${customMedia.lessThan("notebook")`
  width:100%;
  padding-right:0px;
  justify-content:center;
  align-items:center;
  margin-top:20px;

  
 
  `}
`;

export const TitleName = styled.div`
  background-color: var(--default-contrast-color);
  color: var(--font-color);
  display: flex;
  align-items: center;
  border-radius: 0px 10px 10px 0px;
  font-weight: bold;
  height: 100px;
  font-size: 4.5rem;
  text-transform: uppercase;
  padding-right: 20px;
  padding-left: 50px;

  ${customMedia.lessThan("1368px")`
    font-size: 3.2rem;

  `}

  ${customMedia.lessThan("notebook")`
    padding-left:20px;
    height:70px;
    border-radius:10px;
    font-size:2rem;
  `}
`;

export const TitleSlogan = styled.div`
  font-size: 4.7rem;
  color: var(--font-color);
  text-transform: uppercase;
  font-weight: 200;
  margin-top: 20px;
  line-height: 1em;
  padding-right: 30px;
  padding-left: 50px;

  ${customMedia.lessThan("1368px")`
    font-size: 3.4rem;
  `}

  ${customMedia.lessThan("notebook")`
    padding-left:0px;
    padding-right:0px;
    text-align:center;
    font-size:2.4rem;
  `}



  &.strong {
    font-weight: bold;
  }
`;

export const ImageCover = styled.img`
  width: 30%;
  ${customMedia.lessThan("1368px")`
    width:50%;
  `}

  ${customMedia.lessThan("notebook")`
  display:none;
  `}
`;

export const AnimationContainer = styled.div`
  display: flex;
  width: 300px;
  height: 300px;

  ${customMedia.lessThan("notebook")`
    width:200px;
    height:200px;
  `}
`;

export const RightContainer = styled.div`
  display: flex;
  width: 35%;
  margin-top: 30px;
  align-items: flex-end;
  flex-direction: column;
  gap: 20px;
  margin-right: 50px;

  ${customMedia.lessThan("notebook")`
  width:100%;
  margin-top:20px;
  margin-bottom:20px;
  align-items:center;
  margin-right:0px;
  `}
`;

export const ContainerFunctions = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const TitleWelcome = styled.div`
  font-size: 3.5rem;
  color: var(--font-color);
  text-transform: uppercase;
  font-weight: 200;
  line-height: 3.5rem;

  ${customMedia.lessThan("1368px")`
    font-size: 3rem;
  `}

  ${customMedia.lessThan("notebook")`
    padding-left:0px;
    text-align:center;
    font-size:2.4rem;
  `}

${customMedia.lessThan("mobile")`
    
    font-size:1.4rem;
  `}



  &.strong {
    font-weight: bold;
  }
`;

export const ButtonRedirect = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  height: 70px;
  background-color: var(--bt-positive-color);
  border: 0px;
  text-transform: uppercase;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  transition: 0.3s;
  color: var(--bt-positive-text-color);

  &.active {
    background-color: var(--default-contrast-color);
  }

  ${customMedia.lessThan("notebook")`
  width:60%;
  `}

  ${customMedia.lessThan("mobile")`
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

  &.logout {
    margin-top: 30px;
  }
`;

export const ContainerInputMessage = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: 20px;
  margin-top: 20px;
  border-radius: 10px;
  font-size: 12px;
  width: 80%;

  margin-bottom: 10px;

  ${customMedia.lessThan("notebook")`
  margin-left:0px;
    width:60%;
  `}
  ${customMedia.lessThan("mobile")`
    width:90%;
  `}
`;

export const Label = styled.div`
  display: flex;

  color: var(--bt-positive-text-color);
  font-size: 20px;
  margin-bottom: 10px;
`;

export const ContainerInput = styled.div`
  position: relative;
  border-radius: 10px;
  display: flex;
  font-size: 16px;
  width: 100%;
  height: 50px;
  background-color: var(--card-background);

  text-transform: uppercase;
  box-shadow: var(--box-shadow);

  color: var(--font-color-opposite);

  input {
    padding: 0px 10px;
    width: 80%;
    border: 0px;
    border-radius: 10px 0 0 10px;
    transition: 0.3s;
    border-bottom: 2px solid transparent;
    :hover {
      border-bottom: 2px solid var(--bt-positive-color-hover);
    }

    ::placeholder {
      color: var(--font-color-opposite);
    }
  }
  span {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 0 10px 10px 0;
    background-color: var(--bt-positive-color);
    transition: 0.3s;
    :hover {
      background-color: var(--default-color-hover);
    }

    svg {
      width: 35px;
      color: var(--font-color);
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
    background-color: var(--card-background);
  }
`;

export const Input = styled.input`
  width: 95%;
  border: 0px;
`;
