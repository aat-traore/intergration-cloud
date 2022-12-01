import './App.css';
import Map from './component/Map';
import Header from './component/Header';
import { Routes, Route} from "react-router-dom";
import Service from './component/Service';
function App() {
  return (
    <>
    <Routes>
    <Route path='/' element={<Header/>}/>
    <Route path="/Map" element={<Map/>} />
    <Route path="/Service" element={<Service/>} />

    </Routes>
    </>
  );
}

export default App;
