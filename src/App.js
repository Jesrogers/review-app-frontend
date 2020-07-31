import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Reviews from './pages/Reviews/Reviews';
import ReviewForm from './pages/ReviewForm/ReviewForm';
import Summary from './pages/Summary/Summary';

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Reviews />
        </Route>
        <Route path="/review">
          <ReviewForm />
        </Route>
        <Route path="/summary">
          <Summary />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
