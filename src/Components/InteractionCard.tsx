import React from 'react'

function InteractionCard(props:any) {
  console.log(props.text)
  return (
    <div>
      {props.text}
    </div>
  )
}

export default InteractionCard