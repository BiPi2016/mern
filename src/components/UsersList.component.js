import React from 'react';
import axios from 'axios';

import {baseURL} from '../util/constants';

const instance = axios.create({
    baseURL: baseURL
});


const User = (props) => {
    return(
        <tr>
            <td>{props.user.username}</td>
            <td>
                <a href="#"
                 onClick={() => props.deleteUser(props.user._id)} >
                    delete   
                </a>
            </td>
        </tr>  
    );                      
}

class UsersList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: []
        }

        this.deleteUser = this.deleteUser.bind(this);
    }

    deleteUser(id) {
        alert('Deleting user ' + id);
        instance.delete(`/user/${id}`)
        .then(result => {
            console.log(result);
            this.setState( prevState => ({
                users: prevState.users.filter( u => u._id !== id)
            }));
        })
        .then( err => console.log(err));
    }

    componentDidMount() {
        instance.get('/user')
        .then( result => {
            this.setState({
                users: result.data
            });
        })
        .catch( err => console.log(err));
    }

    usersList() {
        return this.state.users.map( (currentUser, i) => {
            return <User 
             user={currentUser}
             key={currentUser.username + i}
             deleteUser={this.deleteUser} />
        })
    }

    render() {
        return(
            <div className="container">
                <table className="table table-light">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">User</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.usersList()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default UsersList;