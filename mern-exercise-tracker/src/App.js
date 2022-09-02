import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/navbar.component';
import ExerciseList from './components/exercise-list.component';
import EditExercise from './components/edit-exercise.component';
import CreateExercise from './components/create-exercise.component';
import CreateUser from './components/create-user.component';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Routes>
          <Route path="/exercises" component={ExerciseList} />
          <Route path="exercises/:id" component={EditExercise} />
          <Route path="/exercises/add" component={CreateExercise} />
          <Route path="/users/add" component={CreateUser} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
