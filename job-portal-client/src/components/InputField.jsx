import React from 'react'

function InputField({handlechange,value,title,name}) {
  return (
    <label htmlFor={value} className='sidebar-label-container'>
    <input type="radio" name={name} id={value} value={value} onChange={handlechange} />
    <span className='checkmark'></span>{title}
</label>
  )
}

export default InputField
