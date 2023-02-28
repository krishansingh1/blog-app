import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/post/:postId" component={PostDetail} />
        <Route path="/create-post" component={CreatePost} />
      </Routes>
    </div>
  );
}

export default App;
