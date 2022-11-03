import '../App.css';
import katie from '../katie.png'
import star from '../star.png'

function Card() {
  return (
    <div className="card">
     <img src={katie} className="card--image"></img>
     <button className="card--button">SOLD OUT</button>
        <div className="review--text">
            <p className="rating">
            <img src={star} className="star"></img>
            5.0 <span className="review--counttry">(6) USA</span>
            </p>
            <p>Life lessons with Katie Zaferes</p>
            <p> <b>From $136</b>/ person</p>
        </div>
    </div>
  );
}

export default Card;