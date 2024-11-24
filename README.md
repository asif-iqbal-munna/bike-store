# Bike Store API

An Express application built with TypeScript to manage a Bike Store, integrated with MongoDB using Mongoose for data operations. The application includes CRUD operations for managing bikes and orders, schema validations, error handling, and revenue calculation using MongoDB aggregation.

## Table of Contents

- [Demo Link](#demo-link)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)

---

## Demo Link 
- API BASE URL
```bash
  https://bike-store-flame.vercel.app/api/
```

## Features

1. **Product Management**:
   - Create, retrieve, update, and delete bikes.
   - Schema validation for data integrity.
   - Query bikes by category, name, or brand.

2. **Order Management**:
   - Place an order for a bike with inventory management.
   - Calculate total revenue using MongoDB aggregation.

3. **Error Handling**:
   - Generic error responses for validation, resource not found, and server errors.

4. **TypeScript Integration**:
   - Ensures type safety for better developer experience.

---

## Technologies Used

- **Backend Framework**: Express.js
- **Programming Language**: TypeScript
- **Database**: MongoDB
- **ODM**: Mongoose
- **Environment Management**: dotenv
- **Testing**: Postman

---

## Setup and Installation

### Prerequisites

- Node.js (>= 16.x)
- MongoDB (local or cloud instance)
- npm (comes with Node.js)

### Steps

#### 1. Clone the repository:
   ```bash
   git clone https://github.com/asif-iqbal-munna/bike-store.git
   cd bike-store-api
  ```

 #### 2. Install Dependencies

  ```bash
  npm install
  ```
#### 3. Set Up Environment Variables: Create a .env file in the root directory and configure the variables listed here.

```plaitext
PORT=5000                  # Port for the server
MONGO_URI=mongodb://...    # MongoDB connection string
```
 #### 2. Start the Application:
   ```bash
  npm run dev
  ```

## Project Structure
```bash
src/
├── config/           # Database and app configuration
├── controllers/      # API controllers for products and orders
├── models/           # Mongoose schemas and models
├── routes/           # Express route definitions
├── middlewares/      # Custom middleware (error handling, validation)
├── utils/            # Helper functions (e.g., response handlers)
├── app.ts            # App initialization
└── server.ts         # Entry point to the application


```

## Endpoints

### **1. Create a Bike**

- **Endpoint:** **`/api/products`**
- **Method:** `POST`
- **Request Body:**

```json
{
  "name": "Xtreme Mountain Bike",
  "brand": "Giant",
  "price": 1200,
  "category": "Mountain",
  "description": "A high-performance bike built for tough terrains.",
  "quantity": 50,
  "inStock": true
}
```

- **Response:** Success message and created bike details.

```json
{
  "message": "Bike created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1200,
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

---

### **2. Get All Bikes**

- **Endpoint:** **`/api/products`**
- **Method:** `GET`
- **Response:** A list of all bikes.
- Query: A list of all bikes, accessed via `/api/products?searchTerm=value`. `searchTerm` can be `name`, `brand`, or `category`.

```json
{
  "message": "Bikes retrieved successfully",
  "status": true,
  "data": [
    {
      "_id": "648a45e5f0123c45678d9012",
      "name": "Xtreme Mountain Bike",
      "brand": "Giant",
      "price": 1200,
      "category": "Mountain",
      "description": "A high-performance bike built for tough terrains.",
      "quantity": 50,
      "inStock": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z"
    }
    // ... rest data
  ]
}
```

---
### **3. Get a Specific Bike**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `GET`
- **Response:** The details of a specific bike by ID.

```json
{
  "message": "Bike retrieved successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1200,
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 50,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

---
### **4. Update a Bike**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `PUT`
- **Request Body:** (Bike details to update)

```json
{
  "price": 1300,
  "quantity": 30
}
```

- **Response:** Success message and updated bike details.

```json
{
  "message": "Bike updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Xtreme Mountain Bike",
    "brand": "Giant",
    "price": 1300, // Price updated
    "category": "Mountain",
    "description": "A high-performance bike built for tough terrains.",
    "quantity": 30, // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z" // Updated timestamp
  }
}
```

---
### **5. Delete a Bike**

- **Endpoint:** **`/api/products/:productId`**
- **Method:** `DELETE`
- **Response:** Success message confirming the bike has been deleted.

```json
{
  "message": "Bike deleted successfully",
  "status": true,
  "data": {}
}
```

---
### **6. Order a Bike**

- **Endpoint:** **`/api/orders`**
- **Method:** `POST`
- **Request Body:**

```json
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 2400
}
```

- **Response:** Success message confirming the order.

```json
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 2400,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}
```

---
### **7. Calculate Revenue from Orders**

- **Endpoint:** **`/api/orders/revenue`**
- **Method:** `GET`
- **Response:** The total revenue from all orders.

```json
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 3600 // Total revenue calculated from all orders
  }
}
```

---


