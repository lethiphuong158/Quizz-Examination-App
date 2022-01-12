import React from 'react'
import { useTranslations } from '../../context/Localization'
import { useModal } from '../../context/Modal'

export type Props = {
  component: React.ReactNode
  title?: string
}

const TopPage: React.FC<Props> = ({ component, title }) => {
  const { t } = useTranslations()
  const { showModal } = useModal()
  return (
    <header className="d-flex justify-content-between">
      <h3 className="title">{title}</h3>
      <button
        type="button"
        onClick={() => showModal(component, t('add_new_user', { user: title }))}
        className="btn btn-primary">
        {t('add')}
      </button>
    </header>
  )
}

export default TopPage
