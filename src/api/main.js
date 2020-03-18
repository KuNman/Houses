window.axios = require('axios');

const url = 'http://mr-test-backend.sadek.usermd.net/';

window.axios.interceptors.response.use((res) => res, (error) => {
  console.log(error.response);
  return Promise.reject(error);
});

const requests = {
  getAwait: async (path) => {
    return window.axios.get(url+path)
      .then((res) => {
        return res.data;
      });
  },
};

export const Houses = {
  list: () => {
    return requests.getAwait('houses');
  },
};
