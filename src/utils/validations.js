const loginValidation = (username, password) => {
  let result = {
    isValid: true,
    errors: {},
  };

  if (!username || !username.trim()) {
    result.isValid = false;
    result.errors['username'] = 'Cannot be empty';
  }
  if (!password || !password.trim()) {
    result.isValid = false;
    result.errors['password'] = 'Cannot be empty';
  }

  return result;
};

const registerValidation = (username, password, repeatPassword) => {
  let result = {
    isValid: true,
    errors: {},
  };

  const usernameRegex = RegExp(/^[a-zA-Z0-9]+$/);

  if (!username || !username.trim()) {
    result.isValid = false;
    result.errors['username'] = 'Cannot be empty';
  }

  if (!usernameRegex.test(username)) {
    result.isValid = false;
    result.errors['username'] =
      'Username only allows for alphanumeric characters';
  }

  if (username.length > 100) {
    result.isValid = false;
    result.errors['username'] = 'Username must be under 100 characters';
  }

  if (!password || !password.trim()) {
    result.isValid = false;
    result.errors['password'] = 'Cannot be empty';
  }

  if (password.length > 200) {
    result.isValid = false;
    result.errors['password'] = 'Password must be under 200 characters';
  }

  if (repeatPassword !== password) {
    result.isValid = false;
    result.errors['repeatPassword'] = 'Passwords must match';
  }

  return result;
};

const reviewFormValidation = (title, description, rating) => {
  let result = {
    isValid: true,
    errors: {},
  };

  if (!title.trim()) {
    result.isValid = false;
    result.errors['title'] = 'Cannot be empty';
  }

  if (title.length > 100) {
    result.isValid = false;
    result.errors['title'] = 'Title must be 100 characters or less';
  }

  if (description.length > 300) {
    result.isValid = false;
    result.errors['description'] = 'Description must be 300 characters or less';
  }

  if (!rating || rating < 1 || rating > 5) {
    result.isValid = false;
    result.errors['rating'] = 'Select a valid rating';
  }

  return result;
};

export { loginValidation, registerValidation, reviewFormValidation };
