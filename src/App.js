import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Reviews from './pages/Reviews/Reviews';
import ReviewForm from './pages/ReviewForm/ReviewForm';
import Login from './pages/Login/Login';
import Logout from './pages/Logout/Logout';
import request from './utils/request';
import reviewService from './services/reviews';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [rowLayout, setRowLayout] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authRes = await request('/api/auth/is-verified');
        authRes ? setIsAuthenticated(true) : setIsAuthenticated(false);
      } catch (err) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const getAllReviews = async () => {
      if (isAuthenticated) {
        const reviews = await reviewService.getReviews();
        setReviews(reviews);
      } else {
        setReviews([]);
      }
    };

    getAllReviews();
  }, [isAuthenticated]);

  const setAuth = useCallback(
    (bool) => {
      setIsAuthenticated(bool);
    },
    [setIsAuthenticated]
  );

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
      <Header isAuthenticated={isAuthenticated} />
      <main>
        <Switch>
          <Route path="/review" exact>
            <ReviewForm addReview={addReview} />
          </Route>
          <Route path="/review/:id">
            <ReviewForm updateReview={updateReview} />
          </Route>
          <Route path="/login">
            <Login setAuth={setAuth} />
          </Route>
          <Route path="/logout">
            <Logout setAuth={setAuth} />
          </Route>
          <Route path="/">
            <Reviews
              reviews={reviews}
              rowLayout={rowLayout}
              deleteReview={deleteReview}
              handleRowLayoutChange={handleRowLayoutChange}
              handleCardLayoutChange={handleCardLayoutChange}
              isAuthenticated={isAuthenticated}
            />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
