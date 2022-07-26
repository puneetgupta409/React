import './Card.css'
const Card = (porps) => {
    const classes = 'card ' + porps.className;
    return  <div className={classes}>{porps.children}</div>;
} 
export default Card;