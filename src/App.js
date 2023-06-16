import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name: 'Laptopoo', price: 100000}, 
    {name: 'Watch', price: 6000}, 
    {name: 'Mobile', price: 31000},
  ]
  return (
    <div className="App">
      {/* <Product name = 'Laptop' price = '100000'></Product>
      <Product name = 'Watch' price = '6000'></Product>
      <Product name = 'Mobile' price = '30000'></Product> */}
      {
        products.map(product => <Product name = {product.name} price = {product.price}></Product>)
      }
    </div>
  );
}
function Product(props) {
  return (
    <div className='product'>
      <h2>Name: {props.name}</h2>
      <p>Price: {props.price}</p>
    </div>
  );
}

export default App;
