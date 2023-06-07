import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Products from "./components/Products";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="main">
        <Sidebar />
        <Products />
      </div>
    </div>
  );
}

export default App;

// APP
//  HEADER
//    CART
//  div.main
//   SIDEBAR
//   PRODUCTS
//     PRODUCT
