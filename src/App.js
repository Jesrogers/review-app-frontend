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
    const getAllReviews = async () => {
      const reviews = await reviewService.getReviews();
      setReviews(reviews);
    };

    getAllReviews();
  }, []);

  const handleRowLayoutChange = () => {
    setRowLayout(true);
  };

  const handleCardLayoutChange = () => {
    setRowLayout(false);
  };

  const addReview = async (review) => {
    const newReview = await reviewService.createReview(review);
    setReviews(reviews.concat(newReview));
  };

  const updateReview = async (id, newReview) => {
    const updatedReview = await reviewService.updateReview(id, newReview);
    setReviews(
      reviews.map((review) =>
        review.id !== updatedReview.id ? review : updatedReview
      )
    );
  };

  const deleteReview = (id) => {
    reviewService.deleteReview(id);
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/review" exact>
            <ReviewForm addReview={addReview} />
          </Route>
          <Route path="/review/:id">
            <ReviewForm updateReview={updateReview} />
          </Route>
          <Route path="/summary">
            <Summary />
          </Route>
          <Route path="/">
            <Reviews
              reviews={reviews}
              rowLayout={rowLayout}
              x
              deleteReview={deleteReview}
              handleRowLayoutChange={handleRowLayoutChange}
              handleCardLayoutChange={handleCardLayoutChange}
            />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
