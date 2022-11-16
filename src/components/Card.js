import '../App.css';
// import katie from '../katie.png'
import star from '../star.png'

function Card(props) {
  return (
    <div className="card">
     <img src={`/images/${props.img}`} className="card--image"></img>
     <button className="card--button">SOLD OUT</button>
        <div className="review--text">
            <p className="rating">
            <img src={star} className="star"></img>
            {props.rating} <span className="review--counttry">({props.reviewCount}) • {props.location}</span>
            </p>
            <p className="card--title">{props.title}{props.country}</p>
            <p> <b>From ${props.price}</b> / person</p>
        </div>
    </div>
  );
}

export default Card;