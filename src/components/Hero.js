import '../App.css';
import group from '../group.png'

function Hero() {
  return (
    <section className="hero">
     <img src={group} className="group"></img>
     <h1 className="title">Online Experiences</h1>
     <p className="subtitle">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </section>
  );
}

export default Hero;