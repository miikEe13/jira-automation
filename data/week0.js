// sprints/week0.js
module.exports = {
    epic: {
      summary: "Week 0 - Initial Setup for MikeCommerce",
      description: "Epic containing all setup tasks for the MikeCommerce starter project.",
    },
    stories: [
      {
        summary: "Set up monorepo with frontend and backend",
        description: "Monorepo structure with workspaces and shared tooling.",
        tasks: ["Configure Husky, Prettier, and ESLint"],
      },
      {
        summary: "Set up local infrastructure with Docker",
        description: "Docker Compose setup with PostgreSQL.",
        tasks: ["Create docker-compose.yml and DB control scripts"],
      },
      {
        summary: "Bootstrap backend with Apollo Server and Express",
        description: "Start GraphQL backend with Express and Prisma.",
        tasks: [
          "Define initial Prisma schema with User, Product, and Category models",
          "Implement Query.products resolver using Prisma",
        ],
      },
      {
        summary: "Render products in frontend from backend",
        description: "Fetch products from API and render in UI.",
        tasks: [
          "Create minimal ThemeProvider using CSS variables",
          "Add E2E smoke test using Cypress",
        ],
      },
    ],
  };
  