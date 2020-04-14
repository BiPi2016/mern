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
                <Link to={`/edit/${excercise._id}`}>
                    Edit
                </Link>
                |
                <a href="#" 
                 onClick={ () => deleteExcercise(excercise._id) }>
                     Delete
                 </a>   
            </td>
        </tr>
    );
}

export default Excercise;