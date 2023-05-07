import { createGlobalStyle } from "styled-components";
import { generateMedia } from "styled-media-query";

//imagens

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

const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'Poppins';
    src: url('https://fonts.googleapis.com/css?family=Poppins:400,700,900');
}
  :root {

    --input-border-color: ${(props) => props.colors[0]["input-border-color"]};

    
    --input-border-color-hover: ${(props) =>
      props.colors[0]["input-border-color-hover"]};
    --menu-sandwich-header: ${(props) =>
      props.colors[0]["menu-sandwich-header"]};
    --menu-sandwich-body: ${(props) => props.colors[0]["menu-sandwich-body"]};
    --title-modal-color: ${(props) => props.colors[0]["title-modal-color"]};
    --modal-color: ${(props) => props.colors[0]["modal-color"]};
    --header-color: ${(props) => props.colors[0]["header-color"]};
    --header-font-color:${(props) => props.colors[0]["header-font-color"]};
    --card-background:${(props) => props.colors[0]["card-background"]};
    --card-color-price:${(props) => props.colors[0]["card-color-price"]};
    --card-color-price-hover:${(props) =>
      props.colors[0]["card-color-price-hover"]};
    --card-color-details:${(props) => props.colors[0]["card-color-details"]};
    --card-color-details-hover:${(props) =>
      props.colors[0]["card-color-details-hover"]};
    --profile-card-color:${(props) => props.colors[0]["profile-card-color"]};
    --profile-card-color-hover:${(props) =>
      props.colors[0]["profile-card-color-hover"]};
    --default-color: ${(props) => props.colors[0]["default-color"]};
    --default-color-hover: ${(props) => props.colors[0]["default-color-hover"]};
    --default-contrast-color: ${(props) =>
      props.colors[0]["default-contrast-color"]};
    --default-high-contrast-color: ${(props) =>
      props.colors[0]["default-high-contrast-color"]};
    --default-color-icons: ${(props) => props.colors[0]["default-color-icons"]};
    --error-color: ${(props) => props.colors[0]["error-color"]};
    --title-color: ${(props) => props.colors[0]["title-color"]};
    --box-shadow:  ${(props) => props.colors[0]["box-shadow"]};
    --input-background: #f4f3f4;
    --bt-positive-color:  ${(props) => props.colors[0]["bt-positive-color"]};
    --bt-positive-color-hover:  ${(props) =>
      props.colors[0]["bt-positive-color-hover"]};

    --configurable-attributes-color:  ${(props) =>
      props.colors[0]["configurable-attributes-colorr"]};
    --configurable-attributes-color-hover:  ${(props) =>
      props.colors[0]["configurable-attributes-color-hover"]};

    --configurable-attributes-bgcolor:  ${(props) =>
      props.colors[0]["configurable-attributes-bgcolor"]};
    --configurable-attributes-bgcolor-hover:  ${(props) =>
      props.colors[0]["configurable-attributes-bgcolor-hover"]};



    --bt-positive-text-color: ${(props) =>
      props.colors[0]["bt-positive-text-color"]};
    --bt-positive-text-color-hover: ${(props) =>
      props.colors[0]["bt-positive-text-color-hover"]};

    --bt-negative-color:  ${(props) => props.colors[0]["bt-negative-color"]};
    --bt-negative-color-hover:${(props) =>
      props.colors[0]["bt-negative-color-hover"]};
    --bt-negative-text-color:  ${(props) =>
      props.colors[0]["bt-negative-text-color"]};
    --bt-negative-text-color-hover:${(props) =>
      props.colors[0]["bt-negative-text-color-hover"]};
    
    --negative-button-border: ${(props) =>
      props.colors[0]["negative-button-border"]};

    --footer-title-color: ${(props) => props.colors[0]["footer-title-color"]};
    --footer-text-color: ${(props) => props.colors[0]["footer-text-color"]};
    --footer-background-color:${(props) =>
      props.colors[0]["footer-background-color"]};
    --bt-purchase-color:${(props) => props.colors[0]["bt-purchase-color"]};
    --bt-purchase-color-hover:${(props) =>
      props.colors[0]["bt-purchase-color-hover"]};
    --bt-purchase-text-color:${(props) =>
      props.colors[0]["bt-purchase-text-color"]};
    --bt-purchase-text-color-hover:${(props) =>
      props.colors[0]["bt-purchase-text-color-hover"]};
    --explore-block-color: ${(props) => props.colors[0]["explore-block-color"]};
    --explore-block-color-hover: ${(props) =>
      props.colors[0]["explore-block-color-hover"]};
    --explore-block-text-color: ${(props) =>
      props.colors[0]["explore-block-text-color"]};
    --explore-block-text-color-hover: ${(props) =>
      props.colors[0]["explore-block-text-color-hover"]};
    --box-shadow: ${(props) => props.colors[0]["box-shadow"]};
    --card-background: ${(props) => props.colors[0]["card-background"]};
    --card-background-hover: ${(props) =>
      props.colors[0]["card-background-hover"]};
    --font-color: ${(props) => props.colors[0]["font-color"]};
    --font-color-hover:  ${(props) => props.colors[0]["font-color-hover"]};
    --font-color-opposite: ${(props) => props.colors[0]["font-color-opposite"]};
    //fonts
    --main-font: 'Poppins', sans-serif;
    --title-font: bold 'Poppins', sans-serif;
  }

  *{
        box-sizing: border-box;
        outline: none;
        font-family:  'Poppins' !important;
    }


    body {
        display:flex;
        flex-direction:column;
        line-height: 1;
        width:100%;
        overflow-x: hidden;
        margin:0px;
        height:100%;
        background-color:${(props) => props.colors[0]["default-color"]};
    }

    input,button,textarea,html,body{
       
        resize:none;
        color: #292929;
        font-size: 14px;
        line-height: 18px;
    }
    ol, ul {
        list-style: none;
    }
    a{
        color: #292929;
        &:hover{
            color: #333;
            text-decoration: none;
        }
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    .cursor-pointer{
        cursor: pointer;
    }

    h1{
        color: blue;
        font-size: 72px;
    }

   
    .contentFull{
        margin-top:30px;
        display: flex;
        min-height:100vh;
        height:100%;
        flex-direction: column;
     
    }



 
    
`;

export default GlobalStyles;
