import React, { Component } from 'react'
import EmployeeService from '../services/UserService';

class UpdateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            ref_id: '',
            firstName: '',
            lastName: '',
            email: '',
            dateOfBirth: '',
            mobile: '',
            status: '',
            password: '',
            accountType: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.updateEmployee = this.updateEmployee.bind(this);
    }

   

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.ref_id).then( (res) =>{
            let employee = res.data;
            this.setState({
                firstName: employee.firstName,
                lastName: employee.lastName,
                email : employee.email,
                dateOfBirth: employee.dateOfBirth,
                mobile: employee.mobile,
                status: employee.status,
                password: employee.password,
                accountType: employee.accountType,
            });
        });
    }

    updateEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, dateOfBirth: this.state.dateOfBirth, mobile: this.state.mobile, status: this.state.status, password: this.state.password, accountType: this.state.accountType};
        console.log('employee => ' + JSON.stringify(employee));
        console.log('id => ' + JSON.stringify(this.state.id));
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employees');
        });
    }
    changeFirstNameHandler= (event) => {
        this.setState({firstName: event.target.value});
    }

    changeLastNameHandler= (event) => {
        this.setState({lastName: event.target.value});
    }

    changeEmailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    changeDateOfBirthHandler= (event) => {
        this.setState({dateOfBirth: event.target.value});
    }

    changeMobileHandler= (event) => {
        this.setState({mobile: event.target.value});
    }

    changeStatusHandler= (event) => {
        this.setState({status: event.target.value});
    }

    changePasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeAccountTypeHandler= (event) => {
        this.setState({accountType: event.target.value});
    }

    cancel(){
        this.props.history.push('/employees');
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">Update Student</h3>
                                <div className = "card-body">
                                    <form>
                                    <div className = "form-group">
                                            <label> First Name: </label>
                                            <input placeholder="First Name" name="firstName" className="form-control" 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Last Name: </label>
                                            <input placeholder="Last Name" name="lastName" className="form-control" 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Email: </label>
                                            <input placeholder="Email Address" name="emailId" className="form-control" 
                                                value={this.state.email} onChange={this.changeEmailHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Date Of Birth: </label>
                                            <input placeholder="Date Of Birth" name="dateOfBirth" className="form-control" 
                                                value={this.state.dateOfBirth} onChange={this.changeDateOfBirthHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Mobile: </label>
                                            <input placeholder="Mobile" name="mobile" className="form-control" 
                                                value={this.state.mobile} onChange={this.changeMobileHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Status: </label>
                                            <input placeholder="Status" name="status" className="form-control" 
                                                value={this.state.status} onChange={this.changeStatusHandler}/>
                                        </div>

                                        <div className = "form-group">
                                            <label> Password: </label>
                                            <input placeholder="Password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changePasswordHandler}/>
                                        </div>
                               
                                        <div className = "form-group">
                                            <label> Account Type: </label>
                                            <input placeholder="Account Type" name="accountType" className="form-control" 
                                                value={this.state.accountType} onChange={this.changeAccountTypeHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.updateEmployee}>Update</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default UpdateEmployeeComponent
