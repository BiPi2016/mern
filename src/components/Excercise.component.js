import React from 'react';
import {Link} from 'react-router-dom';

const Excercise = (props) => {
    const excercise = props.excercise;
    const deleteExcercise = props.deleteExcercise
    return(
        <tr>
            <th scope="row">{excercise.username}</th>
            <td>{excercise.description}</td>
            <td>{excercise.duration}</td>
            <td>{excercise.date.substring(0, 10)}</td>
            <td>
                <Link to={`/createExcercise/${excercise._id}`}>
                    <button type="button" className="btn btn-link">Edit</button
                </Link>
                |
                <button className="btn btn-link"
                 onClick={ () => deleteExcercise(excercise._id) }>
                     Delete
                 </button>   
            </td>
        </tr>
    );
}

export default Excercise;