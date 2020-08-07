import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Reviews from './pages/Reviews/Reviews';
import ReviewForm from './pages/ReviewForm/ReviewForm';
import Summary from './pages/Summary/Summary';

let reviewArray = [
  {
    title: 'Example Movie',
    description: 'What a great movie. The story was amazing.',
    rating: 5,
    category: 2,
    id: 1,
  },
  {
    title: 'Example Food',
    description: "Didn't taste good.",
    rating: 2,
    category: 1,
    id: 2,
  },
  {
    title: 'Example Location',
    description: 'A very nice vacation spot.',
    rating: 4,
    category: 3,
    id: 3,
  },
];

const App = () => {
  const [reviews, setReviews] = useState(reviewArray);
  const [rowLayout, setRowLayout] = useState(false);

  const handleRowLayoutChange = () => {
    setRowLayout(true);
  };

  const handleCardLayoutChange = () => {
    setRowLayout(false);
  };

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route exact path="/">
            <Reviews
              reviews={reviews}
              rowLayout={rowLayout}
              handleRowLayoutChange={handleRowLayoutChange}
              handleCardLayoutChange={handleCardLayoutChange}
            />
          </Route>
          <Route path="/review">
            <ReviewForm />
          </Route>
          <Route path="/summary">
            <Summary />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
