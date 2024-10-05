# CRM Application (MERN Stack)

## Overview
This CRM application is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It is designed to help businesses manage customer relationships efficiently by providing features like customer profile management, login and registration, and a user-friendly dashboard.

## Features
- User authentication (login and registration)
- Customer profile management
- Responsive UI with Bootstrap
- Role-based access control
- Dashboard displaying customer details
- Create, Read, Update, Delete (CRUD) functionality for customer profiles
- Analytics and reporting on customer data

## Technologies Used
- **Frontend**: React.js, Bootstrap, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT), bcrypt for password hashing

## Getting Started

### Prerequisites
Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/) (for local development) or access to a cloud database
- [Git](https://git-scm.com/) (optional, for cloning the repository)

### Clone the Repository
```bash

Install Dependencies
Backend
Navigate to the server folder and install dependencies:

bash
Copy code
cd server
npm install
Frontend
Navigate to the client folder and install dependencies:

bash
Copy code
cd ../client
npm install
Setup Environment Variables
Create a .env file in the server directory and add the following environment variables:

plaintext
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Running the Application
Start the Backend Server
From the server directory, run:

bash
Copy code
npm run dev
Start the Frontend
Open a new terminal, navigate to the client directory, and run:

bash
Copy code
npm start
The application should now be running on http://localhost:3000 (frontend) and http://localhost:5000 (backend).

Usage
Navigate to the application in your browser.
Register a new user or log in if you already have an account.
Use the dashboard to manage customer profiles.
Contributing
Contributions are welcome! Please follow these steps to contribute:

Fork the repository.
Create a new branch (git checkout -b feature/YourFeature).
Make your changes and commit them (git commit -m 'Add some feature').
Push to the branch (git push origin feature/YourFeature).
Open a pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.


git clone https://github.com/Sridharraj2023/CRM_MERN.git
cd CRM_MERN
