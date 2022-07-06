import React, { Component } from 'react'
import '../resources/AdminLoginComponent.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class AdminLoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
          email: '',
          password: '',
        }
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }
    
    saveOrUpdateEmployee = (e) => {
    console.log(this.state.email)
    console.log(this.state.password)

    if(this.state.email == 'admin' && this.state.password == 'admin'){
       this.props.history.push('/employees');
      }
  else{
       this.props.history.push('/admin');
  }

  }
    
    changeEmailHandler= (event) => {
      this.setState({email: event.target.value});
  }

    changePasswordHandler= (event) => {
      this.setState({password: event.target.value});
  }

    render() {
        return (
          
            <div class=" flex-r container">
              
    <div class="flex-r login-wrapper">
      <div class="login-text">
        <div class="logo">
          <span><i class="fab fa-speakap"></i></span>
          <span>Admin Login</span>
        </div>
        {/* <h1>Sign Up</h1> */}
        <p>It's not long before you embark on this journey! </p>

        <form class="flex-c">
          <div class="input-box">
            <span class="label">E-mail</span>
            <div class=" flex-r input">
            <input placeholder="Email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
              <i class="fas fa-at"></i>
            </div>
          </div>

          <div class="input-box">
            <span class="label">Password</span>
            <div class="flex-r input">
           <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
              <i class="fas fa-lock"></i>
            </div>
          </div>

          <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
        </form>

      </div>
    </div>
  </div>
        )
    }
}

export default AdminLoginComponent
