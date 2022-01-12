import React from 'react'
import ThemeProvider from '../context/Theme'
import LanguageProvider from '../context/Localization'
import AuthProvider from '../context/Auth'
import ModalProvider from '../context/Modal'

const Providers: React.FC = ({ children }) => (
  <LanguageProvider>
    <ThemeProvider>
      <AuthProvider>
        <ModalProvider>{children}</ModalProvider>
      </AuthProvider>
    </ThemeProvider>
  </LanguageProvider>
)

export default Providers
