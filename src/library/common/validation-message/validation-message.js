import React from 'react'
import './validation-message.scss'
export function ValidationMessage({ message }) {
  return (
    <p className='validation-message__container'>
      <span className='validation-message__svg'>
        <span className='validation-message__error'>{message}</span>
      </span>
    </p>
  )
}
