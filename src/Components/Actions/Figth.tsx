import "../../styles/components/figth.sass"
import lanca from "../../imgs/lança-removebg.png"

function Figth() {
  return (
    <div className="interaction__card__item " id="fight__card">
      <img src={lanca} alt="" id="lanca" />
      <img src={lanca} alt="" id="lanca2" />
     <div className="fight__div"><p>* (Acho que Você Realmente não quer isso)</p></div>
      <img src={lanca} alt="" id="lanca__direita__2" />
      <img src={lanca} alt="" id="lança__direita" />
    </div>
  )
}

export default Figth