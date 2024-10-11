import React from 'react'
import { useTranslation } from 'react-i18next'
import allowedExtensions from '../../utils/allowedExtensions.json'

export const ClarificationComponent = () => {
  const { t } = useTranslation()

  return (
    <>
      <div className="box">
        <ul>
          <li style={{ marginBottom: '10px' }}>{t('warning')}</li>
          <li style={{ marginBottom: '10px' }}>
            {t('suported-extensions')}
            <br />
            {allowedExtensions['allowed-extensions']}
          </li>
        </ul>
      </div>
    </>
  )
}
