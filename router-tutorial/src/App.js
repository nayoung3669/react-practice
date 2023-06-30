import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Layout from './Layout';
import Login from './pages/Login';
import Mypage from './pages/Mypage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}> 
        {/* header가 포함되어 있음 */}
          <Route index element={<Home />}/>
          <Route path = "/about" element={<About />}/>
          <Route path = "/profiles/:username" element={<Profile />}/>
          <Route path = "/articles" element={<Articles />}>
            <Route path = ":id" element = {<Article />}/>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
