import { useState } from "react"
import asriel from "../imgs/asriel.png"
import hearth from "../imgs/pulsehearth.gif"
import "../styles/components/interaction.sass"
import InteractionCard from "./InteractionCard"


function Interaction() {

  const [vid, setVid] = useState<Number>(0)

  const onSetVid = (value: Number) => {
    setVid(value)
    console.log(value)
  }

  return (
    <section id='interaction'>
      <h1>Interaction</h1>

      <main className='interaction__main'>

        <section id='interaction__view'>
          <img src={asriel} alt="" />
          <div className="interaction__card__content">

            <div className="interaction__card__item">
              <InteractionCard onSetVid={vid}/>
            </div>

            <div className="interaction__card__status">
              <p>JORGE</p> <p>LV19</p> <p>HP <span>__________</span></p> <p>100/100</p>
            </div>
            <div className="interaction__card__btn">
              <button type="button" onClick={() => {
                onSetVid(1)
              }} ><span><img src={hearth} alt="" /></span>FIGTH</button>
              <button type="button" onClick={() => {
                onSetVid(2)
              }} ><span><img src={hearth} alt="" /></span>ACT</button>
              <button type="button" onClick={() => {
                onSetVid(3)
              }} ><span><img src={hearth} alt="" /></span>ITEMS</button>
              <button type="button" onClick={() => {
                onSetVid(4)
              }} ><span><img src={hearth} alt="" /></span>MERCY</button>
            </div>
          </div>

        </section>
      </main>

    </section>
  )


}
export default Interaction