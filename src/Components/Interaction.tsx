import { useState } from "react"
import asriel from "../imgs/asriel.png"
import hearth from "../imgs/pulsehearth.gif"
import "../styles/components/interaction.sass"
import InteractionCard from "./InteractionCard"

const card = document.getElementById("interaction__card__item")
function render(vid: Number){
  if(card){
    if(vid == 0){
      return(
        <p>olá</p>
      )
    }
    if(vid == 1){
      return (<InteractionCard text="default"/>)
    }
  }else{
    console.log("carregando card")
  }
  
}


function Interaction() {

  const [vid, setVid] = useState<Number>(0)
 
 
  return (
    <section id='interaction'>
      <h1>Interaction</h1>

      <main className='interaction__main'>

        <section id='interaction__view'>
          <img src={asriel} alt="" />
          <div className="interaction__card__content">

            <div onLoad={()=>{
              console.log("onload")
            }} className="interaction__card__item">
            
            </div>

            <div className="interaction__card__status">
              <p>JORGE</p> <p>LV19</p> <p>HP <span>__________</span></p> <p>100/100</p>
            </div>
            <div className="interaction__card__btn">
              <button onClick={() => {
                setVid(1)
                render(vid)
              }}><span><img src={hearth} alt="" /></span>FIGTH</button>
              <button onClick={() => {
                setVid(2)
                render(vid)
              }}><span><img src={hearth} alt="" /></span>ACT</button>
              <button onClick={() => {
                setVid(3)
                render(vid)
              }}><span><img src={hearth} alt="" /></span>ITEMS</button>
              <button onClick={() => {
                setVid(4)
                render(vid)
              }}><span><img src={hearth} alt="" /></span>MERCY</button>
            </div>
          </div>

        </section>
      </main>

    </section>
  )


}
export default Interaction