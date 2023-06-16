import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    const url = `https://jsonplaceholder.typicode.com/users`;
    fetch(url)
    .then(res => res.json())
    .then(data => setUsers(data));
  }, []);
  return (
    <div className="App">
      <h1>External Users</h1>
      <p>{users.length}</p>
      {
        // users.map(user =><li>{user.name}</li>
        users.map(user => <User name = {user.name} email = {user.email}></User>
        )
      }
    </div>
  );
}
function User(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <p>Email: {props.email}</p>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={decreaseCount}>Decrease</button>
    </div>
  );
}


export default App;


// const products = [
//   {name: 'Laptopoo', price: 100000}, 
//   {name: 'Watch', price: 6000}, 
//   {name: 'Mobile', price: 31000},
// ]


// {/* <Product name = 'Laptop' price = '100000'></Product>
//       <Product name = 'Watch' price = '6000'></Product>
//       <Product name = 'Mobile' price = '30000'></Product> */}
//       {
//         products.map(product => <Product name = {product.name} price = {product.price}></Product>)
//       }

// function Product(props) {
//   return (
//     <div className='product'>
//       <h2>Name: {props.name}</h2>
//       <p>Price: {props.price}</p>
//     </div>
//   );
// }
