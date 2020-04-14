import React from 'react';
import {Link} from 'react-router-dom';

import Excercise from './Excercise.component';

import {baseURL} from '../util/constants';

import axios from 'axios';
const instance = axios.create({
    baseURL: baseURL
})

class ExcerciseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            excercises:[]
        };

        this.deleteExcercise = this.deleteExcercise.bind(this);
    }

    deleteExcercise(id) {
        console.log('Deleting excercise');
        instance.delete(`/excercise/${id}`)
        .then( result => {
            console.log(`Excercise with id: ${id} deleted`);
            this.setState( prevState => {
                return({
                    excercises: prevState.excercises.filter(ex => ex._id !== id)
                });
            });
        })
        .catch( err => {
            console.log(err);
        });
    }

    componentDidMount() {
        instance.get('/excercise')
        .then( result => {
            let excercises;
            if(result.data.length > 0) {
                excercises = result.data;
            }
            this.setState({
                excercises: excercises
            });
        })
        .catch( err => {
            console.log(err);
        });
    }

    excerciseList() {
        return(
            this.state.excercises.map( (ex, i) => {
                return(
                    <Excercise
                     excercise={ex} 
                     deleteExcercise={this.deleteExcercise}
                     key={ex.username + i} />
                );
            })
        );
    }

    render() {
        return(
            <div className="container">
                <h1>Logged excercises</h1>
                <br />
                <table className="table table-ligth">
                    <thead className="thead-dark">
                        <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Description</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Date</th>
                        <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.excerciseList()}                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ExcerciseList;