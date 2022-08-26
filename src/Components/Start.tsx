import "../styles/components/start.sass"
import hearth from "../imgs/pulsehearth.gif"

function Start() {
  return (
    <section id="start">
      <div className="start__view">
        <span>
          <p>* ( this Portfolio brings you a nostalgic feeling... )</p>
        </span>
        <span>
          <p id="p2">* ( it fills you with determination )</p>
        </span>
      </div>
      <div id="start__continue">
        <a href="#about"><img src={hearth}alt="" />Continue<img src={hearth} alt="" /></a>
      </div>
    </section>
  )
}

export default Start