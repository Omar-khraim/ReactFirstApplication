
import "./Card.css";

function Card( param ){

    const classes = "card " + param.className;

    return <div className={classes}>{param.children}</div>;
   
}

export default Card;