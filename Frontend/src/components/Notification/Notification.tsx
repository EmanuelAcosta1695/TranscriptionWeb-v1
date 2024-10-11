import React, { useState, useEffect } from 'react'
import { NotificationProps } from './NotificationType'
import { left } from '@popperjs/core'
import { DefaultButton } from '../DefaultButton/DefaultButton'

export const Notification = ({ message }: NotificationProps) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (message) {
      setIsVisible(true)

      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [message])

  if (!isVisible) {
    return null
  }

  const handleCloseClick = () => setIsVisible(false)

  return (
    <div
      style={{
        position: 'fixed',
        top: '10%',
        left: '0.5%',
        backgroundColor: 'green',
        color: 'white',
        padding: '10px',
        borderRadius: '5px',
      }}
    >
      <span>{message}</span>
      <DefaultButton
        styles="btn btn-sm"
        onClick={handleCloseClick}
        style={{ marginBottom: '4px' }}
      >
        x
      </DefaultButton>
    </div>
  )
}
