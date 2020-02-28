const axios = require("axios");

const api = {
  getUser(username) {
    const queryURL = `https://api.github.com/users/${username}`;
    return axios.get(queryURL)
   .catch(err => console.log(err))
  }
}

module.exports = api;
