import React from 'react'
import AddUserModal from '../modals/addUserModal'
import { useTranslations } from '../../../context/Localization'
import { useModal } from '../../../context/Modal'

const UserHeader: React.FC<{ title?: string; role: number }> = ({ title, role }) => {
  const { t } = useTranslations()
  const { showModal } = useModal()
  return (
    <header className="d-flex justify-content-between">
      <h3 className="title">{title}</h3>
      <button
        type="button"
        onClick={() => showModal(<AddUserModal role={role} />, t('add_new_user', { user: title }))}
        className="btn btn-primary">
        {t('add')}
      </button>
    </header>
  )
}

export default UserHeader
