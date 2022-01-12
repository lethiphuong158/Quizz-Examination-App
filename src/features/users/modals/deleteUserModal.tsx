import React, { SyntheticEvent } from 'react'
import { useTranslations } from '../../../context/Localization'
import ModalEvent from '../../../components/commons/ModalEvent'
import { useModal } from '../../../context/Modal'

export type Props = {
  id: number
}

const DeleteUserModal: React.FC<Props> = ({ id }) => {
  const { t } = useTranslations()
  const { onDeleteUser } = useModal()

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    onDeleteUser(id)
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="mb-3">{t('confirm_delete_user')}</div>
      <ModalEvent okText={t('delete')} />
    </form>
  )
}

export default DeleteUserModal
