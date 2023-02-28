import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/post/:postId" component={PostDetail} />
        <Route path="/create-post" component={CreatePost} />
      </Switch>
    </div>
  );
}

export default App;
