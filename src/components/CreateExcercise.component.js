import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class CreateExcercise
 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            description: '',
            duration: 0,
            date: new Date(),
            users: []
        }

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeUsername(e) {
        this.setState({username: e.target.value});
    }
    onChangeDescription(e) {
        this.setState({description: e.target.value});
    }
    onChangeDuration(e) {
        this.setState({duration: e.target.value});
    }
    onChangeDate(date) {
        this.setState({date: date});
    }
    onSubmit(e) {
        e.preventDefault();
        const excercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }
        console.log(excercise);
        window.location = '/';
    }

    componentDidMount() {
        this.setState({users: ['Abhi', 'BiPi', 'Guru']});
        this.setState({username: this.state.users[0]});
    }

    render() {
        return(
            <div className="container">
                <h3>Create Exercise</h3>
                <form onSubmit={this.onSubmit}>
                    <select className="custom-select form-group"
                    required
                    value={this.state.username}
                    onChange={this.onChangeUsername} >
                        {
                            this.state.users.map( user =>
                                <option 
                                value={user}
                                key={user}>
                                    {user}
                                </option>
                            )
                        }
                    </select>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <input type="text"
                         className="form-control" 
                         id="description" 
                         placeholder="Description of excercise" 
                         value={this.state.description}
                         onChange={this.onChangeDescription} />
                    </div>
                    <div className="form-group">
                        <label for="duration">Duration (in minutes)</label>
                        <input
                         type="number" 
                         className="form-control" 
                         id="duration" 
                         placeholder="Duration of excercise" 
                         value={this.state.duration}
                         onChange={this.onChangeDuration}   />
                    </div>
                    <div className="form-group">
                        <label for="date">Date</label>
                        <div id="date">
                            <DatePicker 
                             selected={this.state.date}
                             onChange={this.onChangeDate} />
                        </div>
                    </div>
                    <div className="form-group">
                        <input
                         type="submit"
                         value="Create Excercise Log"
                         className="btn btn-primary" />
                    </div>
                </form>
            </div>
        );
    }
}

export default CreateExcercise
;