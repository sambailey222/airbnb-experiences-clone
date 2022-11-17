import '../App.css';
import star from '../star.png'

function Card(props) {
    // set badgeText (if applicable)
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = 'SOLD OUT'
    } else if (props.item.location === 'Online') {
        badgeText = 'ONLINE'
    }

  return (
    <div className="card">
     <img src={`/images/${props.item.coverImg}`} className="card--image"></img>
    {/* conditionally render the badge */}
     {badgeText && <button className="card--button">{badgeText}</button>}
        <div className="review--text">
            <p className="rating">
            <img src={star} className="star"></img>
            {props.item.stats.rating} <span className="review--counttry">({props.item.stats.reviewCount}) • {props.item.location}</span>
            </p>
            <p className="card--title">{props.item.title}</p>
            <p> <b>From ${props.item.price}</b> / person</p>
        </div>
    </div>
  );
}

export default Card;