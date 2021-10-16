import {useEffect, useState} from "react"
import axios from "axios";
import {v4 as uuidv4} from "uuid"

const useFlip = () => {
    const [isFacingUp, setIsFacingUp] = useState(true);
    const flipCard = () => {
        setIsFacingUp(isUp => !isUp);
    };

    return [isFacingUp, flipCard]
}

/* axios code for CardTable
const useAxios = (url) => {
    //useState obj to store all the cards
    const [cards, setCards] = useState([])
    const [error, setError] = useState(null)

    //async function to call axios
    const drawCard = async () => {
        try {
            const res = await axios.get(`${url}`)
            // adds the response to the cards array using setCards
            setCards(cards => [...cards, { ...res.data, id: uuidv4() }])
        } catch (err) {
            setError(err)
        }
        
    }

    return [cards, drawCard, error]
}
*/

// axios code for both
const useAxios = (baseUrl) => {
    const [cards, setCards] = useState([])
    const [error, setError] = useState(null)

    const getCard =  async (name = "") => {
        try{
            const res = await axios.get(`${baseUrl}${name}`)
            setCards(cards => [...cards, { ...res.data, id: uuidv4() }])
        } catch (err) {
            setError(err)
        }
    }

    return [cards, getCard, error]
}

export {useFlip, useAxios}