# 🛒 E-Commerce App

A full-stack e-commerce web application with a customer-facing storefront, dedicated admin dashboard, and a RESTful backend API. Built with the MERN stack (MongoDB, Express.js, React, Node.js).

---

## 📁 Project Structure

```
E-commerce-app/
├── frontend/       # React customer storefront
├── admin/          # React admin dashboard
└── backend/        # Node.js + Express REST API
```

---

## ✨ Features

### Customer Storefront
- Browse and search products by category
- Product detail pages with images and descriptions
- Shopping cart — add, update, and remove items
- User registration and login (JWT-based authentication)
- Checkout and order placement

### Admin Dashboard
- Manage products — create, edit, and delete listings
- View and manage customer orders
- Track inventory and order status

### Backend API
- RESTful API built with Express.js
- MongoDB database with Mongoose ODM
- JWT-based authentication and route protection
- Structured routes for products, users, orders, and cart

---

## 🛠️ Tech Stack

| Layer     | Technology                                  |
|-----------|---------------------------------------------|
| Frontend  | React.js, React Router, Context API / Redux |
| Admin     | React.js                                    |
| Backend   | Node.js, Express.js                         |
| Database  | MongoDB, Mongoose                           |
| Auth      | JSON Web Tokens (JWT)                       |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (local instance or [MongoDB Atlas](https://www.mongodb.com/atlas))

### 1. Clone the repository

```bash
git clone https://github.com/prasaman/E-commerce-app.git
cd E-commerce-app
```

### 2. Set up the Backend

```bash
cd backend
npm install
```

Create a `.env` file in the `backend/` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Start the backend server:

```bash
npm start
```

The API will be running at `http://localhost:5000`.

### 3. Set up the Frontend

```bash
cd ../frontend
npm install
npm start
```

The customer storefront will open at `http://localhost:3000`.

### 4. Set up the Admin Panel

```bash
cd ../admin
npm install
npm start
```

The admin dashboard will be available at `http://localhost:3001` (or the next available port).

---

## 🔌 API Overview

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| POST   | `/api/auth/register` | Register a new user      |
| POST   | `/api/auth/login`    | Login and receive JWT    |
| GET    | `/api/products`      | Get all products         |
| GET    | `/api/products/:id`  | Get a single product     |
| POST   | `/api/products`      | Create a product (admin) |
| PUT    | `/api/products/:id`  | Update a product (admin) |
| DELETE | `/api/products/:id`  | Delete a product (admin) |
| GET    | `/api/orders`        | Get all orders (admin)   |
| POST   | `/api/orders`        | Place a new order        |

---

## 👤 Author

**Prasaman**  
GitHub: [@prasaman](https://github.com/prasaman)
