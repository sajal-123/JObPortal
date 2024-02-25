import React from 'react'

function Button({onclickHandler,value,title}) {
  return (
    <button className={`px-4 py-1 border text-base hover:bg-slate-500 hover:text-white`} onClick={onclickHandler} value={value}>
        {title}
    </button>
  )
}

export default Button