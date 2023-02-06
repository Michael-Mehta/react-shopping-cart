import './App.css';
 

const Checkout = ({clearCart, copy}) => {
  return (
    <div className="Checkout">
   
     <h1>Checkout</h1>



     <div className="card-grid">
      {copy.map(cop => (

      
        <div className = "card" >
       
          
                 <div>
       
                   <img className = "cardPic"
                    src = {cop.card.src}
                    
                    alt ="grocery item picture"/>
       
                 </div>
               </div>
       ))}
</div>



     <button onClick={clearCart}>Purchase items</button>




     
    </div>
  );
};

export default Checkout;
