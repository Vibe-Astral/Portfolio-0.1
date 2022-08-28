import "../../styles/components/act.sass"
import React from 'react'

function Act() {
  return (
    <div className="interaction__card__item">
      <div className="interaction__act__content__items">
        <div className="interaction__act__items">
          <button>* Check</button>
          <button>* Flert</button>
        </div>
        <div  className="interaction__act__items">
          <button>* Contacts</button>
          <button>* Projects </button>
        </div>
      </div>
    </div>
  )
}

export default Act