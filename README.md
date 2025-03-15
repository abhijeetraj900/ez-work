# EZ Works - Business Support Services

## Overview
This is a **single-page React application** that provides a simple form for email submission, integrated with an API. The UI is responsive and follows the design provided in Adobe XD.

## Features
- **Responsive Design** (Optimized for Mobile, Tablet, and Desktop views)
- **Email Validation**
- **API Integration** (Handles different API responses)
- **Error Handling** (Displays appropriate error messages for invalid emails)

## Tech Stack
- **React.js**
- **Tailwind CSS** (For styling)
- **Lucide Icons** (For UI icons)

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- Node.js (>= 16.0)
- npm or yarn

### Steps to Run the Project
1. **Clone the Repository**
   ```sh
   git clone https://github.com/abhijeetraj900/ez-work
   cd your-project-folder
   ```
2. **Install Dependencies**
   ```sh
   npm install   # or yarn install
   ```
3. **Start the Development Server**
   ```sh
   npm run dev   # or yarn dev
   ```
4. Open **http://localhost:3000/** in your browser.

## API Integration
- **API Endpoint:** `http://3.228.97.110:9000/api`
- **Method:** `POST`
- **Request Body:** `{ "email": "example@example.com" }`
- **Responses:**
  - `200 OK`: Form submitted successfully
  - `422 Error`: If email ends with `@ez.works`

## Validation Rules
1. The email field **cannot be empty**.
2. The email should be in a **valid email format**.
3. If the email ends with `@ez.works`, an error message is displayed.


## Postman Collection
A Postman dump with API test cases is included. You can import it into Postman for testing.

## Deployment
To deploy this app, use **Vercel**
```sh
npm run build   # or yarn build
```

## Author
- **[Abhijeet Raj](https://www.linkedin.com/in/abhijeet900/)**

## License
This project is licensed under the **MIT License**.

