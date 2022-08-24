
import "../styles/components/about.sass"
import hearth from "../imgs/undep.png"
import andar from "../imgs/toriel_frisk_andando.gif"
import asriel from "../imgs/asriel.png"
function About() {

  const message = document.getElementById("about__message")


  return (
    <section className='about' id='about'>
      <h1>about</h1>
      <div className="andar_toriel"><img src={andar} alt="" /></div>
      <article className='about__card'>
        <div className='about__card__item'>
          <p>JORGE</p>
          <p>LV19</p>
          <span>Time</span>
        </div>
        <p className='about__card__item__p'>Local-Home</p>

        <div className='about__card__item'>
          <button onClick={() => {
            message.style.display = "flex"
          }}>
            <span><img src={hearth} alt="" />Save</span>
          </button>
          <button onClick={() => {
            message.style.display = "none"
          }}>
            <span><img src={hearth} alt="" />Return</span>
          </button>
        </div>
      </article>
      <img className="img" src={asriel} alt="" />

      <div id='about__message'>
        <p>* hello my name is jorge, i'm 19 years old </p>
        <p>* I'm studying software engineering and I'm learning technologies as html, css, javascript, react, node, postgres, sass</p>
        <p>* besides starting to learn java</p>
      </div>
    </section>
  )
}

export default About