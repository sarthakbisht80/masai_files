import { Routes,Route } from 'react-router-dom';
import './App.css'
import { fetchSnacks } from './firebaseAPI';
import Home from './Pages/Home';

function App() {


  return (
<>


  <div style={{ 

    padding: '20px', fontFamily: 'Arial' }}>
      <h1>🍿 SnackShelf</h1>
       <Home/>
    
 
    </div>
</>
  )
}

export default App;
