import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import BookMark from './components/BookMark';
import Description from './components/Description';
import News from './components/News';


function App() {
  return (
  <Router>
    <Link to='/bookmark'>Bookmark</Link>
    <Route exact path="/" component={News}/>
    <Route path ="/desc/:id/:param" component={Description}/>
    <Route path ="/bookmark" component={BookMark}/>
  </Router>
  );
}

export default App;
