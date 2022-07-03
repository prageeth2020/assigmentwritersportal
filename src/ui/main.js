import '../App.css';
import {Component} from "react";

class Main extends Component {
    constructor(props) {
        if(localStorage.getItem("assignmentsupportlogin") == null){
            window.location.href="./login";
        }
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="App">
                <div className="App-header ">
                    <h1>Main</h1>
                </div>
            </div>
        );
    }
}

export default Main;