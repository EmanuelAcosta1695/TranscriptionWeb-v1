import React from 'react'
import allowedExtensions from '../../utils/allowedExtensions.json'
import { SelectFileProps } from './selectFileType'
import { useTranslation } from 'react-i18next'
import { DefaultButton } from '../DefaultButton/DefaultButton'

export const SelectFile = ({
  handleDrop,
  handleDragOver,
  handleInputChange,
}: SelectFileProps) => {
  const { t } = useTranslation()

  const handleUploadClick = () =>
    document.getElementById('audio-upload')?.click()

  return (
    <label
      htmlFor="audio-upload"
      className="drop-zone"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      style={{ cursor: 'pointer', color: 'white' }}
    >
      {t('drag-and-drop-audio-file')}
      <br />
      <DefaultButton
        styles="btn btn-primary btn-sm mt-2 mb-0"
        onClick={handleUploadClick}
      >
        +
      </DefaultButton>
      <input
        type="file"
        accept={allowedExtensions['allowed-extensions']}
        onChange={handleInputChange}
        style={{ display: 'none' }}
        id="audio-upload"
      />
    </label>
  )
}
