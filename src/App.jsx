import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';


function App() {
    return (
        <BrowserRouter>
        <CartProvider>
            <NavBar/>
            <Routes>
            <Route exact path='/' element={<ItemListContainer greetings={"Welcome to our store!"} />}/>
            <Route exact path='/category/:category'  element={<ItemListContainer />}/>
            <Route exact path='/item/:id' element={<ItemDetailContainer />} />
            <Route exact path='/cart' element={<Cart />} />
            <Route exact path='/checkout' element={<Checkout />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
            <Footer />
            </CartProvider>
        </BrowserRouter>
    );
}


export default App;