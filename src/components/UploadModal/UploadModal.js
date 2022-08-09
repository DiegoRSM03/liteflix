import cs from "classnames"
import { useContext } from "react"

import { UploadScreensContext } from "context"

import * as S from "./UploadModal.styles"

export const UploadModal = () => {
  const { isOpen, data } = useContext(UploadScreensContext)

  return (
    <S.Overlay className={cs({ open: isOpen })}>
      <S.UploadModal>{data.component}</S.UploadModal>
    </S.Overlay>
  )
}
