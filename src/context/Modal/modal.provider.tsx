import React, { createContext, useContext, useMemo, useState } from 'react'
import ModalContextAPI from './modal.types'
import { ApiResponse } from '../../lib/api'
import userService from '../../features/users/api'
import { User } from '../Auth/auth.types'

const ModalContext = createContext({} as ModalContextAPI)

const ModalProvider: React.FC = ({ children }) => {
  const [error, setError] = useState<ApiResponse | null>(null)
  const [modalComponent, setModalComponent] = useState<React.ReactNode>()
  const [loading, setLoading] = useState<boolean>(false)
  const [title, setTitle] = useState<string>('')

  const showModal = (modal: React.ReactNode, modalTitle?: string) => {
    setTitle(() => {
      if (modalTitle) {
        return modalTitle
      }
      return ''
    })
    setModalComponent(modal)
  }

  const hideModal = () => {
    setModalComponent(undefined)
    setError(null)
    setTitle('')
  }

  const addUser = async (input: User) => {
    setLoading(true)
    await userService
      .addUser(input)
      .then(hideModal)
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const onUpdateUser = async (inputUserUpdate: User) => {
    setLoading(true)
    await userService
      .updateUser(inputUserUpdate)
      .then(hideModal)
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }

  const onDeleteUser = async (id: number) => {
    setLoading(true)
    await userService
      .deleteUser(id)
      .then(hideModal)
      .catch(setError)
      .finally(() => setLoading(false))
  }

  const memoValue = useMemo(
    () => ({ loading, error, title, modalComponent, showModal, hideModal, addUser, onUpdateUser, onDeleteUser }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [loading, error, title, modalComponent],
  )

  return <ModalContext.Provider value={memoValue}>{children}</ModalContext.Provider>
}

export const useModal = (): ModalContextAPI => useContext(ModalContext)

export default ModalProvider
