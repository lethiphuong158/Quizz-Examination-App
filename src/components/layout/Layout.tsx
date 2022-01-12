import React from 'react'
import Header from '../shared/Header'
import Sidebar from '../shared/Sidebar'
import { useAuth } from '../../context/Auth'

const Layout: React.FC = ({ children }) => {
  const { user } = useAuth()

  return (
    <>
      {!user && <Header />}
      {user ? (
        <main>
          <Sidebar />
          {children}
        </main>
      ) : (
        children
      )}
    </>
  )
}

export default Layout
