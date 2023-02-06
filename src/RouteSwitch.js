import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shop from "./Shop";
import Checkout from "./Checkout";
import NavBar from "./NavBar";

import { useState } from "react";


const cardImages = [
  {"src":"/img/bacon.png"},
  {"src":"/img/bread.webp"},
  {"src":"/img/chips.png"},
  {"src":"./img/corn.jpeg"},
  {"src":"./img/detergent.webp"},
  {"src":"./img/jif.webp"},
  {"src":"./img/mustard.webp"},
  {"src":"./img/pasta.webp"},
  {"src":"./img/plates.webp"},
  {"src":"./img/ranch.webp"},
  {"src":"./img/spoons.webp"}

]



const RouteSwitch = () => {

const [itemCount, setItemCount] = useState(0)
const [display, setDisplay] = useState(0)
const [cards, setCards] = useState([])
const [copy, setCopy] = useState([])



  const displayCards = () => {


    
    const cardGrid = [...cardImages].map((card) => ({...card, id:Math.random() }))
  

    setCards(cardGrid);

  
  
}

const handleEdit = (card) => {
    setItemCount(itemCount + 1)


   addCopy(card)
}

const handleRemoveEdit = (card) => {

    if(itemCount === 0){
      return
    }else{
    removeCopy(card)
    }

    
    
}

const clearCart = () => {
  setItemCount(0)
  setCopy([])
}

const addCopy = (card) => {

  copy.map((cop) =>{

    if(cop.src === card.src){
      return
    }
    
  })

  setCopy([...copy, {card}])

  console.log(copy)
}


const removeCopy = (coppy) => {

  copy.map((cop, index) => {

  if(cop.card.id === coppy.card.id)
  {
  setCopy([
    ...copy.slice(0, index),
    ...copy.slice(index + 1)
  ]);

  setItemCount(itemCount - 1)
  return;
}
}
  )
  
};

  return (

   
    <BrowserRouter>
     <NavBar itemCount={itemCount}
       />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop 
        handleEdit = {handleEdit}
        
        cards = {cards}
        displayCards = {displayCards}
 
    
        
         />} />
         <Route path = "/checkout" element = {<Checkout 
         clearCart = {clearCart}
         copy = {copy} 
         handleRemoveEdit = {handleRemoveEdit}
         />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;