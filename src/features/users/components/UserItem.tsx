import React from 'react'
import { useTranslations } from '../../../context/Localization'
import { useModal } from '../../../context/Modal'
import DeleteUserModal from '../modals/deleteUserModal'
import UpdateUserModal from '../modals/updateUserModal'

export type UserItemProps = {
  id: number
  name: string
  birthday: string
  email: string
  userTitle?: string
}

const UserItem: React.FC<UserItemProps> = ({ id, name, birthday, email, userTitle }) => {
  const { t } = useTranslations()
  const { showModal } = useModal()

  return (
    <tr key={name}>
      <td className="py-2 align-middle">
        <span className="py-2">{name}</span>
      </td>
      <td className="py-2 align-middle">{birthday}</td>
      <td className="py-2 align-middle">{email}</td>
      <td className="py-2 align-middle">
        <div className="btn-group dropstart">
          <button
            type="button"
            className="btn btn-light dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false">
            {' '}
          </button>
          <ul className="dropdown-menu">
            <li className="dropdown-item">
              <div
                className="dropdown-item"
                role="presentation"
                onClick={() => showModal(<UpdateUserModal id={id} />, t('update_user', { user: userTitle }))}>
                {t('update')}
              </div>
            </li>
            <li className="dropdown-item">
              <div
                className="dropdown-item"
                role="presentation"
                onClick={() => {
                  showModal(<DeleteUserModal id={id} />, t('delete_user', { user: userTitle }))
                }}>
                {t('delete')}
              </div>
            </li>
          </ul>
        </div>
      </td>
    </tr>
  )
}

export default UserItem
