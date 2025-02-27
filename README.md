# Food Delivery Web Application

This project is a full-stack food delivery web application that enables users to browse menus, add items to their cart, and securely place orders using Stripe for payment processing. Below is a detailed overview of the project.

## Features

- **User Authentication:** Secure user login and registration.
- **Dynamic Menu:** Displays a list of available food items fetched from the backend.
- **Cart Management:** Users can add, remove, and modify items in their cart.
- **Order Placement:** Users can place orders and proceed to payment.
- **Stripe Integration:** Secure payment gateway for handling transactions.
- **Persistent Cart Data:** Cart data is stored locally and synced with the backend.

![Logo](/client/src/assets/all.png)
[Logo](client/src/assets/backgroundImage.png)
![Alt text](/media/all.png)

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Axios**: For making HTTP requests.
- **Context API**: For state management.
- **Toastify**: For user notifications.

### Backend
- **Node.js**: Server runtime.
- **Express**: Web framework for building the API.
- **MongoDB**: Database for storing user, order, and product data.
- **Stripe API**: For payment processing.

## Project Structure

### Frontend
- **`src/components`**: Contains reusable UI components like the cart, menu, and order confirmation.
- **`src/context/StoreContext.js`**: Manages global state such as cart items and authentication tokens.
- **`src/pages`**: Contains main pages such as Home, Checkout, and Order Confirmation.

### Backend
- **`routes/orderRoutes.js`**: Handles order-related API endpoints.
- **`models/OrderModel.js`**: Defines the order schema.
- **`models/UserModel.js`**: Defines the user schema.
- **`controllers/orderController.js`**: Contains logic for handling orders and Stripe payments.

## Installation and Setup

### Prerequisites
- Node.js (v14 or later)
- MongoDB (local or cloud instance)

### Backend Setup
1. Clone the repository.
   ```bash
   git clone <repository_url>
   cd backend
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend root directory and add the following variables:
   ```env
   STRIPE_KEY=your_stripe_secret_key
   MONGO_URI=your_mongo_db_connection_string
   PORT=3100
   ```
4. Start the server.
   ```bash
   npm start
   ```

### Frontend Setup
1. Navigate to the frontend directory.
   ```bash
   cd frontend
   ```
2. Install dependencies.
   ```bash
   npm install
   ```
3. Start the development server.
   ```bash
   npm run dev
   ```

### Running the Application
- Open your browser and navigate to `http://localhost:3000` for the frontend.
- The backend will run on `http://localhost:3100`.

## API Endpoints

### Order API
- **`POST /api/order/place`**: Place an order and generate a Stripe checkout session.
- **Request Body:**
  ```json
  {
    "userId": "string",
    "items": [
      { "_id": "string", "quantity": "number", "price": "number", "name": "string" }
    ],
    "amount": "number",
    "address": "string"
  }
  ```
- **Response:**
  ```json
  {
    "success": true,
    "session_url": "string"
  }
  ```

## Stripe Integration
- Payments are handled using Stripe Checkout Sessions.
- Success and cancel URLs redirect users to appropriate pages.

## Known Issues

### 1. Data Persistence Issue
- **Problem**: Added food items to the cart on the frontend are lost upon refreshing the page, even though they are saved in the backend database.
- **Cause**: The current implementation does not retrieve and synchronize cart data from the backend on page load.

### 2. Stripe Checkout Navigation Issue
- **Problem**: Clicking on "Purchase" does not navigate to the Stripe checkout page as expected.
- **Cause**: This could be due to:
  1. Incorrect setup of the Stripe session on the backend.
  2. Missing or invalid Stripe API key.
  3. Errors in the `placeOrder` function on the frontend.

- **Due to the known issues, the project is still in development**
## Contributing
Contributions are very much welcome and appreciated! Please fork the repository and submit a pull request.


