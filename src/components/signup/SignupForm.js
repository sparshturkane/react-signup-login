import React, { Component } from 'react';
import timezones from '../../data/timezones';
import map from 'lodash/map';

class SignupForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: ''

        }
        this.handleOnchange = this.handleOnchange.bind(this)
        this.handleSubmitForm = this.handleSubmitForm.bind(this)

    }

    handleOnchange(e){
        this.setState(
            {
                [e.target.name]: e.target.value,
            }
        );
    }

    handleSubmitForm(e){
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        const options = map(timezones,(val, key) =>
            <option key={val} value={val} >{key}</option>
        );
        return(
            <form onSubmit={this.handleSubmitForm}>
                <h1> Join In </h1>
                {/* Username */}
                <div className="form-group">
                    <label className="control-label">Username</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleOnchange} className="form-control"  />
                </div>

                {/* Email */}
                <div className="form-group">
                    <label className="control-label">Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleOnchange} className="form-control"  />
                </div>

                {/* password */}
                <div className="form-group">
                    <label className="control-label">Password</label>
                    <input type="password" name="password" value={this.state.password} onChange={this.handleOnchange} className="form-control"  />
                </div>

                {/* passwordConfirmation */}
                <div className="form-group">
                    <label className="control-label">Password Confirmation</label>
                    <input type="password" name="passwordConfirmation" value={this.state.passwordConfirmation} onChange={this.handleOnchange} className="form-control"  />
                </div>

                <div className="form-group">
                    <label className="control-label">Timezone</label>
                    <select className="form-control" name="timezone" value={this.state.timezone} onChange={this.handleOnchange} >
                        <option value="" disabled>select timezone</option>
                        {options}
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-primary btn-lg">
                        Sign up
                    </button>
                </div>
            </form>
        );
    }
}

export default SignupForm;
