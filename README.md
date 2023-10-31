# Bookstore API

This is a simple API for managing books and users. It allows users to perform CRUD operations on books and users.

## API Endpoints and Usage

### Books
- `POST /books`: Add a new book (requires `title`, `author`, and `summary` in the request body).
- `GET /books`: Get a list of all books.
- `GET /books/:id`: Get details of a specific book by its ID.
- `PUT /books/:id`: Update a book's details (requires `title`, `author`, and `summary` in the request body).
- `DELETE /books/:id`: Delete a book by its ID.

### Users
- `POST /users`: Add a new user (requires `name`, `email`, and `password` in the request body).
- `GET /users`: Get a list of all users.
- `GET /users/:id`: Get details of a specific user by its ID.
- `PUT /users/:id`: Update a user's details (requires `name`, `email`, and `password` in the request body).
- `DELETE /users/:id`: Delete a user by its ID.

## Set Up and Run Locally

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Start MongoDB on your local machine (`mongod`).
4. Run the application using `node app.js`.
5. The server will be running at `http://localhost:3000`.

## Assumptions and Decisions

- The API assumes that book data consists of `title`, `author`, and `summary`.
- The API assumes that user data consists of `name`, `email`, and `password`.
- MongoDB is used as the database, assumed to be running locally on the default port (`27017`).

Feel free to modify the code as needed for your specific use case.
