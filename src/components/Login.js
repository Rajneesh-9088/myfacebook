import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        // this.emailInputRef = React.createRef();
        // this.passwordInputRef = React.createRef();
        this.state = {
            email: '',
            password: ''
        }
    }
    handleFormSubmit = (e) =>{
        e.preventDefault();
        // console.log('this.emailInputRef',this.emailInputRef);
        // console.log("==============");
        // console.log('this.passpordInputRef',this.passwordInputRef);
        console.log('this.state',this.state);
    }
    handleEmailChange = (e) =>{
        // console.log(e.target.value);
        this.setState({
            email: e.target.value
        })
    }
    handlePasswordChange = (e) =>{
        // console.log(e.target.value);
        this.setState({
            password: e.target.value
        })
    }
    render() {
        return (
            <form className="login-form">
                <span className="login-signup-header">Log In</span>
                <div className="field">
                    <input 
                    type="email"
                     placeholder="Email"
                    //   required ref={this.emailInputRef}
                    onChange = {this.handleEmailChange}
                    value={this.state.email}
                       />
                </div>
                <div className="field">
                    <input 
                    type="password"
                     placeholder="Password"
                    //   required ref={this.passwordInputRef}
                    onChange = {this.handlePasswordChange}
                    value={this.state.password}
                       />
                </div>
               <div className="field">
                   <button onClick = {this.handleFormSubmit}>Log In</button>
               </div>
            </form>
        );
    }
}

export default Login;