import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Reviews from './pages/Reviews/Reviews';
import EditReview from './pages/EditReview/EditReview';
import Summary from './pages/Summary/Summary';

function App() {
  return (
    <>
      <Header />
      <Reviews />
      <EditReview />
      <Summary />
      <Footer />
    </>
  );
}

export default App;
