import './App.css'
import {useEffect, useState} from "react";
import SingleCard from "./components/SingleCard";

const cardImages = [
    {"src": "img/helmet-1.png"},
    {"src": "img/potion-1.png"},
    {"src": "img/ring-1.png"},
    {"src": "img/scroll-1.png"},
    {"src": "img/shield-1.png"},
    {"src": "img/sword-1.png"},

]

function App() {

    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne, setChoiceOne] = useState(null);
    const [choiceTwo, setChoiceTwo] = useState(null);

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
    }

    useEffect(() => {
        if (choiceTwo && choiceOne){
           if ( choiceOne.src === choiceTwo.src){
               console.log("matched")
               resetTurn()
           }else {
               resetTurn()
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

    return (
        <div className="App">
            <h1>Magic Match</h1>
            <button onClick={shuffleCards}>New Game</button>

            <div className="card-grid">
                {
                    cards.map((card) => {
                        return (
                            <SingleCard card={card} key={card.id} handleClick={handleClick}/>
                        )
                    })
                }
            </div>
        </div>
    );
}

export default App