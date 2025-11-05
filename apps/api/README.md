# 🧩 ERP Boilerplate – API (NestJS)

This folder contains the **backend server** for the ERP Boilerplate project, built with **NestJS**, a progressive Node.js framework for building scalable, maintainable, and modular server-side applications.  
It provides authentication, CRUD modules, and role-based access control out of the box.

---

## Overview of the Backend Structure

Here’s how the key parts of this NestJS backend work together:

- **Modules**  
  Group related functionality together (e.g., User, Auth, Employee, Finance). Each module contains its own controller, service, and data models, keeping the code modular and maintainable.

- **Controllers**  
  Handle incoming HTTP requests and return responses. They map routes to the appropriate service functions.

- **Services**  
  Contain the business logic and interact with the database through **Prisma ORM**. Controllers depend on services to perform database actions or computations.

- **Guards & Strategies**  
  Handle authentication and authorization. This project uses JWT tokens (access + refresh) with **Passport.js** and includes role-based route protection.

- **Prisma**  
  Acts as the data access layer, providing a strongly-typed API for the PostgreSQL database.

- **main.ts**  
  The entry point of the application. It bootstraps the NestJS server, loads environment variables, and initializes global middleware and configurations.

Together, these components make the backend modular, secure, and easy to extend with additional features or modules.

---

## Environment Variables

The backend uses a `.env` file for environment-specific settings such as:

```
PORT=4000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/erp_db?schema=public
JWT_ACCESS_SECRET=your_access_secret
JWT_REFRESH_SECRET=your_refresh_secret
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d
```

> You can create your `.env` file by copying `.env.example` and updating the values as needed.

---

## Running the Server

The backend supports both development and production modes.

### **Development Mode (with Hot Reload)**
Automatically restarts on file changes:
```bash
pnpm start:dev
```

### **Production Mode**
Builds the project and starts the compiled server:
```bash
pnpm build
pnpm start:prod
```

By default, the server listens on port `4000` or the port defined in your `.env` file.

---

## Database and Prisma

This project uses **PostgreSQL** as the primary database, managed through **Prisma ORM**.

### Run the Database via Docker
```bash
docker-compose up -d
```

### Run Migrations
```bash
pnpm prisma migrate dev
```

### Open Prisma Studio
```bash
pnpm prisma studio
```

### Generate Prisma Client
```bash
pnpm prisma generate
```

---

## Authentication and Authorization

- **Authentication** is implemented using JWT (access + refresh tokens).
- **Authorization** is handled using role-based access control (RBAC).  
  You can define roles such as `User` or `Admin` directly in the Prisma schema.
- The system supports **token rotation** for refresh tokens and secure password hashing with **bcrypt**.

---

## API Testing

You can test the backend using tools such as:

- **[Postman](https://www.postman.com/downloads/)** – for sending API requests and checking responses.
- **[Insomnia](https://insomnia.rest/download)** – for testing REST or GraphQL endpoints interactively.

> Many routes are protected by JWT authentication.  
> To test them, first register or log in to get a token, then include it in the `Authorization: Bearer <token>` header for subsequent requests.

---

## Swagger API Documentation

Once the server is running, you can explore and test your endpoints interactively through Swagger:

```
http://localhost:4000/api/docs
```

This automatically documents all routes, DTOs, and schemas.

---

## Serving and Extending

The backend is modular by design — you can easily add new modules (for example, `sales`, `attendance`, or `analytics`) using NestJS generators:

```bash
nest generate module sales
nest generate service sales
nest generate controller sales
```

Each module follows the same pattern of controller → service → Prisma interaction.

---

## Learn More

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma ORM](https://www.prisma.io/docs)
- [PostgreSQL Docs](https://www.postgresql.org/docs/)
- [Passport.js](http://www.passportjs.org/)
- [Docker](https://docs.docker.com/)

---

## Common Commands

| Task | Command |
|------|----------|
| Start dev server | `pnpm start:dev` |
| Build project | `pnpm build` |
| Run production server | `pnpm start:prod` |
| Run migrations | `pnpm prisma migrate dev` |
| Open Prisma Studio | `pnpm prisma studio` |
| Lint code | `pnpm lint` |
| Format code | `pnpm format` |

---

## Contributing & Troubleshooting

If you encounter any issues:
1. Check your `.env` values (especially database and JWT secrets).
2. Ensure Docker containers are running (`docker ps`).
3. Re-generate Prisma client if models change (`pnpm prisma generate`).
4. Review the root README for global setup instructions.
