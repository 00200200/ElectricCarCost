import React,{Component} from "react";
import {Redirect} from "react-router-dom"

class NotFound extends Component {
    state= {
        counter: 10
    }
    componentDidMount = ()=> {
    const intervalId =setInterval(this.countdown,1000)
        this.setState({intervalId})
    }
    countdown = ()=> this.setState({counter: this.state.counter-1})

    componentWillUnmount = ()=> clearInterval(this.state.intervalId)


    render() {
        const {location} = this.props
        const {counter} = this.state
        return (
            <div>

                <p>Nie odnaleziono strony <code>{location.pathname}</code></p>
                <p>Powrót na stronę główną za {counter} sekund</p>
                {counter===0 &&<Redirect to="/"/>}
            </div>
        );
    }
}

export default NotFound;