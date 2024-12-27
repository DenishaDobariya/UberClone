# Uber Clone Project

This project is an Uber Clone application that includes both a backend and frontend for managing user sign-ups, logins, vehicle bookings, and captain interactions.

## Features

- **User Authentication**: JWT-based authentication for users and captains.
- **Vehicle Booking**: Users can book rides, and captains can accept or reject bookings.
- **Google Maps API Integration**: Location-based services to assist in ride management.

## Prerequisites

- **Node.js** (v14.x or higher)
- **MongoDB** (local or cloud-based)
- **Frontend & Backend dependencies**:
  - Nodemon (for automatic backend server restarts)
  - Vite (for frontend development server)

## Installation

## Backend Setup

1. **Clone the repository**:

   ```bash
   git clone <your-repository-url>
   cd <your-project-directory>

2. **Install backend dependencies**:

   Navigate to the backend directory and run:

   ```bash
   npm install

3. **Create `.env` file**:

   In the root of the backend directory, create a `.env` file with the following content:

   ```env
   PORT=4000
   DB_CONNECT=Your_MongoDB_String
   JWT_SECRET=Your_JWT_secertkey
   GOOGLE_MAPS_API=Your_Google_map_apikey

  Explanation of environment variables:
    
  - PORT: Port the backend server will run on.
  - DB_CONNECT: MongoDB connection string for the Uber database.
  - JWT_SECRET: Secret key used to sign JWT tokens for authentication.
  - GOOGLE_MAPS_API: Google Maps API key for location services.
   
4. **Run the Backend Server**:

   To start the backend server with Nodemon, use the following command:

   ```bash
   npx nodemon
   
- This will start the backend server on http://localhost:4000.

## Frontend Setup

1. **Navigate to the frontend directory**:

   Go to the frontend folder where the React app is located:

   ```bash
   cd <frontend-directory>

2. **Install frontend dependencies**:

   Run the following command to install the necessary node modules:

   ```bash
   npm install

3. **Create `.env` file**:

   In the root of the frontend directory, create a `.env` file with the following content:

   ```env
   VITE_BASE_URL=Backend_URL
   VITE_GOOGLE_MAPS_API_KEY=Your_GOOGLEMAP_APIKEY

  Explanation of environment variables:

  - VITE_BASE_URL: Base URL for the backend API.
  - VITE_GOOGLE_MAPS_API_KEY: Google Maps API key for frontend integration.

 4. **Run the Frontend Development Server**:

     Start the frontend server using the following command:

     ```bash
     npm run dev

This will start the frontend server on http://localhost:5173.

Running the Full Application
- The backend will run on port 4000 (http://localhost:4000).
- The frontend will run on port 5173 (http://localhost:5173).

## Available Features
- User Sign-Up : Users can create an account by providing an email and password.

- User Login : Users can log in using their email and password.After login, users can view and book available vehicles.
 
- Vehicle Booking:Users can select a vehicle and book a ride.
  
- Captain (Driver) Sign-Up and Login:Captains can sign up and log in to manage ride bookings.
Captains will receive booking requests from users and can accept or reject them.

## Troubleshooting
- MongoDB Connection: Ensure your MongoDB service is running locally or use a cloud service like MongoDB Atlas.
- Google Maps API Key: Make sure you have a valid API key set in both backend and frontend .env files.
- Port Conflicts: If any port is already in use, you may need to change the PORT variable in the .env files for both frontend and backend.









