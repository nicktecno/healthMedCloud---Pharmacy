import { useEffect } from "react";
import BoxSandwichMenuContent from "../BoxSandwichMenuContent";

import * as S from "./styles";

export function ModalGeneralSandwichMenu({
  openMenu,
  setOpenMenu,
  menu,
  generalComponentsTranslation,
}) {
  useEffect(() => {
    if (openMenu === true) {
      document.body.style.overflow = "hidden";
    }
  }, [openMenu]);

  return (
    <>
      {openMenu && (
        <S.Modal className={"active"}>
          <S.Transparente
            onClick={() => {
              document.body.style.overflow = "auto";

              setOpenMenu(false);
            }}
          />

          <S.centerModal>
            <div className="modalTitle">
              <S.closeButton
                onClick={() => {
                  document.body.style.overflow = "auto";

                  setOpenMenu(false);
                }}
              >
                x
              </S.closeButton>
            </div>
            <S.ContainerBox>
              <BoxSandwichMenuContent
                generalComponentsTranslation={generalComponentsTranslation}
                menu={menu}
                setOpenMenu={setOpenMenu}
              />
            </S.ContainerBox>
          </S.centerModal>
        </S.Modal>
      )}
    </>
  );
}
