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
  padding: 0px 12%;
  align-self: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;

  align-items: center;

  ${customMedia.lessThan("1920px")`
    padding: 0px;
  `}

  ${customMedia.lessThan("notebook")`
    flex-direction:column;
    background-image: url("/images/Home-001-Transparent.png");
    background-repeat: no-repeat;
    background-size: cover;

  
  `}
`;

export const LeftContainer = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 50%;

  ${customMedia.lessThan("notebook")`
  width:100%;
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
  padding-left: 50px;

  ${customMedia.lessThan("1368px")`
    font-size: 3.4rem;
  `}

  ${customMedia.lessThan("notebook")`
    padding-left:0px;
    text-align:center;
    font-size:2.4rem;
  `}



  &.strong {
    font-weight: bold;
  }
`;

export const ImageCover = styled.img`
  width: 50%;
  ${customMedia.lessThan("1368px")`
    width:60%;
  `}

  ${customMedia.lessThan("notebook")`
  display:none;
  `}
`;

export const RightContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;

  form {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;
  }

  ${customMedia.lessThan("notebook")`
  width:100%;
  margin-top:20px;
  `}
`;

export const ButtonRedirect = styled.button`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  width: 70%;
  height: 60px;
  background-color: var(--bt-positive-color);
  border: 0px;
  text-transform: uppercase;
  border-radius: 5px;
  box-shadow: var(--box-shadow);
  transition: 0.3s;
  color: var(--bt-positive-text-color);
  ${customMedia.lessThan("notebook")`
  width:60%;
  `}

  ${customMedia.lessThan("mobile")`
  width:90%;
  `}

  &.login {
    margin-bottom: 20px;
  }

  svg {
    width: 20px;
    margin-right: 10px;
  }

  :hover {
    background-color: var(--bt-positive-color-hover);
    color: var(--bt-positive-text-color-hover);
  }
`;

export const ContainerInput = styled.div`
  padding-left: 10px;
  display: flex;
  font-size: 16px;
  width: 70%;
  height: 40px;
  background-color: var(--bt-positive-color);
  border-bottom: 2px solid transparent;
  text-transform: uppercase;
  box-shadow: var(--box-shadow);
  transition: 0.3s;
  color: var(--bt-positive-text-color);
  ${customMedia.lessThan("notebook")`
  width:60%;

  `}

  ${customMedia.lessThan("mobile")`
  width:90%;

  `}

:hover {
    border-bottom: 2px solid var(--bt-positive-color-hover);
  }

  svg {
    width: 20px;
    margin-right: 10px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      color: var(--bt-positive-color-hover);
    }
  }
`;

export const Input = styled.input`
  width: 90%;
  border: 0px;

  &.user {
    width: 100%;
  }
`;

export const ForgotPassword = styled.div`
  display: flex;
  color: var(--font-color);
  cursor: pointer;

  transition: 0.3s;

  :hover {
    color: var(--bt-positive-color-hover);
  }
`;
