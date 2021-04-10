import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signup, startSignup } from '../actions/auth';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      name: '',
      confirmPassword: ''
    };
  }

  handleInputChange = (field, value) => {
      this.setState({
          [field]: value
      })
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, confirmPassword, name } = this.state;
    if (email && password && confirmPassword && name) {
      this.props.dispatch(startSignup());
      this.props.dispatch(signup(email, password, confirmPassword, name));
    }
  };

  render() {
    const { error, inProgress } = this.props.auth;
    return (
      <form className="login-form">
        <span className="login-signup-header">Signup</span>
        {error && <div className="alert error-dailog">{error}</div>}
        <div className="field">
          <input
            placeholder="Name"
            type="text"
            required
            onChange={(e) => this.handleInputchange('name', e.target.value)}
          />
          <input
            placeholder="Email"
            type="email"
            required
            //   required ref={this.emailInputRef}
            onChange={(e) => this.handleInputChange('email', e.target.value)}
          />
        </div>
        <div className="field">
          <input
            placeholder="Confirm Password"
            type="password"
            required
            //   required ref={this.passwordInputRef}
            onChange={(e) =>
              this.handleInputChange('confirmPassword', e.target.value)
            }
          />
          <input
            placeholder=" Password"
            type="password"
            required
            //   required ref={this.passwordInputRef}
            onChange={(e) => this.handleInputChange('password', e.target.value)}
          />
        </div>
        <div className="field">
          <button onClick={this.onFormSubmit} disabled={inProgress}>
            Signup
          </button>
        </div>
      </form>
    );
  }
}
 const mapStateToProps = ({auth}) => ({
     auth
 })
export default connect(mapStateToProps)(Signup);
