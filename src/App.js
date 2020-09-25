import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import ReviewForm from './pages/ReviewForm/ReviewForm';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Logout from './pages/Logout/Logout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import authService from './services/auth';
import reviewService from './services/reviews';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const authRes = await authService.checkVerified();
        authRes ? setIsAuthenticated(true) : setIsAuthenticated(false);
      } catch (err) {
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    const getAllReviews = async () => {
      if (isAuthenticated) {
        const reviews = await reviewService.getReviews();
        setReviews(reviews);
        setIsLoading(false);
      } else {
        setReviews([]);
        setIsLoading(false);
      }
    };

    setIsLoading(true);
    getAllReviews();
  }, [isAuthenticated]);

  const setAuth = useCallback(
    (bool) => {
      setIsAuthenticated(bool);
    },
    [setIsAuthenticated]
  );

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

  const deleteReview = async (id) => {
    await reviewService.deleteReview(id);
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
  };

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <main>
        <Switch>
          <PrivateRoute path="/review" isAuthenticated={isAuthenticated} exact>
            <ReviewForm addReview={addReview} />
          </PrivateRoute>
          <PrivateRoute path="/review/:id" isAuthenticated={isAuthenticated}>
            <ReviewForm updateReview={updateReview} />
          </PrivateRoute>
          <Route path="/register">
            <Register setAuth={setAuth} isAuthenticated={isAuthenticated} />
          </Route>
          <Route path="/login">
            <Login setAuth={setAuth} isAuthenticated={isAuthenticated} />
          </Route>
          <Route path="/logout">
            <Logout setAuth={setAuth} isAuthenticated={isAuthenticated} />
          </Route>
          <Route path="/">
            <Home
              reviews={reviews}
              deleteReview={deleteReview}
              isLoading={isLoading}
              isAuthenticated={isAuthenticated}
            />
          </Route>
        </Switch>
      </main>
    </Router>
  );
};

export default App;
