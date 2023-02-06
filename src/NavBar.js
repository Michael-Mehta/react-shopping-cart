import './App.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';


const NavBar = ({itemCount}) => {

    
   

   
    return (
        <div className="NavBar">
         
           <nav className='navLinks'>

           <h1> React Shopping Cart</h1>

           <ul>

            <li>
                   <div>
                   <Link to = "/" className='link'> Home </Link>
                  </div>
                  <div>
                    
                   <Link to = "/shop" className='link'> Shop </Link>
                  </div>
                   <div className='cart-num'>
                   
                  <Link to = "/checkout" className='cart'><FontAwesomeIcon icon= {faCartShopping} /></Link>
                   <p>{itemCount}</p>
                   </div>
            </li>
           </ul>
           </nav>  
        </div>
    );
};


export default NavBar;