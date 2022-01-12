import React, { useEffect, useState } from 'react'
import { useAuth } from '../context/Auth'
import Layout from '../components/layout/Layout'
import { useTranslations } from '../context/Localization'

const HomePage = () => {
  const [mounted, setMounted] = useState(false)
  const { loading } = useAuth()
  const { t } = useTranslations()

  useEffect(() => {
    let hasMounted = true
    if (hasMounted) {
      setMounted(true)
    }
    return () => {
      hasMounted = false
    }
  }, [])
  if (!mounted && loading) return null

  return (
    <>
      <Layout>
        <div className="p-4">{t('welcome_text')}</div>
      </Layout>
    </>
  )
}
export default HomePage
