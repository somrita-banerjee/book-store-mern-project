## Book store application

 The application is built using the MERN stack(MongoDB, Express.js, React, and Node.js).

## Features:
- Add a book
- Edit a book
- Delete a book
- View all books
- View a single book

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)

## Getting Started

These instructions will help to set up the project on local machine for development and testing purposes.

### Prerequisites

The following are installed on the machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (locally or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud database)

### Installation
1. **Clone the repository:**

   ```bash
   git clone https://github.com/somrita-banerjee/book-store-mern-project.git
   cd book-store-mern-project
    ```

### Running the application
1. Clone the repository
2. Run `npm install` in the backend directory to install the dependencies
3. Run `npm run dev` to start the backend
4. Navigate to the frontend directory and run `npm install` to install the dependencies
5. Run `npm run dev` to start the frontend
6. Navigate to `http://localhost:3000` to view the application

## Directory Structure
```

book-store/
├── frontend/           # Frontend React application
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
├── backend/           # Backend Express application
│   └── src/
│       ├── models/
│       ├── routes/
│       ├── config.js
│       └── index.js

```
## Books Content
The books are stored in a MongoDB database. Each book has the following fields:
- Title
- Author
- Pubish Year

## Books API
The API has the following endpoints:
- GET /books - Get all books
- GET /books/:id - Get a single book
- POST /books - Add a book
- PUT /books/:id - Edit a book
- DELETE /books/:id - Delete a book

## Use of Different HTTP Methods
- GET - Used to retrieve data from the backend
- POST - Used to send data to the backend
- PUT - Used to update data on the backend
- DELETE - Used to delete data from the backend

## Technologies used:
- Frontend: React.js, Bootstrap, Axios, React Router.
- Backend: Node.js, Express.js, MongoDB, Mongoose.
- Others: Insomnia, Git.



## Learned
- How to build a full-stack application using the MERN stack
- How to use React Router to create routes in a React application
- How to use Axios to make HTTP requests

