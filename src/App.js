// import logo from './logo.svg';
import './App.css';
import PageNav from './components/Header/PageNav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Oblicz from './pages/Oblicz'

function App() {
    return (
        <div style={{width:"100%"}}>
        <Router>
            <PageNav/>
            <Switch>
                <Route path="/" exact component={Oblicz}/>
            </Switch>
        </Router>
        </div>
    );
}

export default App;