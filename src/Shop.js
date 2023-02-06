
import React, { useEffect, useState } from "react";
import { add } from "stimulus";




  

  



const Shop = ({handleEdit, handleRemoveEdit, cards, displayCards, hidden}) => {

  




    return (

      <div className="Shop">

       <h1 className="main-headers">Shop Page</h1>
      
      <div className="main-buttons">
      {!hidden && <button onClick={() => displayCards()} className = "see-items">See Items</button>}
      </div>
      <div className="card-grid">
      {cards.map(card => (

        <div className = "card" >
       
          
                 <div>
       
                   <img className = "cardPic"
                    src = {card.src}
                    
                    alt ="grocery item picture"/>
       
                   <div className="cart-changes">
                   <button onClick={() => handleEdit(card)} className= "add-item">Add To Cart</button>
                   </div>
                 </div>
               </div>
       ))}
</div>
        
</div>
    );
       
}
  

    
   
  
  export default Shop;
  