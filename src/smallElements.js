import React from 'react';
import TwitterLogo from "./icons/twitter.svg"

export function NewButton(props) {
  const colorTransitionbg = {
    backgroundColor: props.color,
    transition: "500ms linear"
  }
  return (
  <button id="new-quote"style={colorTransitionbg}type="button" onClick={props.func} className="btn btn-primary">New Quote</button>
    )
}

export function TwitterButton(props) {
  const colorTransitionbg = {
    backgroundColor: props.color,
    transition: "300ms linear"
  }
  return (
    <div style={colorTransitionbg} id="twitter" className="twitterbtn">
      <a 
        target="_blank" 
        rel="noopener noreferrer" 
        id="tweet-quote" 
        href={`https://twitter.com/intent/tweet?text="${props.text[0] + '"    ' + props.text[1]}`}
      >
        <img  id="twitter-logo" src={TwitterLogo} alt="svg as an icon" />
      </a>
    </div>
  )
}

export function QuoteText(props){
  return(
    <p style={{
      color: props.color,
    transition: '500ms linear' 
  }}
  className="quote-text">{props.text}</p>
  )
}

export function AuthorText(props){
  return(
    <p style={{
      color: props.color,
    transition: '500ms linear' 
  }}
  className="author-text">{props.text}</p>
  )
}
  