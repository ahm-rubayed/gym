import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Blog from './components/Blog/Blog';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <Blog></Blog>
    </div>  
      )
}

export default App;
