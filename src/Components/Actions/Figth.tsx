import "../../styles/components/figth.sass"
import lanca from "../../imgs/lança-removebg.png"
import pisca from '../../imgs/pisc.gif'
function Figth() {
  return (
    <div className="interaction__card__item " id="fight__card">
      <img src={lanca} alt="" id="lanca" />
      <img src={lanca} alt="" id="lanca2" />
      <img src={pisca} alt="" id="pisca"/>
     <div className="fight__div"><p>* (
i think you shouldn't do that)</p></div>
      <img src={lanca} alt="" id="lanca__direita__2" />
      <img src={lanca} alt="" id="lança__direita" />
    </div>
  )
}

export default Figth