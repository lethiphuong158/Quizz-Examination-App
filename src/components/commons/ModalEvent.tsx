import React from 'react'
import { useModal } from '../../context/Modal'
import Alert from '../alerts'
import { useTranslations } from '../../context/Localization'

const ModalEvent: React.FC<{ okText?: string }> = ({ okText }) => {
  const { hideModal, error, loading } = useModal()
  const { t } = useTranslations()
  return (
    <div className="d-flex justify-content-between mt-4 mb-1">
      <div className="">
        <Alert type={error?.type} message={error?.message} />
      </div>
      <div>
        <button type="button" className="btn btn-outline-secondary" onClick={hideModal}>
          {t('cancel')}
        </button>
        <button type="submit" className="btn btn-success ms-2" disabled={loading}>
          {loading ? t('processing') : okText}
        </button>
      </div>
    </div>
  )
}

export default ModalEvent
