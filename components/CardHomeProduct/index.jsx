import React from "react";

import CurrencyFormat from "../../services/currencyFormat";

// Css do componente
import * as S from "./style";

const CardHomeProduct = ({ hit }) => {
  const dataLayerTrigger = function () {
    window.dataLayer.push({
      event: "productClick",
      ecommerce: {
        click: {
          actionField: { list: hit.son_name },
          products: [
            {
              name: hit.son_name,
              id:
                hit.son_offers !== undefined &&
                hit.son_offers !== null &&
                hit.son_offers.length > 0
                  ? hit?.son_offers[0].id.toString()
                  : "Indisponível",
              price:
                hit.son_offers !== undefined &&
                hit.son_offers !== null &&
                hit.son_offers.length > 0
                  ? hit?.son_offers[0].price.toFixed(2).toString()
                  : "Indisponível",
              brand: hit.brand,
              variant: hit.son_sku,
              category:
                hit.categories.lvl0 !== undefined
                  ? hit.categories.lvl0
                  : "Sem categoria",
            },
          ],
        },
      },
    });
  };

  function invertColor(hex, bw) {
    if (hex.indexOf("#") === 0) {
      hex = hex.slice(1);
    }

    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error("Invalid HEX color.");
    }
    var r = parseInt(hex.slice(0, 2), 16),
      g = parseInt(hex.slice(2, 4), 16),
      b = parseInt(hex.slice(4, 6), 16);
    if (bw) {
      return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
    }
  }

  return (
    <S.BoxGeral>
      <S.CaixaProduto
        onClick={dataLayerTrigger}
        href={`/product/${hit.son_url_key}`}
      >
        <>
          <S.ProdutoImg>
            <img
              alt={hit.son_name}
              src={
                hit.son_images !== null && hit.son_images.length > 0
                  ? hit.son_images[0].medium_image_url
                  : hit.images !== null
                  ? hit.images[0].medium_image_url
                  : "/images/produto-marcacao.png"
              }
            />
            {hit.son_stamp1 !== 0 &&
              hit.son_stamp1 !== null &&
              hit.son_stamp1 !== undefined &&
              typeof hit.son_stamp1 !== "string" && (
                <div
                  className="stamp1"
                  style={{
                    color:
                      hit.son_stamp1.color === ""
                        ? invertColor("#690000", true)
                        : invertColor(hit.son_stamp1.color, true),
                    backgroundColor:
                      hit.son_stamp1.color === ""
                        ? "#690000"
                        : hit.son_stamp1.color,
                  }}
                >
                  {hit.son_stamp1.value}
                </div>
              )}
          </S.ProdutoImg>

          <S.Texto>
            <h3>{hit.son_name}</h3>

            {hit.son_stamp2 !== 0 &&
            hit.son_stamp2 !== null &&
            hit.son_stamp2 !== undefined &&
            typeof hit.son_stamp2 !== "string" ? (
              <div
                className="stamp2"
                style={{
                  color:
                    hit.son_stamp2.color === ""
                      ? invertColor("#690000", true)
                      : invertColor(hit.son_stamp2.color, true),
                  backgroundColor:
                    hit.son_stamp2.color === ""
                      ? "#ede9d7"
                      : hit.son_stamp2.color,
                }}
              >
                {hit.son_stamp2.value}
              </div>
            ) : (
              <div className="stamp2 noOffer" />
            )}

            {/*<p className="productLine">{hit.son_line_name}</p>*/}

            {hit.son_offers === null || hit.son_offers.length === 0 ? (
              <>
                {hit.son_pmina !== undefined && hit.son_pmina !== 0 ? (
                  <p>
                    a partir de <br />
                    <span className="bold">
                      {CurrencyFormat(hit.son_pmina)}
                    </span>
                  </p>
                ) : (
                  <p>
                    <span className="bold unavailable">
                      Produto indisponível
                    </span>
                  </p>
                )}
              </>
            ) : (
              <>
                {hit.son_offers[0] === undefined ||
                hit.son_offers[0].price === 0 ? (
                  <p>
                    <span className="bold unavailable">
                      Produto indisponível
                    </span>
                  </p>
                ) : (
                  <p>
                    a partir de <br />
                    <span className="bold">
                      {CurrencyFormat(hit.son_offers[0].price)}
                    </span>
                  </p>
                )}
              </>
            )}

            {hit.son_manufacturer_code ? (
              <p className="SKU"> {hit.son_manufacturer_code}</p>
            ) : (
              <p className="SKU"> </p>
            )}

            {hit.son_stamp3 !== 0 &&
              hit.son_stamp3 !== null &&
              hit.son_stamp3 !== undefined &&
              typeof hit.son_stamp3 !== "string" && (
                <div
                  className="stamp3"
                  style={{
                    color:
                      hit.son_stamp3.color === ""
                        ? invertColor("#690000", true)
                        : invertColor(hit.son_stamp3.color, true),
                    backgroundColor:
                      hit.son_stamp3.color === ""
                        ? "#ede9d7"
                        : hit.son_stamp3.color,
                  }}
                >
                  {hit.son_stamp3.value}
                </div>
              )}
          </S.Texto>
        </>
      </S.CaixaProduto>
    </S.BoxGeral>
  );
};

export default CardHomeProduct;
