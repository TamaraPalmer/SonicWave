import './App.scss';
import Hero from './components/Hero/Hero';
import Game from './pages/Game';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <main>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/sonicwave' element={<Game />} />
      </Routes>
    </main>
  );
}

export default App;
