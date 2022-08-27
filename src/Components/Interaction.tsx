import { useState } from "react"
import asriel from "../imgs/asriel.png"
import hearth from "../imgs/pulsehearth.gif"
import "../styles/components/interaction.sass"
import Act from "./Actions/Act"
import Figth from "./Actions/Figth"
import Item from "./Actions/Item"
import Mercy from "./Actions/Mercy"

function Interaction() {

  const [id, setId] = useState<Number>(0)

  function RenderCard() {
    const RenderItem = () => {
      if (id == 1) {
        return <Figth />
      } else if (id == 2) {
        return <Act />
      } else if (id == 3) {
        return <Item />
      } else if (id == 4) {
        return <Mercy />
      } else {
        return <div> Problems</div>
      }
    }
    return (
     <RenderItem/>
    )
  }

  return (
    <section id='interaction'>
      <h1>Interaction</h1>

      <main className='interaction__main'>

        <section id='interaction__view'>
          <img src={asriel} alt="" />
          <div className="interaction__card__content">

            
              <RenderCard />
           

            <div className="interaction__card__status">
              <p>JORGE</p> <p>LV19</p> <p>HP <span>__________</span></p> <p>100/100</p>
            </div>
            <div className="interaction__card__btn">
              <button type="button" onClick={
                () => {
                  setId(1)
                }
              }><span><img src={hearth} alt="" /></span>FIGTH</button>
              <button type="button" onClick={
                () => {
                  setId(2)
                }
              }><span><img src={hearth} alt="" /></span>ACT</button>
              <button type="button" onClick={
                () => {
                  setId(3)
                }
              }><span><img src={hearth} alt="" /></span>ITEMS</button>
              <button type="button" onClick={
                () => {
                  setId(4)
                }
              }><span><img src={hearth} alt="" /></span>MERCY</button>
            </div>
          </div>

        </section>
      </main>

    </section>
  )


}
export default Interaction