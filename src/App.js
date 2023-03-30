// import logo from './logo.svg';
import './App.css';
import {Route ,Switch} from 'react-router-dom';
import Home from './templates/home';
import FootBall from './templates/football';
import Golf from './templates/golf';
import Swimming from './templates/swimming';

function App() {
  return (
    <div className="App">
      <Route exact path='/Home' component={Home} />
      <Switch>
        
        <Route path='/FootBall' component={FootBall} />
        <Route path='/Golf' component={Golf} />
        <Route path='/Swimming' component={Swimming} />
      </Switch>
      
      
    </div>
  );
}

export default App;
