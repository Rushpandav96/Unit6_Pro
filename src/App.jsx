import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { Signup } from './Components/Signup';
import { Login } from './Components/Login';
import { Navbar } from './Components/Navbar';
import { Footer } from './Components/Footer';
function App() {
  return (
    <div className='App'>
     <Home></Home>

      <Navbar></Navbar>

      <Footer></Footer>

      <Signup></Signup>

      <Login></Login>
    </div>
  );
}

export default App;
