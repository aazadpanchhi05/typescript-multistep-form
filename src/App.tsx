import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Step2 } from './pages/Step2';
import { Step1 } from './pages/Step1';
import { Step3 } from './pages/Step3';
import { Success } from './pages/Success';
import { View1 } from './views/View1';
import { View2 } from './views/View2';
import FormContainer from './components/FormContainer';
import { View3 } from './views/View3';
import { SuccessView } from './views/SuccessView';

function App() {

  const [count, setCount] = useState(1);

  const nextPage = () => {
    setCount(count + 1);
  }

  const prevPage = () => {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(1);
  }

  return (
    // <Router>
    //   <Container>
    //     <Route path='/success' component={Success} />
    //     <Route path='/step3' component={Step3} />
    //     <Route path='/step2' component={Step2} />
    //     <Route exact path='/' component={Step1} />
    //   </Container>
    // </Router>


    <FormContainer>
      {count === 1 && <View1 nextPage={nextPage} prevPage={prevPage} count={count}/>}
      {count === 2 && <View2 nextPage={nextPage} prevPage={prevPage} />}
      {count === 3 && <View3 nextPage={nextPage} prevPage={prevPage} />}
      {count === 4 && <SuccessView reset={reset}/>}
    </FormContainer>
  );
}

export default App;
