import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import './styles/App.scss';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {ItemCount} from './components/ItemCount/ItemCount';
import {ItemDetailContainer} from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <CartProvider>
          <NavBar/>
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:categoryId' element={<ItemListContainer/>} /> 
            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
            <Route path='*' element={<h1>404 NOT FOUND</h1>} />
          </Routes>
          </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App; 

