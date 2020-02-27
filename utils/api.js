const axios = require("axios");
const inquirer = require("inquirer");

const api = {
  getUser(username) {
    const queryURL = `https://api.github.com/users/${username}`;
    axios.get(queryURL).then(function(response) {
      console.log(response.data)
      response.data.avatar_url;
    }) 
  }
}

module.exports = api;
