import React from 'react'
import { ApiResponse } from '../../lib/api'
import { User } from '../Auth/auth.types'

export interface ModalStateProvider {
  loading: boolean
  error?: ApiResponse | null
  modalComponent: React.ReactNode
  title?: string
}

export default interface ModalContextAPI extends ModalStateProvider {
  showModal: (modalComponent: React.ReactNode, modalTitle?: string) => void
  hideModal: () => void
  addUser: (input: User) => void
  onUpdateUser: (input: User) => void
  onDeleteUser: (id: number) => void
}
