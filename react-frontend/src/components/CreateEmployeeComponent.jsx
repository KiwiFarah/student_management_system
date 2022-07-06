import React, { Component, useRef } from 'react'
import EmployeeService from '../services/UserService';
import emailjs from 'react';

class CreateEmployeeComponent extends Component {
    constructor(props) {
        super(props)

            this.state = {
            // step 2
            ref_id:  Math.random(),
            id: this.props.match.params.id,
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
        this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
    }

    // step 3
    componentDidMount(){

        // step 4
        if(this.state.id === '_add'){
            return
        }else{
            EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
                let employee = res.data;
                this.setState({
                    ref_id: employee.ref_id,
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
    }
    saveOrUpdateEmployee = (e) => {
        e.preventDefault();
        let employee = {ref_id: this.state.ref_id, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email, dateOfBirth: this.state.dateOfBirth, mobile: this.state.mobile, status: this.state.status, password: this.state.password, accountType: this.state.accountType};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        if(this.state.id === '_add'){
            EmployeeService.createEmployee(employee).then(res =>{
                this.props.history.push('/employees');
            });
        }else{
            EmployeeService.updateEmployee(employee, this.state.id).then( res => {
                this.props.history.push('/employees');
            });
        }
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

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">Add Students</h3>
        }else{
            return <h3 className="text-center">Update Students</h3>
        }
    }

    name() {
        console.log("dasd")
        const form = useRef();

        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
}
    }
        
    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form ref={this.form} onSubmit={this.name}>
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

                                        <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
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

export default CreateEmployeeComponent
