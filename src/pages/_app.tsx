import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import Providers from './Providers'
import '../styles/globals.scss'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  useEffect(() => {
    if (typeof document !== undefined) {
      import('bootstrap')
    }
  }, [])
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  )
}

export default App
