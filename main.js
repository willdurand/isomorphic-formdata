const createFormData = () => {
  if (typeof window !== 'undefined') {
    return require('./browser');
  }

  return require('formdata-node');
};

module.exports = createFormData();
