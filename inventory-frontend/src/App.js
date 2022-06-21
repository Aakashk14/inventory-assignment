import logo from './logo.svg';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import New_ from './new_inv'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/inventory/new" element={<New_/>}></Route>
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
