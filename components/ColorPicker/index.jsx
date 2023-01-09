import React, { useEffect, useState } from "react";
import * as S from "./style";

function ColorPicker({
  modalState,
  themeData,
  themeName,
  colorThemes,
  PostColorThemes,
  selectedMkt,
}) {
  const [selectedSchema, setSelectedSchema] = useState(selectedMkt);

  const handleDelete = () => {
    PostColorThemes(
      Object.fromEntries(
        Object.entries(colorThemes).filter((a) => {
          return a[0] !== themeName;
        })
      )
    );
  };

  function handleData(e) {
    e.preventDefault();

    const dataSchema = {
      ...colorThemes,
      [themeData.type === "edit" ? themeName : e.target[0].value]: [
        {
          "logo-img":
            themeData.type === "edit"
              ? selectedMkt[0]["logo-img"]
              : "https://cazco.digital/wp-content/uploads/2022/05/CaZco.digital-Branco.svg",
          "header-color": e.target[2].value,
          "header-font-color": e.target[3].value,
          "card-color-price": e.target[4].value,
          "card-color-price-hover": e.target[5].value,
          "card-color-details": e.target[6].value,
          "card-color-details-hover": e.target[7].value,
          "profile-card-color": e.target[8].value,
          "profile-card-color-hover": e.target[9].value,
          "card-background": e.target[10].value,
          "card-background-hover": e.target[11].value,
          "default-color": e.target[12].value,
          "default-color-hover": e.target[13].value,
          "default-color-icons": e.target[14].value,
          "title-color": e.target[15].value,
          "font-color": e.target[16].value,
          "font-color-hover": e.target[17].value,
          "configurable-attributes-color": e.target[18].value,
          "configurable-attributes-color-hover": e.target[19].value,
          "configurable-attributes-bgcolor": e.target[20].value,
          "configurable-attributes-bgcolor-hover": e.target[21].value,
          "bt-positive-color": e.target[22].value,
          "bt-positive-color-hover": e.target[23].value,
          "bt-positive-text-color": e.target[24].value,
          "bt-positive-text-color-hover": e.target[25].value,
          "bt-negative-color": e.target[26].value,
          "bt-negative-color-hover": e.target[27].value,
          "negative-button-border": e.target[28].value,
          "bt-negative-text-color": e.target[29].value,
          "bt-negative-text-color-hover": e.target[30].value,
          "footer-title-color": e.target[31].value,
          "footer-text-color": e.target[32].value,
          "footer-text-color-hover": e.target[33].value,
          "footer-background-color": e.target[34].value,
          "bt-purchase-color": e.target[35].value,
          "bt-purchase-color-hover": e.target[36].value,
          "bt-purchase-text-color": e.target[37].value,
          "bt-purchase-text-color-hover": e.target[38].value,
          "explore-block-color": e.target[39].value,
          "explore-block-color-hover": e.target[40].value,
          "explore-block-text-color": e.target[41].value,
          "explore-block-text-color-hover": e.target[42].value,
          "title-modal-color": e.target[43].value,
          "menu-sandwich-body": e.target[44].value,
          "menu-sandwich-header": e.target[45].value,
          "input-border-color": e.target[46].value,
          "input-border-color-hover": e.target[47].value,
        },
      ],
    };

    PostColorThemes(dataSchema);
  }

  useEffect(() => {
    setSelectedSchema(selectedMkt);
  }, [selectedMkt]);

  return (
    <>
      {themeData.type === "edit" ? (
        <S.ContainerModal>
          <S.title>
            <div className="title">Editar Layout atual</div>
            <S.closeButton
              onClick={() => modalState({ ...colorThemes, state: false })}
            >
              x
            </S.closeButton>
          </S.title>
          <S.modal className="principal">
            <S.content>
              <form onSubmit={(e) => handleData(e)}>
                <label htmlFor="colorpicker">Mkt Name</label>
                <input type="text" value={themeName} />
                <div>
                  <section>
                    <span>
                      <label htmlFor="colorpicker">Logo img </label>
                      <input type="text" value={"desativado"} />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">Header - Cor de Fundo</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["header-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "header-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">Header - Cor da Fonte</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["header-font-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "header-font-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">Cor do preço - Cards</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["card-color-price"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "card-color-price": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">
                        Cor do preço - Cards Hover
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["card-color-price-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "card-color-price-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">
                        Informações dos Cards - Cor
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["card-color-details"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "card-color-details": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">
                        Informações dos Cards - Hover
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["card-color-details-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "card-color-details-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">
                        {" "}
                        Box da Pg Perfil - Cor Fundo
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["profile-card-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "profile-card-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">
                        Box da Pg Perfil - Hover{" "}
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["profile-card-color-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "profile-card-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">Cards - Cor de fundo</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["card-background"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "card-background": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">Cards - Hover</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["card-background-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "card-background-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">Cor padrão</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["default-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "default-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Cor padrão Hover</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["default-color-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "default-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Cor dos ícones</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["default-color-icons"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "default-color-icons": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Títulos - Cor</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["title-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "title-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Fonte - Cor</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["font-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            { ...selectedSchema, "font-color": e.target.value },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Fonte - Cor Hover</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["font-color-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "font-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">
                        Atributos Configuráveis - Cor do texto
                      </label>
                      <input
                        type="color"
                        value={
                          selectedSchema[0]["configurable-attributes-color"]
                        }
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "configurable-attributes-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">
                        Atributos Configuráveis - Hover do texto
                      </label>
                      <input
                        type="color"
                        value={
                          selectedSchema[0][
                            "configurable-attributes-color-hover"
                          ]
                        }
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "configurable-attributes-color-hover":
                                e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Atributos Configuráveis - Cor de fundo
                      </label>
                      <input
                        type="color"
                        value={
                          selectedSchema[0]["configurable-attributes-bgcolor"]
                        }
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "configurable-attributes-bgcolor": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Atributos Configuráveis - Hover
                      </label>
                      <input
                        type="color"
                        value={
                          selectedSchema[0][
                            "configurable-attributes-bgolor-hover"
                          ]
                        }
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "configurable-attributes-bgcolor-hover":
                                e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                  </section>

                  <section>
                    <span>
                      <label htmlFor="colorpicker">
                        Botões Positivos - Cor
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["bt-positive-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-positive-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Botões Positivos - Cor Hover
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["bt-positive-color-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-positive-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Texto Botões Positivos - Cor
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["bt-positive-text-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-positive-text-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Texto Botões Positivos - Hover
                      </label>
                      <input
                        type="color"
                        value={
                          selectedSchema[0]["bt-positive-text-color-hover"]
                        }
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-positive-text-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Botões Negativos - Cor
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["bt-negative-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-negative-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Botões Negativos - Cor Hover
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["bt-negative-color-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-negative-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Botões Negativos - Borda
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["negative-button-border"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "negative-button-border": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Texto Botões Negativos - Cor
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["bt-negative-text-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-negative-text-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Texto Botões Negativos - Hover
                      </label>
                      <input
                        type="color"
                        value={
                          selectedSchema[0]["bt-negative-text-color-hover"]
                        }
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-negative-text-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Footer Títulos - Cor</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["footer-title-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "footer-title-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">Footer Textos - Cor</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["footer-text-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "footer-text-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Footer Textos - Hover</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["footer-text-color-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "footer-text-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Footer - Cor de fundo</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["footer-background-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "footer-background-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Botão Comprar - Cor</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["bt-purchase-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-purchase-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Botão Comprar - Hover</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["bt-purchase-color-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-purchase-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Botão Comprar - Texto Cor
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["bt-purchase-text-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-purchase-text-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Botão Comprar - Texto Hover
                      </label>
                      <input
                        type="color"
                        value={
                          selectedSchema[0]["bt-purchase-text-color-hover"]
                        }
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "bt-purchase-text-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Box Explorar - Cor</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["explore-block-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "explore-block-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Box Explorar - Hover</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["explore-block-color-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "explore-block-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Box Explorar - Texto Cor
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["explore-block-text-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "explore-block-text-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Box Explorar - Texto Hover
                      </label>
                      <input
                        type="color"
                        value={
                          selectedSchema[0]["explore-block-text-color-hover"]
                        }
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "explore-block-text-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Modais Títulos - Cor</label>
                      <input
                        type="color"
                        value={selectedSchema[0]["title-modal-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "title-modal-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Menu Sandwich - Cor Body
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["menu-sandwich-body"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "menu-sandwich-body": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Menu Sandwich - Header
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["menu-sandwich-header"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "menu-sandwich-header": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Borda inferior - Inputs
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["input-border-color"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "input-border-color": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Hover da Borda inferior - Inputs
                      </label>
                      <input
                        type="color"
                        value={selectedSchema[0]["input-border-color-hover"]}
                        onChange={(e) =>
                          setSelectedSchema([
                            {
                              ...selectedSchema,
                              "input-border-color-hover": e.target.value,
                            },
                          ])
                        }
                      />
                    </span>
                  </section>
                </div>
                <button type="submit" className="positiveButton">
                  Salvar Edição
                </button>
              </form>
            </S.content>
          </S.modal>
        </S.ContainerModal>
      ) : themeData.type === "add" ? (
        <S.ContainerModal>
          <S.title>
            <div className="title">Adicionar um tema de Layout</div>
            <S.closeButton
              onClick={() => modalState({ ...colorThemes, state: false })}
            >
              x
            </S.closeButton>
          </S.title>
          <S.modal className="principal">
            <S.content>
              <form onSubmit={(e) => handleData(e)}>
                <label htmlFor="colorpicker">Mkt Name</label>
                <input type="text" />
                <div>
                  <section>
                    <span>
                      <label htmlFor="colorpicker">Logo img </label>
                      <input type="text" value={"Desativado"} />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Header - Cor de fundo</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        {" "}
                        Header - Cor da fonte
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">cor de preço cardr</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        cor de preço card hover
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">cor de detalhes cards</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        cor de detalhes card hover
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        {" "}
                        background cards perfil pg
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        {" "}
                        background perfil hover{" "}
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Card BgColor</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Card BgColorHover</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Cor padrão</label>
                      <input type="color" />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">Cor padrão Hover</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Cor padrão Icones</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Títulos - Cor</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Font Color</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Font Color Hover</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Atributos Configuráveis - Cor do texto
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Atributos Configuráveis - Hover do texto
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Atributos Configuráveis - Cor de fundo
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Atributos Configuráveis - Hover
                      </label>
                      <input type="color" />
                    </span>
                  </section>

                  <section>
                    <span>
                      <label htmlFor="colorpicker">
                        Botões Positivos - Cor
                      </label>
                      <input type="color" />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">
                        Botões Positivos - Cor Hover
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Texto Botões Positivos - Cor
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Texto Botões Positivos - Hover
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Botões Negativos - Cor
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Botões Negativos - Cor Hover
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Botões Negativos - Borda
                      </label>
                      <input type="color" />
                    </span>

                    <span>
                      <label htmlFor="colorpicker">
                        Texto Botões Negativos - Cor
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Texto Botões Negativos - Hover
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Footer Títulos - Cor</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Footer Textos - Cor</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Footer Textos - Hover</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Footer - Cor de fundo</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Botão Comprar - Cor</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Botão Comprar - Hover</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Botão Comprar - Texto Cor
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Botão Comprar - Texto Hover
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Box Explorar - Cor</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Box Explorar - Hover</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Box Explorar - Texto Cor
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Box Explorar - Texto Hover
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">Modais Títulos - Cor</label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Menu Sandwich - Cor Body
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Menu Sandwich - Header
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Borda inferior - Inputs
                      </label>
                      <input type="color" />
                    </span>
                    <span>
                      <label htmlFor="colorpicker">
                        Hover da Borda inferior - Inputs
                      </label>
                      <input type="color" />
                    </span>
                  </section>
                </div>

                <button type="submit" className="positiveButton">
                  Criar Layout
                </button>
              </form>
            </S.content>
          </S.modal>
        </S.ContainerModal>
      ) : (
        <S.ContainerModal>
          <S.title>
            <div className="title">Deletar Layout Atual</div>
            <S.closeButton
              onClick={() => modalState({ ...colorThemes, state: false })}
            >
              x
            </S.closeButton>
          </S.title>
          <S.modal className="principal delete">
            <div>
              Deseja excluir o layout<strong>{themeName}</strong>?{" "}
            </div>
            <div>
              <button
                type="submit"
                onClick={() => modalState({ ...colorThemes, state: false })}
                className="positiveButton"
              >
                Cancelar
              </button>
              <button
                type="submit"
                onClick={() => {
                  handleDelete();
                  modalState({ ...colorThemes, state: false });
                }}
                className="positiveButton"
              >
                Excluir
              </button>
            </div>
          </S.modal>
        </S.ContainerModal>
      )}
    </>
  );
}
export default ColorPicker;
