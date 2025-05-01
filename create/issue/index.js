// createIssue.js
require("dotenv").config();
const axios = require("axios");

const { JIRA_DOMAIN, JIRA_EMAIL, JIRA_API_TOKEN } = process.env;

const auth = {
  username: JIRA_EMAIL,
  password: JIRA_API_TOKEN,
};

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

const createIssue = async (fields) => {
  const res = await axios.post(
    `${JIRA_DOMAIN}/rest/api/3/issue`,
    { fields },
    { auth, headers }
  );
  return res.data.key;
};

module.exports = { createIssue };
