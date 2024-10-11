import React, { useState } from 'react'
import { DeleteSelectedFileButton } from '../DeleteSelectedFileButton/DeleteSelectedFileButton'
import { Dropdown } from '../Dropdown/Dropdown'
import { Textarea } from '../Textarea/Textarea'
import { fetchAudioToText } from '../../helpers/fetchAudioToText/fetchAudioToText'
import { downloadWord } from '../../helpers/downloadFiles/downloadWord'
import { downloadText } from '../../helpers/downloadFiles/downloadText'
import { downloadPdf } from '../../helpers/downloadFiles/downloadPdf'
import { showSelectFileProps } from './ShowSelectedFileType'
import { useTranslation } from 'react-i18next'
import { DownloadButton } from '../DownloadButton/DownloadButton'
import { TextareaTranslation } from '../TextareaTranslation/TextareaTransaltion'

export const ShowSelectedFile = ({
  clearFileAndNotification,
  audioFile,
  setAudioFile,
}: showSelectFileProps) => {
  const [language, setLanguage] = useState<string>('')
  const [text, setText] = useState<string>('')
  const [editableText, setEditableText] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const { t } = useTranslation()

  const arrayFunctions = {
    [t('download-word')]: downloadWord,
    [t('download-text')]: downloadText,
    [t('download-pdf')]: downloadPdf,
  }

  const functionsArray = Object.entries(arrayFunctions)

  const handleConvert = async () => {
    setIsLoading(true)

    try {
      const { data } = await fetchAudioToText({ audioFile, language })
      console.log('Texto convertido:', data)
      setText(data.texto_transcrito)
      setEditableText(data.texto_transcrito)
      setIsLoading(false)
    } catch (error) {
      console.error(t('audio-converted-error'), error)
    }
  }

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage)
  }

  const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditableText(event.target.value)
  }

  return (
    <div className="drop-zone">
      {isLoading ? (
        <div
          className="spinner-border text-light"
          style={{ width: '3rem', height: '3rem' }}
          role="status"
        >
          <span className="sr-only"></span>
        </div>
      ) : text === '' ? (
        <>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
            }}
          >
            <p style={{ marginBottom: '5px', textDecoration: 'underline' }}>
              {t('selected-audio-file')}
            </p>
            <p style={{ marginBottom: '10px' }}>{audioFile?.name}</p>
            <DeleteSelectedFileButton
              clearFileAndNotification={clearFileAndNotification}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              marginTop: '5%',
            }}
          >
            <p style={{ marginBottom: '10px' }}>{t('audio-file-language')}</p>
            <Dropdown onLanguageChange={handleLanguageChange} />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: 'white',
              marginTop: '6%',
            }}
          >
            <p style={{ marginBottom: '3%' }}>{t('convert-question')}</p>
            <button
              className="btn btn-success"
              onClick={handleConvert}
              disabled={!language}
            >
              {t('convert-autio-to-text')}
            </button>
          </div>
        </>
      ) : (
        <>
          <Textarea
            editableText={editableText}
            handleTextChange={handleTextChange}
            setText={setText}
            setAudioFile={setAudioFile}
          />
          <TextareaTranslation
            editableText={editableText}
            language={language}
          />

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '20px',
            }}
          >
            {/* {functionsArray.map(([key, func]) => (
              <DownloadButton
                key={key}
                nameFunction={key}
                downloadFunction={func}
                audioFile={audioFile}
                editableText={editableText}
              />
            ))} */}
            {/* <button className="btn btn-success m-1" onClick={shareViaWhatsApp}>
              {t('share-on-whatsapp')}
            </button> */}
          </div>
        </>
      )}
    </div>
  )
}
