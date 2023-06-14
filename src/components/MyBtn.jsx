import React from 'react'

const MyBtn = (props) => {
  return (
    <div>
        <button className={props.className}>
            {props.title}
        </button>
    </div>
  )
}

export default MyBtn