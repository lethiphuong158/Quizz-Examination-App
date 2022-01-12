import React from 'react'
import {
  faBookReader,
  faChalkboardTeacher,
  faHome,
  faMarker,
  faUserGraduate,
  faUserTie,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTranslations } from '../../context/Localization'
import NavLink from '../commons/navlink/NavLink'
import { useAuth } from '../../context/Auth'

const Sidebar: React.FC = () => {
  const { t } = useTranslations()
  const { user, logout } = useAuth()

  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light sidebar">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <img alt={t('app_name')} className="ki me-2" src="/logo.png" width={32} height={32} />
        <span className="fs-4">{t('app_name')}</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item mb-2">
          <NavLink exact href="/" className="nav-link link-dark">
            <FontAwesomeIcon icon={faHome} className="mx-2" />
            {t('home')}
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink href="/teacher" className="nav-link link-dark">
            <FontAwesomeIcon icon={faUserTie} className="mx-2" />
            {t('teacher')}
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink href="/student" className="nav-link link-dark">
            <FontAwesomeIcon icon={faUserGraduate} className="mx-2" />
            {t('student')}
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink href="/class" className="nav-link link-dark">
            <FontAwesomeIcon icon={faChalkboardTeacher} className="mx-2" />
            {t('class')}
          </NavLink>
        </li>
        <li className="nav-item mb-2">
          <NavLink href="/subject" className="nav-link link-dark">
            <FontAwesomeIcon icon={faBookReader} className="mx-2" />
            {t('subject')}
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink href="/exam" className="nav-link link-dark">
            <FontAwesomeIcon icon={faMarker} className="mx-2" />
            {t('exam')}
          </NavLink>
        </li>
      </ul>
      {user && (
        <>
          <hr />
          <div className="dropdown">
            <a
              href="/#"
              className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
              id="dropdownUser2"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img
                src="https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                alt=""
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <strong>{user.name}</strong>
            </a>
            <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
              <li>
                <a className="dropdown-item" href="/#">
                  {t('profile')}
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/#">
                  {t('setting')}
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <div className="dropdown-item" role="presentation" onClick={() => logout()}>
                  {t('logout')}
                </div>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  )
}

export default Sidebar
