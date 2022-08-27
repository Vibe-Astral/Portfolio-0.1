import "../../styles/components/figth.sass"
import lanca from "../../imgs/lança.jpg"

function Figth() {
  return (
    <div className="interaction__card__item">
      <img src={lanca}alt="" id="lanca" />
    <p>* (Acho que Você Realmente não quer isso)</p>
    </div>
  )
}

export default Figth