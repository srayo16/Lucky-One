import './App.css';
import Header from './Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './Products/Products';
import Queans from './Queans/Queans';
import Footer from './Footer/Footer';

function App() {
 
  return (
    <div>
      <Header></Header>
      <Products></Products>
      <Queans></Queans>
      <Footer></Footer>
    </div>
  );
}

export default App;
