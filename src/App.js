import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Navbar from './components/Navbar.component';
import ExcerciseList from './components/ExcerciseList.component';
import CreateExcercise from './components/CreateExcercise.component';
import EditExcercise from './components/EditExcercise.component';
import CreateUser from './components/CreateUser.component';

function App() {
  return (
    <Router>
      <Navbar />
      <br />

      <Route path='/' exact component={ExcerciseList} />
      <Route path='/edit/:id' component={EditExcercise} />
      <Route path='/create' component={CreateExcercise} />
      <Route path='/user' component={CreateUser} />
    </Router>
  );
}

export default App;
