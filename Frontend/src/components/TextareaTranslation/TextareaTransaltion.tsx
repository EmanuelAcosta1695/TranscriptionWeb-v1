import { useState } from 'react'
import { Dropdown } from '../Dropdown/Dropdown'
import { useTranslation } from 'react-i18next'
import { translateText } from '../../helpers/translateText/traslateText'
import { TextareaTranslationProps } from './TextareaTranslationType'

export const TextareaTranslation = ({
  editableText,
  language,
}: TextareaTranslationProps) => {
  const { t } = useTranslation()
  const [targetLanguage, setTargetLanguage] = useState<string>('')
  const [translatedText, setTranslatedText] = useState<string>('')

  const handleLanguageChange = (selectedLanguage: string) => {
    setTargetLanguage(selectedLanguage)
  }

  const handleTranslate = () => {
    translateText({
      text: editableText,
      targetLanguage,
      language,
    }).then((translatedText) => {
      if (translatedText) {
        setTranslatedText(translatedText)
      }
    })
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranslatedText(event.target.value)
  }

  return (
    <div className="mb-3 flex flex-col" style={{ color: 'white' }}>
      <label className="form-label">Traducir texto a:</label>
      <div
        style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Dropdown onLanguageChange={handleLanguageChange} />
      </div>
      {targetLanguage !== '' && (
        <button
          className="btn btn-success mt-2"
          type="button"
          onClick={handleTranslate}
        >
          Traducir
        </button>
      )}
      {translatedText !== '' && (
        <textarea
          className="form-control"
          rows={3}
          value={translatedText}
          onChange={(e) => handleTextChange(e)}
          style={{ marginTop: '20px' }}
        />
      )}
    </div>
  )
}
