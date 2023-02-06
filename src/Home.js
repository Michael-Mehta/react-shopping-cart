
import './App.css';
 

const Home = () => {
  return (
    <div className="Home">
   
     <h1>Home Page</h1>

     <p>Welcome to React Shopping cart!</p>
     <p>All your everyday essentials are just one</p>
     <p>click away!</p>

     <img src={process.env.PUBLIC_URL + '/img/groceries.jpg'} />;
    </div>
  );
};

export default Home;
