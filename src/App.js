// import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Oblicz from './pages/Oblicz/Oblicz'
import NotFound from './pages/NotFound/NotFound'

// import Map from "./components/Map/Map"
function App() {
    return (

        <Router>

            <div style={{width: "100%"}}>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/Oblicz' component={Oblicz}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>

        </Router>

    );
}

export default App;