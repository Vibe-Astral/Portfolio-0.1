
import { useState } from "react"
import "../styles/components/about.sass"
import hearth from "../imgs/pulsehearth.gif"
import andar from "../imgs/toriel_frisk_andando.gif"
import asriel from "../imgs/asriel.png"



function About() {
  const d = new Date()
  let hour = d.getHours()
  let minutes = d.getMinutes()


  const [key, setKey] = useState<number>(0)

  const RenderMessage = () => {
    if(key == 0) {
      return (

        <div id="about__about">
          <p>* (interactive buttons)</p>
          <p>* (it fills you with determination) </p>
        </div>

      )
    }else if(key == 1) {
      return (

        <div id="about__message">
          <p>* (hello my name is jorge, i'm 19 years old) </p>
          <p>* (I'm studying software engineering and I'm learning technologies as html, css, javascript, react, node, postgres, sass)</p>
          <p>* (besides starting to learn java)</p>
          <a href="#interaction">Click for continue</a>
        </div>

      )
    } else {
      return <div><p>Problems</p></div>
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
          <button onClick={()=>{
            setKey(1)
            console.log(key)
          }}>
            <span><img src={hearth} alt="" />Save</span>
          </button>
          <button onClick={()=>{
            setKey(0)
            console.log(key)
          }}>
            <span><img src={hearth} alt="" />Return</span>
          </button>
        </div>
      </article>
      <img className="img" src={asriel} alt="" />

      <RenderMessage />

    </section>
  )
}

export default About