import request from '../utils/request';
const baseUrl = 'https://review-app-backend.hostman.site/api/reviews';

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

const updateReview = async (id, review) => {
  const updatedReview = await request(`${baseUrl}/${id}`, {
    method: 'PUT',
    body: review,
  });
  return updatedReview;
};

const deleteReview = async (id) => {
  await request(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
};

export default {
  getReviews,
  getReview,
  createReview,
  updateReview,
  deleteReview,
};
