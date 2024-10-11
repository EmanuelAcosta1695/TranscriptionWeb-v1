import { TextareaProps } from './TextareaType'
import { useTranslation } from 'react-i18next'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

export const Textarea = ({
  editableText,
  handleTextChange,
  setText,
  setAudioFile,
}: TextareaProps) => {
  const { t } = useTranslation()

  const handleClearText = () => {
    setText('')
    setAudioFile(null)
  }

  const shareViaWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(
      editableText
    )}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <div className="mb-3" style={{ color: 'white' }}>
      <label htmlFor="exampleFormControlTextarea1" className="form-label">
        {t('transcribed-text')}
      </label>
      <textarea
        className="form-control"
        id="exampleFormControlTextarea1"
        rows={3}
        value={editableText}
        onChange={(e) => handleTextChange(e)}
        style={{ marginTop: '15px' }}
      />
      <div>
        <button className="btn btn-sm btn-danger m-1" onClick={handleClearText}>
          X
        </button>
        <button
          className="btn btn-sm btn-success m-1"
          onClick={shareViaWhatsApp}
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </button>
      </div>
    </div>
  )
}
