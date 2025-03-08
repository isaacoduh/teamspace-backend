# TeamSpace Backend

## Overview

TeamSpace is a collaborative workspace management backend built using the MERN stack. It enables users to create and manage workspaces, projects, and tasks while implementing authentication, role-based access control, and analytics.

## Features

- 🔐 Authentication (Google Sign-In, Email, Password)
- 🏢 Create & Manage Multiple Workspaces
- 📊 Projects & Epics Management
- ✅ Tasks (CRUD, Status, Priority, Assignee)
- 👥 Roles & Permissions (Owner, Admin, Member)
- ✉️ Invite Members to Workspaces
- 🔍 Filters & Search (Status, Priority, AssignedTo)
- 📈 Analytics Dashboard
- 📅 Pagination & Load More
- 🔒 Cookie Session Management
- 🚪 Logout & Session Termination
- 🌱 Seeding for Test Data
- 💾 Mongoose Transactions for Robust Data Integrity

## Tech Stack

- **Backend:** Node.js, Express.js, MongoDB, Mongoose, TypeScript
- **Authentication:** Google OAuth, JWT, Cookie-based session management
- **Infrastructure:** Docker, NGINX
- **Logging:** Winston, Morgan

## Installation

```sh
git clone https://github.com/your-repo/teamspace-backend.git
cd teamspace-backend
npm install
cp .env.example .env # Update environment variables
npm run dev # Start development server
```

## API Endpoints

### Authentication

| Method | Endpoint                    | Description                          |
| ------ | --------------------------- | ------------------------------------ |
| POST   | `/api/auth/register`        | Register a new user                  |
| POST   | `/api/auth/login`           | Log in with email and password       |
| POST   | `/api/auth/logout`          | Log out and terminate session        |
| GET    | `/api/auth/google`          | Initiate Google OAuth authentication |
| GET    | `/api/auth/google/callback` | Handle Google OAuth callback         |

### Workspace Management

| Method | Endpoint                                | Description                                |
| ------ | --------------------------------------- | ------------------------------------------ |
| POST   | `/api/workspace/create/new`             | Create a new workspace                     |
| PUT    | `/api/workspace/update/:id`             | Update workspace details                   |
| PUT    | `/api/workspace/change/member/role/:id` | Change member role in workspace            |
| DELETE | `/api/workspace/delete/:id`             | Delete a workspace                         |
| GET    | `/api/workspace/all`                    | Get all workspaces the user is a member of |
| GET    | `/api/workspace/members/:id`            | Get workspace members                      |
| GET    | `/api/workspace/analytics/:id`          | Get workspace analytics                    |
| GET    | `/api/workspace/:id`                    | Get workspace details                      |

### Project Management

| Method | Endpoint                                            | Description                     |
| ------ | --------------------------------------------------- | ------------------------------- |
| POST   | `/api/project/workspace/:workspaceId/create`        | Create a project                |
| PUT    | `/api/project/:id/workspace/:workspaceId/update`    | Update project details          |
| DELETE | `/api/project/:id/workspace/:workspaceId/delete`    | Delete a project                |
| GET    | `/api/project/workspace/:workspaceId/all`           | Get all projects in a workspace |
| GET    | `/api/project/:id/workspace/:workspaceId/analytics` | Get project analytics           |
| GET    | `/api/project/:id/workspace/:workspaceId`           | Get project details             |

### Member Management

| Method | Endpoint                                 | Description                           |
| ------ | ---------------------------------------- | ------------------------------------- |
| POST   | `/api/member/workspace/:inviteCode/join` | Join a workspace using an invite code |

### User Management

| Method | Endpoint            | Description                |
| ------ | ------------------- | -------------------------- |
| GET    | `/api/user/current` | Get current logged-in user |

## Deployment

To deploy the backend:

1. Set up an Ubuntu server.
2. Install Node.js, MongoDB, and NGINX.
3. Use Docker and Docker Compose for containerization.
4. Configure environment variables.
5. Run `npm run build` and start the server using `pm2` or `docker-compose`.

## Contributing

Feel free to fork this repository and submit a PR with improvements or bug fixes.

## License

This project is licensed under the MIT License.
