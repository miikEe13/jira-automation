require("dotenv").config();
const { createIssue } = require("../issue/index");
const toADF = require("../../utils/toADF");
const sprint = require("../../data/week0");

const { PROJECT_KEY, ACCOUNT_ID } = process.env;

(async () => {
  try {
    // 1️⃣ Create Epic
    const epicKey = await createIssue({
      project: { key: PROJECT_KEY },
      summary: sprint.epic.summary,
      description: toADF(sprint.epic.description),
      issuetype: { name: "Epic" },
      assignee: { accountId: ACCOUNT_ID } // Optional if allowed
    });
    console.log("✅ Epic created:", epicKey);

    // 2️⃣ Create Stories and their Subtasks
    for (const story of sprint.stories) {
      const storyKey = await createIssue({
        project: { key: PROJECT_KEY },
        summary: story.summary,
        description: toADF(story.description),
        issuetype: { name: "Historia" }, // Jira uses Spanish in my case
        parent: { key: epicKey },
        assignee: { accountId: ACCOUNT_ID }
      });
      console.log("📗 Story created:", storyKey);

      for (const task of story.tasks) {
        const taskKey = await createIssue({
          project: { key: PROJECT_KEY },
          summary: task,
          description: toADF(`Subtarea de: ${story.summary}`),
          issuetype: { name: "Subtarea" }, // 👈 LOCALIZED TYPE Jira uses Spanish in my case
          parent: { key: storyKey },
          assignee: { accountId: ACCOUNT_ID }
        });
        console.log("📘 Subtarea creada:", taskKey);
      }
    }

    console.log("🎉 Sprint created successfully with correct Jira hierarchy.");
  } catch (err) {
    console.error("❌ Error:", err.response?.data || err.message);
  }
})();
