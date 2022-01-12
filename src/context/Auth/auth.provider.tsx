import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import { AuthContextAPI, AuthCredential, UpdatePassword, User, UserSignup } from './auth.types'
import { ApiResponse } from '../../lib/api'
import authService from './auth.service'

const AuthContext = createContext<AuthContextAPI>({} as AuthContextAPI)

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<User>()
  const [error, setError] = useState<ApiResponse | null>()
  const [loading, setLoading] = useState<boolean>(false)
  const [loadingInitial, setLoadingInitial] = useState<boolean>(true)
  const router = useRouter()

  useEffect(() => {
    // Chuyển sang router khác thì xóa error ở router cũ đi
    if (error) setError(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((newUser) => setUser(newUser))
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      .catch(() => {})
      .finally(() => setLoadingInitial(false))
  }, [router.pathname])

  useEffect(() => {
    if (user && user.requireChangePassword) {
      router.replace('/change-password')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.pathname])

  function login(credential: AuthCredential) {
    setLoading(true)

    authService
      .login(credential)
      .then((newUser) => {
        setUser(newUser)
        router.replace('/')
      })
      .catch((newError) => setError(newError))
      .finally(() => setLoading(false))
  }

  async function signUp(userSignup: UserSignup) {
    setLoading(true)
    await authService
      .signUp(userSignup)
      .then(() => {
        router.replace('/login')
      })
      .catch((newError) => {
        setError(newError)
      })
      .finally(() => setLoading(false))
  }

  function logout() {
    setLoading(true)
    authService
      .logout()
      .then(() => {
        setUser(undefined)
        router.replace('/')
      })
      .catch((newError) => {
        setError(newError)
      })
      .finally(() => setLoading(false))
  }

  function updatePassword(password: UpdatePassword) {
    setLoading(true)
    authService
      .updatePassword(password)
      .then(() => {
        router.push('/')
      })
      .catch((newError) => setError(newError))
      .finally(() => setLoading(false))
  }

  const memoValue = useMemo(
    () => ({
      user,
      loading,
      error,
      login,
      signUp,
      logout,
      updatePassword,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [user, loading, error],
  )

  if (['/login', '/register'].indexOf(router.pathname) > -1 && user) {
    router.push('/')
    return null
  }

  return <AuthContext.Provider value={memoValue}>{!loadingInitial && children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextAPI => useContext(AuthContext)

function getDisplayName<T>(WrappedComponent: React.ComponentType<T>) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

interface WithAuthProps {
  isAuthenticated: boolean
}

export const withAuth = <P extends WithAuthProps = WithAuthProps>(
  WrappedComponent: React.ComponentType<P>,
): React.FC<P> => {
  const WithAuth: React.FC<P> = (props) => (
    <AuthProvider>
      <WrappedComponent {...(props as P)} />
    </AuthProvider>
  )
  WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`
  return WithAuth
}

export default AuthProvider
