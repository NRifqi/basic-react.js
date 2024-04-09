import React from 'react'

const ComButton = (props) => {
  return (
    <>
      <button onClick={props.handleClick}>{props.title}</button>
    </>
  )
}

export default ComButton
