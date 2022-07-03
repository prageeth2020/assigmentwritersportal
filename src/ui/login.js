import '../App.css';
import {Component} from "react";

class Login extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header ">
                    <div className="container w-25 mx-auto">
                        <div className="col-lg-12 login-title">
                            LOGIN PANEL
                        </div>
                        <br/><br/>
                        <div className="form-group">
                            <label className="form-control-label">USERNAME</label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"/>
                        </div>
                        <div className="form-group">
                            <label className="form-control-label">PASSWORD</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-outline-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;