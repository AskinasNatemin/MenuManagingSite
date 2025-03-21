import "./App.css";
import MenuContainer from "./Components/MenuContainer";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <BrowserRouter>
      <div className="mainContainer">
        <Navbar />
        <Routes>
          <Route path="/" element={<MenuContainer />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
