import React, { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react'
import { useTranslations } from '../../../context/Localization'
import { User } from '../../../context/Auth/auth.types'
import userService from '../api'
import ModalEvent from '../../../components/commons/ModalEvent'
import { useModal } from '../../../context/Modal'

export type Props = {
  id: number
}

const UpdateUserModal: React.FC<Props> = ({ id }) => {
  const { t } = useTranslations()
  const [inputUpdate, setInputUpdate] = useState<User>({} as User)
  const { onUpdateUser } = useModal()

  useEffect(() => {
    userService
      .getUsers(`users/${id}`)
      .then((user: User) => {
        setInputUpdate(user)
      })
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {})
  }, [id])
  const onHandleSubmit = (event: SyntheticEvent) => {
    event.preventDefault()
    onUpdateUser(inputUpdate)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInputUpdate((prevState: User) => ({ ...prevState, [name]: value }))
  }

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="mb-2">
        <label htmlFor="inputName" className="form-label px-2">
          {t('name')}
        </label>
        <input
          name="name"
          className="form-control rounded-pill px-3"
          id="inputName"
          onChange={handleChange}
          defaultValue={inputUpdate.name}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="inputBirthday" className="form-label px-2">
          {t('birthday')}
        </label>
        <input
          name="birthday"
          type="date"
          className="form-control rounded-pill px-3"
          id="inputBirthday"
          onChange={handleChange}
          defaultValue={inputUpdate.birthday as string}
        />
      </div>
      <div className="mb-2">
        <label htmlFor="inputEmail" className="form-label px-2">
          {t('email')}
        </label>
        <input
          name="email"
          type="email"
          className="form-control rounded-pill px-3"
          id="inputEmail"
          onChange={handleChange}
          defaultValue={inputUpdate.email}
        />
      </div>
      <ModalEvent okText={t('update')} />
    </form>
  )
}

export default UpdateUserModal
