# Color Management App

This is a React application for managing colors via an API. The app allows listing, adding, deleting and filtering colors.

## Running the Project

To run the application locally, follow these steps:

### 1. Clone the Repository

```sh
git clone https://github.com/janam126/The-Unit-Color-Challenge
```

### 2. Install Dependencies

```sh
npm install
```

### 3. Start the JSON Server

The application uses JSON Server as a mock backend. To start it, run the following command:

```sh
npm run server
```

This will start the backend on `http://localhost:5000`.

### 4. Start the Frontend Application

In a separate terminal, start the frontend application:

```sh
npm start dev
```

The application will run on `http://localhost:3000`.

## Available Scripts

In the project directory, you can run the following commands:

- `npm start dev` – Starts the frontend application in development mode.
- `npm run server` – Starts the JSON server.
- `npm run build` – Builds the app for production.
- `npm test` – Runs tests.

## Technologies Used

- React + TypeScript
- Styled Components (for styling)
- JSON Server (for mock API)
- Axios (for API requests)
- Jest (testing)
