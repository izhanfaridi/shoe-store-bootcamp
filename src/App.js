import { Route, Routes  } from 'react-router-dom';
import Home from './components/Home'
import Products from './components/Products'
import Header from './components/Header'
import ProductDetails from './components/ProductDetails'
import ProductHome from './components/ProductHome'
import { Link } from 'react-router-dom';


function NotFound(){
  return(
    <div>
      Not Found
    </div>
  )
}

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="products" element={<Products />}>
            <Route path="/products/" element={<ProductHome />}></Route>
            <Route path=":productId" element={<ProductDetails />}></Route>
        </Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
