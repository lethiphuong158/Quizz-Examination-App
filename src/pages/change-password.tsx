import React, { useState, ChangeEvent, useCallback, SyntheticEvent } from 'react'
import { useTranslations } from '../context/Localization'
import Alert from '../components/alerts'
import { useAuth } from '../context/Auth'
import { UpdatePassword } from '../context/Auth/auth.types'

const ChangePassword: React.FC = () => {
  const { t } = useTranslations()
  const { loading, error, updatePassword } = useAuth()
  const [input, setInput] = useState<UpdatePassword>({} as UpdatePassword)

  const onSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault()
      updatePassword(input)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [input],
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  return (
    <div className="container">
      <div className="col-lg-4 col-md-6 m-auto mt-5">
        <div className="card">
          <div className="card-body p-4">
            <h3 className="card-title text-center mb-3">{t('update_password')}</h3>
            <div className="mb-3 fst-italic fw-light">{t('first_login_hint')}</div>
            <Alert type={error?.type} message={error?.message} />
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label htmlFor="inputCurrentPassword" className="form-label">
                  {t('current_password')}
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="inputCurrentPassword"
                  aria-describedby="passwordHelp"
                  onChange={handleChange}
                  // defaultValue={input.password}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="inputNewPassword" className="form-label">
                  {t('new_password')}
                </label>
                <input
                  name="newPassword"
                  type="password"
                  className="form-control"
                  id="inputNewPassword"
                  aria-describedby="passwordHelp"
                  onChange={handleChange}
                  // defaultValue={input.password}
                />
                <div id="passwordHelp" className="form-text">
                  {t('password_rule')}
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="inputNewConfirmPassword" className="form-label">
                  {t('password_confirmation')}
                </label>
                <input
                  name="newPasswordConfirmation"
                  type="password"
                  className="form-control"
                  id="inputNewConfirmPassword"
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary d-block w-100" disabled={loading}>
                  {t(loading ? 'processing' : 'login')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
