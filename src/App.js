// import logo from './logo.svg';
import './App.css';
import MainPage from "./pages/MainPage";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Oblicz from './pages/Oblicz/Oblicz'
import NotFound from './pages/NotFound/NotFound'
import Porównaj from './pages/Porównaj/Porównaj'

// import Map from "./components/Map/Map"
function App() {
    return (

        <Router>

            <div style={{width: "100%",background:"#f6f6f6"}}>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route exact path='/Oblicz' component={Oblicz}/>
                    <Route exact path='/Porównaj' component={Porównaj}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>

        </Router>

    );
}

export default App;