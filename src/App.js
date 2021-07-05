import logo from './logo.svg';
import './App.css';
import PageNav from './components/Header/PageNav'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Oblicz from './pages/Oblicz'

function App() {
    return (
        <Router>
            <PageNav/>
            <Switch>
                <Route path="/" exact component={Oblicz}/>
            </Switch>
        </Router>
    );
}

export default App;