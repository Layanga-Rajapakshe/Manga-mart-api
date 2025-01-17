## Overview

The backend for Manga Mart Comic Store is a secure and scalable API that powers the e-commerce platform.

## Features

**Authentication**: User authentication with JWT.

**Product Management**: CRUD operations for managing product inventory.

**Order Management**: Handle customer orders and payment details.

**Payment Integration**: PayPal integration for secure transactions.

## Tech Stack

**Node.js**: Server-side JavaScript runtime.

**Express.js**: Framework for building RESTful APIs.

**MongoDB**: Database for storing product and order details.

**Mongoose**: ODM for MongoDB.

## Setup Instructions

Clone the repository:
```
git clone <backend-repo-url>
cd manga-mart-api
```

Install dependencies:
```
npm install
```

Configure environment variables in a .env file

Start the server:
```
npm start
```

## Folder Structure

routes/: API endpoint definitions.

models/: Database schemas for products and orders.

controllers/: Business logic for API routes.

middlewares/: Authentication and error handling.
