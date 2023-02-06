
import React, { useEffect, useState } from "react";
import { add } from "stimulus";




  

  



const Shop = ({handleEdit, handleRemoveEdit, cards, displayCards}) => {

  




    return (

      <div className="Shop">

       <h1>Shop Page</h1>
      
      <button onClick={() => displayCards()} className = "see-items">See Items</button>
       
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
  