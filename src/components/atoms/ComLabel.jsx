import React from 'react'

const ComLabel = ({label, ...rest}) => {
  return (
    <>
      <label {...rest}>{label}</label>
      <input {...rest}/>
    </>
  )
}

export default ComLabel
