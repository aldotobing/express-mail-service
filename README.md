# express-mail-service

![mail-smtp-service](/maxresdefault.jpg)

This project is a backend service designed to send emails via a RESTful API. Built with Node.js and Express, it leverages Nodemailer for handling email delivery. This service does not include a frontend; instead, it provides an endpoint for other applications to send emails programmatically.

## Technologies Used

- **Backend**: Node.js, Express
- **Email**: Nodemailer
- **CORS**: Middleware to handle cross-origin requests
- **dotenv**: For managing environment variables

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/aldotobing/express-mail-service.git
   cd express-mail-service
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a .env file in the root directory and configure your SMTP settings:

   ```bash
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_user
   SMTP_PASS=your_smtp_password
   RECEIVER_EMAIL=recipient@example.com
   ```

4. Start the server:

   ```bash
   node index.js
   ```

5. The service will be running on http://localhost:3030

## API Endpoints
```
POST /send-email
```
Sends an email using the details provided in the request body.

## Request Body Example
    {
    "name": "John Doe",
    "email": "johndoe@example.com",
    "subject": "Test Email",
    "message": "Hello, this is a test email!"
    }
    
## License

This project is licensed under the [MIT License](./LICENSE).
