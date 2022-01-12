import supportedLanguages from '../../config/localization/languages'
import { useTranslations } from '../../context/Localization'

const LanguageSelector = () => {
  const { currentLanguage, changeLanguage } = useTranslations()
  return (
    <div style={{ marginTop: '2rem' }}>
      {supportedLanguages.map((language) => (
        <button
          type="button"
          className={currentLanguage === language ? 'active' : ''}
          key={language.locale}
          onClick={() => changeLanguage(language)}>
          {language.language}
        </button>
      ))}
    </div>
  )
}

export default LanguageSelector
