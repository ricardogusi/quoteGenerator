import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Input() {

    const [quotes, setQuotes] = useState('')
    const [author, setAuthor] = useState('')
    const [counter, setCounter] = useState(0)

    useEffect(() => {
      get()
        
    }, [])

    const get = async () => {
      const response = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
      const data = await response.json()
      setQuotes(data[0].quote)
      setAuthor(data[0].author)
      

   }

    const change = () => {
      get()
    }


  return (
    <>
      <div className="container">
        <div className="input">
          
          <button onClick={change}>Roll, bitch!</button>
        </div>
      </div>
      <div className="quote">
        <span>{quotes}</span> 
        
      </div>
      <div className="author">
        <span>{author}</span>

      </div>
    </>
  );
}
