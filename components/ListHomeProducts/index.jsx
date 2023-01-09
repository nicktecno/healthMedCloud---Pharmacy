import { connectHits } from "react-instantsearch-dom";
import * as S from "./style";
import CardHomeProduct from "../CardHomeProduct";

// css slider itens
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Hits = ({ hits, ...rest }) => {
  const history = useRouter();
  const [dataLayerState, setDataLayerState] = useState(false);

  // useEffect(() => {
  //   if (window.dataLayer !== undefined) {
  //     if (hits.length > 0) {
  //       dataLayerTrigger();
  //     }
  //   } else {
  //     setDataLayerState(!dataLayerState);
  //   }
  // }, [dataLayerState]);

  async function dataLayerTrigger() {
    const DadosProdutos = hits.map((produto, i) => ({
      name: produto.son_name,
      id: String(produto.id),
      price:
        produto.son_offers !== undefined &&
        produto.son_offers !== null &&
        produto.son_offers.length > 0
          ? produto?.son_offers[0].price.toFixed(2).toString()
          : "Indisponível",
      brand: produto.brand,

      category:
        produto.categories.lvl0 !== undefined
          ? produto.categories.lvl0
          : "Sem categoria",
      position: i + 1,
    }));

    window.dataLayer.push({
      event: "impressions",
      userId:
        localStorage.getItem(
          `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_userId`
        ) !== undefined &&
        localStorage.getItem(
          `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_userId`
        ) !== null
          ? parseInt(
              localStorage.getItem(
                `${process.env.NEXT_PUBLIC_REACT_APP_NAME}_userId`
              )
            )
          : "Sem Login",
      pageCategory: "home",
      pageTitle: "home",
      ecommerce: {
        currencyCode: "BRL",
        impressions: DadosProdutos,
      },
    });
  }

  return (
    <>
      {hits !== undefined && hits !== null && hits !== [] && hits.length > 0 ? (
        <S.ProductsContainer>
          {" "}
          {hits.map((hit, index) => (
            <CardHomeProduct key={index} hit={hit} />
          ))}
          <S.SearchButton>
            {" "}
            <button
              className="positiveButton"
              onClick={() =>
                history.push(`/seemore/${rest.category}/${rest.attribute}`)
              }
            >
              VER MAIS
            </button>{" "}
          </S.SearchButton>
        </S.ProductsContainer>
      ) : (
        <S.ProductsContainer>
          <div id="NoProductsDiv">Nenhum produto encontrado</div>
        </S.ProductsContainer>
      )}
    </>
  );
};
const ListHomeProducts = connectHits(Hits);

export default ListHomeProducts;
