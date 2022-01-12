import React, { useEffect, useState } from 'react'
import Layout from '../components/layout/Layout'
import { useTranslations } from '../context/Localization'
import { useModal } from '../context/Modal'
import Modal from '../components/commons/Modal'
import { useAuth, User } from '../context/Auth'
import userService from '../features/users/api'
import UserList, { UserRole } from '../features/users'
import TopPage from '../components/commons/TopPage'
import AddUserModal from '../features/users/modals/addUserModal'
import {NextPage} from "next";

const TeacherPage: NextPage<{teachers: User[]}> = ({ teachers}) => {
  const { t } = useTranslations()
  const { user } = useAuth()
  const { title } = useModal()

  return (
    <Layout>
      {user?.role === UserRole.ADMIN ? (
        <div className="flex-grow-1 p-5">
          <TopPage component={<AddUserModal role={UserRole.TEACHER} />} title={t('teacher')} />
          <Modal title={title} />
          <UserList systemUsers={teachers} userTitle={t('teacher')} />
        </div>
      ) : (
        <div className="jumbotron jumbotron-fluid text-center h5 m-auto">{t('permission_denied')}</div>
      )}
    </Layout>
  )
}

export async function getServerSideProps() {
  const res: any = await userService.getUsers('getTeachers')
  return {
    props: {teachers: res}
  }
}

export default TeacherPage
