import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import Link from 'next/link'
import { useTranslations } from '../context/Localization'
import Alert from '../components/alerts'
import { useAuth, UserSignup } from '../context/Auth'
import Layout from '../components/layout'

const defaultInput = {
  name: '',
  birthday: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

const Register: React.FC = () => {
  const { t } = useTranslations()
  const [input, setInput] = useState<UserSignup>(defaultInput)
  const { signUp, loading, error } = useAuth()

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    signUp(input)
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setInput({ ...input, [name]: value })
  }

  return (
    <Layout>
      <div className="container">
        <div className="col-lg-4 col-md-6 m-auto mt-5">
          <div className="card">
            <div className="card-body p-4">
              <h3 className="card-title text-center mb-3">{t('register')}</h3>
              <Alert type={error?.type} message={error?.message} />
              <form onSubmit={onSubmit}>
                <div className="mb-3">
                  <label htmlFor="inputName" className="form-label">
                    {t('name')}
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="inputName"
                    onChange={handleChange}
                    aria-describedby="nameHelp"
                  />
                  <div id="nameHelp" className="form-text">
                    {t('enter_your_real_name')}
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="inputBirthday" className="form-label">
                    {t('birthday')}
                  </label>
                  <input
                    name="birthday"
                    type="date"
                    className="form-control"
                    id="inputBirthday"
                    onChange={handleChange}
                  />
                </div>
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
                  />
                  <div id="passwordHelp" className="form-text">
                    {t('password_rule')}
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="inputConfirmPassword" className="form-label">
                    {t('password_confirmation')}
                  </label>
                  <input
                    type="password"
                    name="passwordConfirmation"
                    className="form-control"
                    id="inputConfirmPassword"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <button type="submit" className="btn d-block w-100 btn-primary" disabled={loading}>
                    {t(loading ? 'processing' : 'register')}
                  </button>
                </div>
                <div className="text-center">
                  <small className="form-text text-muted">
                    {t('already_has_account')}
                    <br />
                    <Link href="/login">{t('click_to_sign_in')}</Link>
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

export default Register
