import "./SingleCard.css"

function SingleCard({card, handleClick}) {
    return (
        <div className="card" >
            <div>
                <img className="front" src={card.src} alt=""/>
                <img className="back" onClick={() => handleClick(card)} src="img/cover.png" alt=""/>
            </div>
        </div>
    );
}

export default SingleCard;