let reviewArray = [
  {
    title: 'Example Movie',
    description: 'What a great movie. The story was amazing.',
    rating: 5,
    id: 1,
  },
  {
    title: 'Example Food',
    description: "Didn't taste good.",
    rating: 2,
    id: 2,
  },
  {
    title: 'Example Location',
    description: 'A very nice vacation spot.',
    rating: 4,
    id: 3,
  },
];

const getAll = () => {
  return reviewArray;
};

const getReview = (id) => {
  const review = reviewArray.find((review) => review.id === id);
  return review;
};

const addReview = (review) => {
  reviewArray.concat(review);
  return review;
};

export default { getAll, getReview, addReview };
