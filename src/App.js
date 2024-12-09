
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/layouts/NavBar/NavBar";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer";
import Cart from "./components/pages/Cart/Cart";
import ItemDetail from "./components/pages/ItemDetail/ItemDetail";
import { CartContextProvider } from "./context/CartContext";
import CheckOut from "./components/pages/Checkout/CheckOut";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:nombre" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/itemDetail/:id" element={<ItemDetail />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
