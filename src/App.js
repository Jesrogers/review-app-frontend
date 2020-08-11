import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Reviews from './pages/Reviews/Reviews';
import ReviewForm from './pages/ReviewForm/ReviewForm';
import Summary from './pages/Summary/Summary';
import reviewService from './services/reviews';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [rowLayout, setRowLayout] = useState(false);

  useEffect(() => {
    const reviews = reviewService.getAll();
    setReviews(reviews);
  }, []);

  const handleRowLayoutChange = () => {
    setRowLayout(true);
  };

  const handleCardLayoutChange = () => {
    setRowLayout(false);
  };

  const addReview = (review) => {
    reviewService.addReview(review);
    setReviews(reviews.concat(review));
  };

  const updateReview = (id, newReview) => {
    setReviews(
      reviews.map((review) => (review.id !== id ? review : newReview))
    );
  };

  const deleteReview = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);

    setReviews(updatedReviews);
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
              deleteReview={deleteReview}
              handleRowLayoutChange={handleRowLayoutChange}
              handleCardLayoutChange={handleCardLayoutChange}
            />
          </Route>
          <Route path="/review" exact>
            <ReviewForm addReview={addReview} />
          </Route>
          <Route path="/review/:id">
            <ReviewForm updateReview={updateReview} />
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
