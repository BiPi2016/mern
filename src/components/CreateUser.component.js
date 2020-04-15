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

        if(this.state.editing) {
            user.id = this.state.id;
            instance.put(`/user/update/${this.state.id}`, user)
            .then( result => {
                this.setState( {
                    username: ''
                });
                window.location = '/users';
            })
        } else {
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
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        if(id) {
            console.log('Editing :');
            instance.get(`/user/${id}`)
            .then( result => {
                console.log(result);
                this.setState({
                    username: result.data.username,
                    editing: true,
                    id: id
                });
            })
            .catch( err => console.log(err));
        }

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