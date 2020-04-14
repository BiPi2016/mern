import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar.component';
import ExcerciseList from './components/ExcerciseList.component';
import CreateExcercise from './components/CreateExcercise.component';
import EditExcercise from './components/EditExcercise.component';
import CreateUser from './components/CreateUser.component';
import UsersList from './components/UsersList.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br />

      <Route path='/' exact component={ExcerciseList} />
      <Route path='/edit/:id' component={EditExcercise} />
      <Route path='/createExcercise' component={CreateExcercise} />
      <Route path='/createUser' component={CreateUser} />
      <Route path='/users' component={UsersList} />
    </Router>
  );
}

export default App;
