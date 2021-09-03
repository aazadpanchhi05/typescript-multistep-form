import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Step2 } from './pages/Step2';
import { Step1 } from './pages/Step1';
import { Step3 } from './pages/Step3';
import { Success } from './pages/Success';

function App() {
  return (
    <Router>
      <Container>
        <Route path='/success' component={Success} />
        <Route path='/step3' component={Step3} />
        <Route path='/step2' component={Step2} />
        <Route exact path='/' component={Step1} />
      </Container>
    </Router>
  );
}

export default App;
