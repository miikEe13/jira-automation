# Jira Automation

This project automates the creation of sprints in Jira Cloud, including:

- Epics
- Stories
- Subtasks

It uses Node.js, Axios, and the Jira REST API with a clean, modular structure.

## Project structure

jira-automation/
  .env                # Jira credentials and project config
  create/
    issue/            # Generic issue creation logic
    sprint/           # Sprint creation orchestrator
  data/
    week0.js          # Sprint definition (epic, stories, subtasks)
  utils/
    toADF.js          # Converts plain text to Atlassian Document Format (ADF)

## How to use

1. Install dependencies

    npm install

2. Create a .env file in the root with the following values:

    JIRA_DOMAIN=https://your-domain.atlassian.net
    JIRA_EMAIL=your-email@example.com
    JIRA_API_TOKEN=your-api-token
    PROJECT_KEY=SCRUM
    ACCOUNT_ID=your-jira-account-id

3. Run the sprint creation script

    node create/sprint/index.js

## Creating new sprints

1. Create a new file in the data folder, like `week1.js`
2. Follow the same format as `week0.js`:

Example:

    module.exports = {
      epic: {
        summary: "Week 1 - Auth system",
        description: "Implement login, logout, and registration"
      },
      stories: [
        {
          summary: "Login flow",
          description: "User can log in with email and password",
          tasks: ["Login form", "API integration", "Error handling"]
        }
      ]
    }

3. In `create/sprint/index.js`, change the data source:

    const sprint = require("../../data/week1")

4. Run again:

    node create/sprint/index.js

## Requirements

- Node.js 18+
- A Jira Cloud project with issue types: Epic, Story, Subtask
- API token from Atlassian
- Enabled permissions to create issues

## Author

Miguel Angel Sergio Ramirez Medel
