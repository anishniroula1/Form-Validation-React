import React from 'react'
import './button.module.scss'

export default function Button({ type, name, disable }) {
  return (
    <div className='main'>
      <button
        className={disable ? 'disable-button' : 'button'}
        type={type || 'submit'}
      >
        {name || 'Submit'}
      </button>
    </div>
  )
}
