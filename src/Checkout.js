import './App.css';
 

const Checkout = ({clearCart, copy, handleRemoveEdit, showButton}) => {
  return (
    <div className="Checkout">
   
     <h1 className= "main-headers">Checkout</h1>



     <div className="card-grid">
      {copy.map(cop => (

      
        <div className = "card" >
       
          
                 <div>
       
                   <img className = "cardPic"
                    src = {cop.card.src}
                    
                    alt ="grocery item picture"/>
                    
                    <div className="cart-changes">

                    <button onClick={() => handleRemoveEdit(cop)} className = "remove-item">Remove Item</button>

                    </div>
                 </div>
               </div>
       ))}
</div>


     <div className = "main-buttons">

     {showButton && <button onClick={clearCart} className = "see-items" >Purchase items</button>}
      
    </div>

     {!showButton && <h3 className = "main-headers">Your cart is empty</h3>}
     
    </div>
  );
};

export default Checkout;
