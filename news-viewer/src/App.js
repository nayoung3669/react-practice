import './App.css';
import Categories from './components/Categories';
import { Route, Routes } from 'react-router-dom';
import Newspage from './pages/Newspage';

function App() {

  return (
    <div>
      <Categories />
      <Routes>
        <Route path="/" element={<Newspage />} />
        <Route path="/:category" element={<Newspage />} />
      </Routes>
    </div>
  );
}

export default App;
