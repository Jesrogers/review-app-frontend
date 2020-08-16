import request from '../utils/request';
const baseUrl = 'http://localhost:3001/api/reviews';

const getReviews = async () => {
  return await request(baseUrl);
};

const getReview = async (id) => {
  return await request(`${baseUrl}/${id}`);
};

const createReview = async (review) => {
  const newReview = await request(baseUrl, {
    body: review,
  });

  return newReview;
};

const deleteReview = async (id) => {
  await request(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
};

export default { getReviews, getReview, createReview, deleteReview };
