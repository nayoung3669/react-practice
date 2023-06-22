import { useState } from 'react';
import './App.css';
import axios from 'axios';
import NewsList from './components/NewsList';
import NewsItem from './components/NewsItem';

function App() {
  const [data, setData] = useState(null)
  const onClick = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=213efe280f8443fcabd141b11f4d00d2')
      setData(response.data)
    }
    catch (e) {
      console.log(e)
    }

  }
  return (
    <div>
      <NewsList />
    </div>
  );
}

export default App;
