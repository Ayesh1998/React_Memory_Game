import './App.css'
import {useEffect, useState} from "react";
import SingleCard from "./components/SingleCard";

const cardImages = [
    {"src": "img/helmet-1.png", matched: false},
    {"src": "img/potion-1.png", matched: false},
    {"src": "img/ring-1.png", matched: false},
    {"src": "img/scroll-1.png", matched: false},
    {"src": "img/shield-1.png", matched: false},
    {"src": "img/sword-1.png", matched: false},

]

function App() {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const handleClick = (card) => {
        if (choiceOne) {
            setChoiceTwo(card)
        } else {
            setChoiceOne(card)
        }

        console.log(choiceOne, choiceTwo)
    }

    const resetTurn = () => {
        setChoiceTwo(null)
        setChoiceOne(null)
        setTurns(turns + 1)
        setDisabled(false)
    }

    useEffect(() => {
        if (choiceTwo && choiceOne) {
            setDisabled(true)
            if (choiceOne.src === choiceTwo.src) {
                setCards(previousCards => {
                    return previousCards.map(card => {
                        if (card.src === choiceOne.src) {
                            return {...card, matched: true}
                        } else {
                            return card
                        }
                    })
                })
                resetTurn()
            } else {
                setTimeout(() => resetTurn(), 1000)
            }
        }
    }, [choiceTwo, choiceOne]);


    const shuffleCards = () => {
        const shuffledCards = [...cardImages, ...cardImages]
            .sort(() => Math.random() - 0.5)
            .map((card) => ({...card, id: Math.random()}))
        setCards(shuffledCards)
        setTurns(0)
    }

    console.log(cards)

    return (
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {
                    cards.map((card) => {
                        return (
                            <SingleCard flipped={card === choiceOne || card === choiceTwo || card.matched} card={card}
                                        key={card.id} handleClick={handleClick} disabled={disabled}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App