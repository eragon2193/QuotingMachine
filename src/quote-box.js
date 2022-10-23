import React, {useState, useEffect}from 'react';
import {TwitterButton, NewButton, AuthorText, QuoteText} from './smallElements.js'

document.body.style.transition = '500ms linear'
//"https://api.quotable.io/random"
export function QuoteBox () {

  const [quote, setQuote] = useState([]);
  const [color, setColor] = useState()

  const UpdateButton = () => {
    getHexaNumber();
    fetchQuote();
  }
  const getHexaNumber = () => {
    const num1 = Math.random() * (180 - 70) + 70
    const num2 = Math.random() * (180 - 70) + 70
    const num3 = Math.random() * (180 - 70) + 70
    document.body.style.backgroundColor = 'rgb('+ num1+ ',' + num2+ ',' + num3 +')'
    setColor('rgb('+ num1+ ',' + num2+ ',' + num3 +')')
  }

  useEffect(() =>{
    getHexaNumber();
    fetchQuote();
  }, [])

  const fetchQuote = async () => {
    const response = await fetch("https://api.quotable.io/random")
    const data = await response.json();
    if(response.ok)
    {
      setQuote([data.content, data.author]);
    }
  }

    return(
<div id="wrapper">
  <div id="quote-box" >
      <div id="text">
        <QuoteText color={color} text={quote[0]} />
      </div>
      <div id="author">
        <AuthorText color={color} text={quote[1]}/>
      </div>
      <div id="buttons">
        <TwitterButton text={quote} color={color} />
        <NewButton color={color} func={UpdateButton} />
      </div>
    </div>
  <script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
  </div>
  )
}
