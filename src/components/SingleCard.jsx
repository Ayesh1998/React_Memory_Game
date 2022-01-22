import "./SingleCard.css"

function SingleCard({card, handleClick, flipped, disabled}) {
    return (
        <div className="card" >
            <div className={ flipped ? "flipped" : ""}>
                <img className="front" src={card.src} alt=""/>
                {
                    disabled ? <img className="back" src="img/cover.png" alt=""/> :
                        <img className="back" onClick={() => handleClick(card)} src="img/cover.png" alt=""/>
                }

            </div>
        </div>
    );
}

export default SingleCard;