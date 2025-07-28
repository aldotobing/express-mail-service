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
   ```

4. Start the server:

   ```bash
   node index.js
   ```

5. The service will be running on `http://localhost:3030`

## API Endpoints

```http
POST /send-email
```

Sends an email using the details provided in the request body.

## Request Body Example

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "subject": "Test Email",
  "message": "Hello, this is a test email!",
  "to": "recipient@example.com"
}
```

## Request Body Parameters

- `name`: The sender's name
- `email`: The sender's email address
- `subject`: The email subject
- `message`: The email content
- `to`: The recipient's email address (required)

## Docker Support

You can run this service using Docker. Follow these steps:

### Building the Docker Image

```bash
# Build the image
docker build -t express-mail-service .
```

### Running with Docker

There are two ways to run the container:

#### Option 1: Using command line arguments

```bash
docker run -d \
  -p 3030:3030 \
  -e SMTP_HOST=smtp.gmail.com \
  -e SMTP_PORT=587 \
  -e SMTP_USER=your_email@gmail.com \
  -e SMTP_PASS=your_app_password \
  --name mail-service \
  express-mail-service
```

#### Option 2: Using environment file

```bash
# Create a .env file with your settings first, then:
docker run -d \
  -p 3030:3030 \
  --env-file .env \
  --name mail-service \
  express-mail-service
```

### Docker Commands Reference

```bash
# Stop the container
docker stop mail-service

# Start the container
docker start mail-service

# Remove the container
docker rm mail-service

# View logs
docker logs mail-service

# View container status
docker ps
```

The service will be accessible at `http://localhost:3030` when running in Docker.

## License

This project is licensed under the [MIT License](./LICENSE).
