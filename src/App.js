import './App.css';
import Navbar from './Components/Navbar/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Homepage from './Pages/Homepage';
import ExerciseDetail from './Pages/ExerciseDetail';


function App() {
  return(
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Homepage/>}/>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
