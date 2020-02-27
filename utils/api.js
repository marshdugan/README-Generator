const axios = require("axios");

const api = {
  getUser(username) {
    const queryURL = `https://api.github.com/users/${username}`;
    axios.get(queryURL).then(function(response) {
      console.log(response.data.avatar_url);
      return response.data.avatar_url;
    }) 
  }
}

module.exports = api;
