import React from 'react'
import { useTranslations } from '../../../context/Localization'
import UserItem from './UserItem'
import { User } from '../../../context/Auth'

export interface UserListProps {
  systemUsers: User[]
  userTitle?: string
}

const UserList: React.FC<UserListProps> = ({ systemUsers, userTitle }) => {
  const { t } = useTranslations()

  return (
    <div className="bg-light overflow-auto h-75 mt-5 px-3">
      <table className="table table-hover mt-2 p-3 table-layout-fixed table-sm">
        <thead>
          <tr>
            <th className="col-md-4 py-3" scope="col">
              {t('name')}
            </th>
            <th className="col-md-3 py-3" scope="col">
              {t('birthday')}
            </th>
            <th className="col-md-4 py-3" scope="col">
              {t('email')}
            </th>
            <th className="col-md-1 py-3" scope="col">
              {' '}
            </th>
          </tr>
        </thead>
        <tbody>
          {systemUsers.map((user: User | any) => (
            <UserItem
              key={user.id}
              name={user.name}
              birthday={user.birthday as string}
              email={user.email}
              id={user.id}
              userTitle={userTitle}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserList
