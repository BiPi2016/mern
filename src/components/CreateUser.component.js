import React from 'react';

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
        this.setState({
            username: ''
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