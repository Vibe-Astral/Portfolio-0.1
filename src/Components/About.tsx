
import "../styles/components/about.sass"
import hearth from "../imgs/pulsehearth.gif"
import andar from "../imgs/toriel_frisk_andando.gif"
import asriel from "../imgs/asriel.png"
function About() {

  const message= document.getElementById("about__message")
  const aboutMessage = document.getElementById("about__about")
  const saveHour = document.getElementById("hSave")
  const d = new Date()
  let hour = d.getHours()
  let minutes = d.getMinutes()

  if(message && aboutMessage){
    message.style.display = "none"
  }
  const save = () => {
    if (message && aboutMessage && saveHour) {
      message.style.display = "flex"
      aboutMessage.style.display = "none"
      saveHour.textContent = `${hour}:${minutes}`
    }
  }
  const retur = () => {
    if(message && aboutMessage){
      message.style.display = "none"
      aboutMessage.style.display = "flex"
    }
  }
  return (
    <section className='about' id='about'>
      <h1>about</h1>
      <div className="andar_toriel"><img src={andar} alt="" /></div>
      <article className='about__card'>
        <div className='about__card__item'>
          <p>JORGE</p>
          <p>LV19</p>
          <span id="hSave">Time</span>
        </div>
        <p className='about__card__item__p'>Local-Home</p>

        <div className='about__card__item'>
          <button onClick={save}>
            <span><img src={hearth} alt="" />Save</span>
          </button>
          <button onClick={retur}>
            <span><img src={hearth} alt="" />Return</span>
          </button>
        </div>
      </article>
      <img className="img" src={asriel} alt="" />
      <div id="about__about">
        <p>* (interactive buttons)</p>
        <p>* (it fills you with determination) </p>
      </div>
      <div id='about__message'>
        <p>* hello my name is jorge, i'm 19 years old </p>
        <p>* I'm studying software engineering and I'm learning technologies as html, css, javascript, react, node, postgres, sass</p>
        <p>* besides starting to learn java</p>
        <a href="#interaction">Click for continue</a>
      </div>
    </section>
  )
}

export default About