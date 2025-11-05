# ERP Boilerplate Monorepo

A **modular ERP boilerplate** designed with a monorepo architecture using **NestJS (backend)** and **Next.js (frontend)**.  
It provides a clean, extensible foundation for building full ERP systems with authentication, CRUD modules, and role-based access.
For now the backend works perfectly. I am still working on the frontend.

---

## 🧱 Monorepo Structure

```
erp-boilerplate/
├── apps/
│   ├── api/        # NestJS Backend
│   └── web/        # Next.js Frontend (Under development)
│
├── packages/
│   ├── shared/     # Shared logic (types, utils)
│   └── ui/         # Shared UI components (if needed)
│
├── docker-compose.yml
├── pnpm-workspace.yaml
├── package.json
└── tsconfig.base.json
```

---

## 🚀 Features

✅ Modular monorepo setup (using **pnpm**)  
✅ **NestJS** backend with CRUD and Auth  
✅ **Role-based access control (RBAC)**  
✅ **JWT + Refresh tokens** with bcrypt  
✅ Soft delete for entities  
✅ **PostgreSQL + Prisma ORM**  
✅ Swagger API documentation  
✅ Environment-based configuration  
✅ Docker support  

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/erp-boilerplate.git
cd erp-boilerplate
```

### 2️⃣ Install dependencies

```bash
pnpm install
```

### 3️⃣ Setup environment files

Each app (like `api`) has its own `.env.example`.  
To copy and create `.env` from it, run:

#### 🪄 Windows (PowerShell)
```bash
Copy-Item apps/api/.env.example apps/api/.env
```

#### 🪄 Linux / macOS
```bash
cp apps/api/.env.example apps/api/.env
```


## 🧩 Development Commands (Root)

### Run both API + Web concurrently:
```bash
pnpm dev
```

### Run only the API:
```bash
pnpm dev:api
```

### Run only the frontend:
```bash
pnpm dev:web
```

### Build all:
```bash
pnpm build
```

---

## 🧠 Tech Stack

| Layer | Tech |
|-------|------|
| Backend | NestJS, Prisma ORM |
| Database | PostgreSQL (Docker) |
| Frontend | Next.js |
| Package Manager | pnpm |
| Auth | JWT + Refresh Tokens |
| ORM | Prisma |
| Styling | TailwindCSS (frontend) |

---


## 🧑‍💻 Author
**CainWasSlain**  
Feel free to fork and customize this boilerplate for your own ERP or SaaS projects.
