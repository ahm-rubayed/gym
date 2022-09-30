import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Card from './components/Card/Card';

function App() {
  return (
    <div className='container mx-auto'>
      <Navbar></Navbar>
      <Home></Home>
      <Card></Card>
    </div>  
      )
}

export default App;
