// import logo from './logo.svg';
import './App.css';
import {Routes, Route} from "react-router-dom";

import Homepage from './pages/Homepage'
import Post from './pages/Post'
import CreatePost from './pages/CreatePost'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Homepage />} />
    <Route path="/post" element={<Post />} />
    <Route path="/post/create" element={<CreatePost />} />
    </Routes>

  );
}

export default App;
