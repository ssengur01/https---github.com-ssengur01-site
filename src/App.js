import { Route, Routes } from "react-router-dom"
import Home from "./Components/Pages/Home/Home"
import About from "./Components/Pages/About/About"
import Cart from "./Components/Pages/Cart/Cart"
import ProductDetail from "./Components/Pages/ProductDetail/ProductDetail"
import WishList from "./Components/Pages/WishList/WishList"
import ErrorPage from "./Components/Pages/ErrorPage/ErrorPage"
import Naav from "./Components/Nav/Naav"

function App() {

    return (
       <div>
       <div className="App">
        <Naav />
        {/* navbar */}
        <div className="main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About /> } />
                <Route path="/cart" element={<Cart /> } />
                <Route path="/wishlist" element={<WishList /> } />
                <Route path="/products/:id" element={<ProductDetail /> } />
                <Route path="*" element={<ErrorPage /> } />
                </Routes>
        </div>
        {/* footer */}
        </div>

        
        </div>
    );
}

export default App;

