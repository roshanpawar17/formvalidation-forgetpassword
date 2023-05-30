import logo from './logo.svg';
import './App.css';
import Signup from './component/Signup';
// import Registration from './formvalidation/Registration';
// import Login from './formvalidation/Login';
import  Navbar from './formvalidation/Navbar';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
      <>
        {/* <Signup/> */}
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </>
  );
}

export default App;
