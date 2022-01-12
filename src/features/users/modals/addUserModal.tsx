import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { useTranslations } from '../../../context/Localization'
import { User } from '../../../context/Auth/auth.types'
import ModalEvent from '../../../components/commons/ModalEvent'
import { useModal } from '../../../context/Modal'

export type Props = {
  role: number
}

const AddUserModal: React.FC<Props> = ({ role }) => {
  const [input, setInput] = useState({ role } as User)
  const { t } = useTranslations()
  const { addUser } = useModal()

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    addUser(input)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setInput((prevState: User) => ({ ...prevState, [name]: value }))
  }

  return (
    <>
      <form className="form-group" onSubmit={onSubmit}>
        <div className="mb-2">
          <label htmlFor="inputName" className="form-label px-2">
            {t('name')}
          </label>
          <input name="name" className="form-control rounded-pill px-3" id="inputName" onChange={handleChange} />
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
          />
        </div>
        <ModalEvent okText={t('add')} />
      </form>
    </>
  )
}

export default AddUserModal
