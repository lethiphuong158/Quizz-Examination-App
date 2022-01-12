import React, { ChangeEvent, SyntheticEvent, useCallback, useState } from 'react'
import Link from 'next/link'
import Alert from '../components/alerts'
import { useTranslations } from '../context/Localization'
import { AuthCredential, useAuth } from '../context/Auth'
import Layout from '../components/layout/Layout'

const Login: React.FC = () => {
  const { t } = useTranslations()
  const { login, loading, error } = useAuth()
  const [input, setInput] = useState<AuthCredential>({
    email: '',
    password: '',
    rememberMe: false,
  })

  const onSubmit = useCallback(
    (e: SyntheticEvent) => {
      e.preventDefault()
      login(input)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [input],
  )

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    if (name === 'rememberMe') {
      setInput({ ...input, rememberMe: e.target.checked })
    } else {
      setInput({ ...input, [name]: value })
    }
  }

  return (
    <Layout>
      <div className="container">
        <div className="col-lg-4 col-md-6 m-auto mt-5">
          <div className="card">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-3">{t('login')}</h3>
              <Alert type={error?.type} message={error?.message} />
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputEmail" className="form-label">
                    {t('email')}
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="inputEmail"
                    aria-describedby="emailHelp"
                    onChange={handleChange}
                    defaultValue={input.email}
                  />
                  <div id="emailHelp" className="form-text">
                    {t('enter_your_email')}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputPassword" className="form-label">
                    {t('password')}
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="inputPassword"
                    aria-describedby="passwordHelp"
                    onChange={handleChange}
                    defaultValue={input.password}
                  />
                  <div id="passwordHelp" className="form-text">
                    {t('password_rule')}
                  </div>
                </div>
                <div className="form-check mb-3">
                  <label className="form-check-label" htmlFor="rememberMe">
                    {t('remember_me')}
                  </label>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="rememberMe"
                    name="rememberMe"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn d-block w-100 btn-primary" disabled={loading}>
                    {t(loading ? 'processing' : 'login')}
                  </button>
                </div>
                <div className="text-center">
                  <small className="form-text text-muted">
                    {t('no_account')}
                    <br />
                    <Link href="/register">{t('please_register')}</Link>
                  </small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Login
