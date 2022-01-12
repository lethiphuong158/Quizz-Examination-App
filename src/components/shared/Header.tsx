import React from 'react'
import { useTranslations } from '../../context/Localization'
import NavLink from '../commons/navlink/NavLink'

const Header: React.FC = () => {
  const { t } = useTranslations()
  return (
    <header className="bg-primary navbar navbar-expand-lg sticky-top navbar-dark flex-md-nowrap shadow">
      <div className="container-fluid">
        <a href="/#" className="navbar-brand">
          {t('app_name')}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <nav className="navbar-nav ms-auto">
            <div className="nav-item">
              <NavLink className="nav-link rounded-3 mx-1 bg-primary-light" href="/login">
                {t('login')}
              </NavLink>
            </div>
            <div className="nav-item">
              <NavLink className="nav-link rounded-3 mx-1 bg-primary-light" href="/register">
                {t('register')}
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
