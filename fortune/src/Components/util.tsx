import React, { useState, Component } from 'react';


type KeyBoardProps = {
  Letter: string
  isClicked: boolean
  Price: number
}
type AccountProps = {
  bankAccount: number
}

const PlayerAccount = (props: AccountProps) => {
  const [bankAccount, setBankAccount] = useState(5000);
 
  return (
    <div>Controller</div>
  )
}



const Keyboard = (props: KeyBoardProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [price, setPrice] = useState(props.Price);
  const isVowel = 'aeiouAEIOU'.includes(props.Letter)
  const bgColor = isClicked
  ? 'bg-gray-300'
  : isVowel
    ? 'bg-yellow-300'
    : 'bg-green-300';

  const handleClick = () => {
  if(!isClicked){
    if(!isVowel){
      setIsClicked(true);
      console.log("Constant")
      console.log(price)
      return
    }
    //  Need to check player account to see if they have enough money to purchase a vowel
    setIsClicked(true);
    console.log("vowel")
    console.log(price)
    return
    }
    console.log("already clicked")
  }
 
  
  return (
    <button className={`w-5 h-5 ${bgColor}`} onClick={handleClick}>
      {props.Letter}
    </button> 
  )
}

export {Keyboard}