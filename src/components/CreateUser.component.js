import React from 'react';

import {baseURL} from '../util/constants';

import axios from 'axios';
const instance = axios.create({
    baseURL: baseURL
});

class CreateUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            username: this.state.username
        }
        console.log(user);
        instance.post('/user/add', user)
        .then( result => {
            console.log(result);
            this.setState({
                username: ''
            });
        })
        .catch(err => {
            console.log(err);
        });        
    }
    
    render() {
        return(
            <div className="container">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input
                         required
                         type="text" 
                         className="form-control" 
                         id="username" 
                         placeholder="Enter username"
                         value={this.state.username}
                         onChange={this.onChangeUsername} />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateUser;