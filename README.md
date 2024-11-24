# Bike Store API

An Express application built with TypeScript to manage a Bike Store, integrated with MongoDB using Mongoose for data operations. The application includes CRUD operations for managing bikes and orders, schema validations, error handling, and revenue calculation using MongoDB aggregation.

## Table of Contents

- [Demo Link](#demo-link)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Project Structure](#project-structure)

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


