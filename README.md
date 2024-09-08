# Minutentag | Beer E-Commerce API

## 1. Project Overview

The Beer E-Commerce API is designed to serve as the backend for a React-based e-commerce application focused on beer products. It provides endpoints to fetch product data and stock prices. This API is crucial for managing and retrieving product information in the frontend application.

## 2. How to Install & Run

### 2.1. Install the Latest Stable Version of Node.js

Download and install Node.js from [https://nodejs.org/](https://nodejs.org/).

### 2.2. Clone the repository

```bash
git clone https://github.com/jeanpierresm/minutentag-beer-api.git
cd minutentag-beer-api
```

### 2.3. Install Necessary Dependencies

Once being in the project folder, run the following command to install all required dependencies:

```bash
npm install
```

### 2.4. Run the Development Server

To start the development server, run the following command:

```bash
node .\src\server.js
```

## 3. Libraries Used

- **Express**: A fast, minimalist web framework for Node.js that simplifies building server-side applications and APIs. It provides robust routing, middleware, and other utilities to create RESTful APIs and handle HTTP requests and responses.
- **CORS**: A middleware for enabling Cross-Origin Resource Sharing (CORS) in Express applications. It allows the server to specify which origins are permitted to access its resources, helping to manage security and compatibility between different web domains.
