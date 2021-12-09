import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Description from './components/Description';
import News from './components/News';


function App() {
  return (
  <Router>
    <Route exact path="/" component={News}/>
    <Route path ="/desc/:id/:param" component={Description}/>
  </Router>
  );
}

export default App;
