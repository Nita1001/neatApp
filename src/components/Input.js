import React from 'react'

const Input = ({ name, className = '', checked, id = '', handleNewInput, type, value, placeholder }) => {
  return (
    <div className='input-container'>
      <input name={name} className={className} {...checked ? checked : false} id={id} type={type} value={value} onChange={handleNewInput} placeholder={placeholder} />
    </div>
  )
}

export default Input