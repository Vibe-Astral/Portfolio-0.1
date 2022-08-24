import asriel from "../imgs/asriel.png"
import hearth from "../imgs/pulsehearth.gif"
import "../styles/components/interaction.sass"
function Interaction() {


  return (
    <section id='interaction'>
      <h1>Interaction</h1>

      <main className='interaction__main'>

        <section id='interaction__view'>
          <img src={asriel} alt="" />
          <div className="interaction__card__content">
            <div className="interaction__card__item">
              <p>* (hey interaja)</p>
            </div>
            <div className="interaction__card__status">
              <p>JORGE</p> <p>LV19</p> <p>HP <span>__________</span></p> <p>100/100</p>
            </div>
            <div className="interaction__card__btn">
              <button><span><img src={hearth} alt="" /></span>FIGTH</button>
              <button><span><img src={hearth} alt="" /></span>ACT</button>
              <button><span><img src={hearth} alt="" /></span>ITEMS</button>
              <button><span><img src={hearth} alt="" /></span>MERCY</button>
            </div>
          </div>

        </section>
      </main>

    </section>
  )
}
export default Interaction